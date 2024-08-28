import React, { useState } from 'react'
import axios from 'axios'
import { server } from '../../main'

const StudentForm = () => {
  const [formData, setFormData] = useState({
    photoUrl: '',
    name: '',
    subjects: [],
    email: '',
    school: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleSubjectChange = (e) => {
    const newSubject = e.target.value.trim()
    if (newSubject) {
      setFormData((prevState) => ({
        ...prevState,
        subjects: [...prevState.subjects, newSubject],
      }))
    }
  }

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      photo: e.target.files[0],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${server}/teacher/post`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      //
      console.log(response)
      alert(response.data.message)
      setFormData({
        photoUrl: '',
        name: '',
        subjects: [],
        email: '',
        school: '',
      })
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-gray-400 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Student Information Form
              </h1>
            </div>

            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleSubmit}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <label
                    htmlFor="photoUrl"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Photo URL
                  </label>
                  <input
                    type="url"
                    id="photoUrl"
                    name="photoUrl"
                    required
                    value={formData.photoUrl}
                    onChange={handleChange}
                    placeholder="Enter the image URL"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="subjects"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Subjects
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      id="subjects"
                      name="subjects"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors   
 duration-200 ease-in-out"
                      onChange={handleSubjectChange}
                      placeholder="Enter a subject"
                    />
                    <button
                      type="button"
                      onClick={handleSubjectChange}
                      className="ml-2 bg-indigo-500 text-white rounded-md px-2 py-1 hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                    >
                      Add
                    </button>
                  </div>
                  {/* yaha subject dikha do */}
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="school"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Select School
                  </label>
                  <select
                    id="school"
                    name="school"
                    required
                    value={formData.school}
                    onChange={handleChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option value="">Choose a school</option>
                    <option value="school1">School 1</option>
                    <option value="school2">School 2</option>
                    <option value="school3">School 3</option>
                    <option value="school4">School 4</option>
                    <option value="school5">School 5</option>
                    <option value="school6">School 6</option>
                    <option value="school7">School 7</option>
                  </select>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white rounded-md px-4 py-2 hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentForm
