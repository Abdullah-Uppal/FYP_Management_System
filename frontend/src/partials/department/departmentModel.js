import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Alert from '../../utils/alert'

const DepartmentModel = () => {
  const { id } = useParams()

  const [alert, setAlert] = useState({})
  const [isAlert, setIsAlert] = useState(false)

  var [isUpdate, setIsUpdate] = useState(false)
  useEffect(() => {
    id &&
      axios
        .get('http://localhost:3000/department/getOneDepartment/' + id)
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
      .post('http://localhost:3000/department/addDepartment', {
        title: String(Input.title)
      })
      .then(res => {
        if (res.status === 200) {
          setAlert({
            redirect: '/department',
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
      .put('http://localhost:3000/department/updateDepartmment/' + id, {
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
    <div>
      {isAlert && <Alert redirect={alert.redirect} message={alert.message} />}
      <label
        htmlFor='my-modal'
        className='inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline'
      >
        Add Department
      </label>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal' aria-hidden='true'>
        <div className='modal-box'>
          <label
            className='block uppercase tracking-wide text-white-600 text-2xl font-bold mb-2 text-center'
            htmlFor='grid-last-name'
          >
            {isUpdate ? 'Edit Department' : 'Add Department'}
          </label>
          <form className='w-full max-w-lg' onSubmit={handleSubmit}>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-1'>
                <label
                  className='block uppercase tracking-wide text-gray-600 text-lg font-bold mb-2'
                  htmlFor='grid-last-name'
                >
                  Title
                </label>
              </div>
              <input
                value={Input.title}
                onChange={handleChange}
                name='title'
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-last-name'
                type='text'
                placeholder='Department of .......'
                required
              />
            </div>
            <div className='modal-action'>
              <button
                type='button'
                className='btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
              <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
              >
                {isUpdate ? 'Edit' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DepartmentModel
