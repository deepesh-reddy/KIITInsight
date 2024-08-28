import { createSlice } from '@reduxjs/toolkit'
import { server } from '../../main'
import axios from 'axios'

const initialState = {
  isLogin: false,
  token: null,
  user: [],
  message: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLogin = true
      // state.token = action.payload.token
      state.user = action.payload.user
      localStorage.setItem('isLogin', state.isLogin)
      localStorage.setItem('user', JSON.stringify(action.payload.user))
    },
    loginFailed(state, action) {
      state.isLogin = false
      state.token = null
      state.user = []
      localStorage.removeItem('isLogin')
      localStorage.removeItem('user')
    },
    logoutSuccess(state, action) {
      state.isLogin = false
      state.token = null
      state.user = []
      localStorage.removeItem('isLogin')
      localStorage.removeItem('user')
    },
    loadFromLocalStorage(state) {
      const isLogin = localStorage.getItem('isLogin')
      const user = localStorage.getItem('user')
      if (isLogin === 'true' && user) {
        state.isLogin = true
        state.user = JSON.parse(user)
      }
    },
    updateProfileSuccess(state, action) {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
  },
})
export const {
  loginSuccess,
  loginFailed,
  logoutSuccess,
  updateProfileSuccess,
} = authSlice.actions

export default authSlice.reducer

export function logoutUser() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${server}/user/logout`, {
        withCredentials: true,
      })
      console.log('Logout response:', response)
      dispatch(logoutSuccess())
    } catch (error) {
      console.error('Error in logout:', error.response?.data || error.message)

      dispatch(logoutSuccess())
    }
  }
}
export function checkLoginStatus() {
  return async (dispatch) => {
    const isLogin = localStorage.getItem('isLogin')
    const user = localStorage.getItem('user')

    if (isLogin === 'true' && user) {
      dispatch(loginSuccess({ user: JSON.parse(user) }))
    } else {
      try {
        const response = await axios.get(`${server}/user/login/success`, {
          withCredentials: true,
        })
        console.log('Login success response:', response)
        dispatch(loginSuccess(response.data))
      } catch (error) {
        console.error('Login status check error:', error.response || error)
        dispatch(loginFailed())
      }
    }
  }
}

export const updateUserProfile = (userData) => {
  return async (dispatch) => {
    console.log(userData)
    try {
      const { data } = await axios.put(
        `${server}/user/update-profile`,
        userData,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      console.log('Profile update response:', data)
      // dispatch(updateProfileSuccess(response.data.user))
    } catch (error) {
      console.error(
        'Error updating profile:',
        error.response?.data || error.message,
      )
      // You might want to dispatch an error action here
    }
  }
}
