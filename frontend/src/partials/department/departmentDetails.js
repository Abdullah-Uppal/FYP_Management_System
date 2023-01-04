import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Alert from '../../utils/alert'

const DepartmentDetails = () => {
  const { id } = useParams()

  const [alert, setAlert] = useState({})
  const [isAlert, setIsAlert] = useState(false)

  var [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    id &&
      axios
        .get('http://localhost:5000/department/getOneDepartment/' + id)
        .then(res => {
          setDepartment(res.data)
          setIsUpdate(true)
        })
  }, [id])

  const [Input, setDepartment] = useState({
    _id: '',
    title: ''
  })

  const addDepartmentHandler = async () => {
    await axios
      .post('http://localhost:5000/department/addDepartment', {
        title: String(Input.title)
      })
      .then(res => {
        if (res.status === 200) {
          setAlert({
            redirect: '/departments',
            message: 'Department Added Successfully'
          })
          setIsAlert(true)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const updateDepartmentHandler = async id => {
    await axios
      .put('http://localhost:5000/department/updateDepartment/' + id, {
        title: String(Input.title)
      })
      .then(res => {
        if (res.status === 200) {
          setAlert({
            redirect: '/departments',
            message: 'Department updated Successfully'
          })
          setIsAlert(true)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = e => {
    setDepartment(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!isUpdate) {
      addDepartmentHandler()
    } else {
      updateDepartmentHandler(Input._id)
    }
  }

  return (
    <>
      <div className='flex flex-wrap items-center justify-center'>
        {isAlert && <Alert redirect={alert.redirect} message={alert.message} />}
        <form className='w-full max-w-lg' onSubmit={handleSubmit}>
          <label
            className='block uppercase tracking-wide text-white-600 text-4xl font-bold mb-2 text-center'
            htmlFor='grid-last-name'
          >
            {isUpdate ? 'Edit Department' : 'Add Department'}
          </label>
          {/* <div className='flex flex-wrap -mx-3 mb-6 items-center justify-center'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0 items-center justify-center'>
              <label
                className='block uppercase tracking-wide text-white-700 text-s font-bold mb-2'
                htmlFor='grid-first-name'
              >
                Department Name
              </label>
              <input
                value={Input.title}
                onChange={handleChange}
                name='title'
                className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                id='grid-dep-name'
                type='text'
                placeholder='Department of .......'
                required
              />
            </div>
          </div> */}
          <div className='mt-5 sm:mt-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5'>
            <label
              htmlFor='title'
              className='block text-sm font-medium leading-5 text-white sm:mt-px sm:pt-2'
            >
              Department Name
            </label>
            <div className='mt-1 sm:mt-0 sm:col-span-2'>
              <div className='max-w-xs rounded-md shadow-sm'>
                <input
                  value={Input.title}
                  onChange={handleChange}
                  name='title'
                  className='form-input block w-full py-2 px-3 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5'
                  type='text'
                  placeholder='Department of ...'
                  required
                />
              </div>
            </div>
          </div>
          <div
            className='items-center justify-center pl-40'
          >
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 md:mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
            >
              {isUpdate ? 'Update' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default DepartmentDetails
