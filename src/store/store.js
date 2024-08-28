import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './sllice/authSlice'

const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
})

export default store
