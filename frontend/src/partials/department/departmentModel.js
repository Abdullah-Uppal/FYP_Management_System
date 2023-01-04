import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
// import { useParams } from 'react-router-dom'
import Alert from '../../utils/alert'

const DepartmentModel = props => {
  const { id } = props.id || {}
  console.log(id)

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
          props.onClose()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  const updateDepartmentHandler = async id => {
    await axios
      .put('http://localhost:5000/department/updateDepartmment/' + id, {
        title: String(Input.title)
      })
      .then(res => {
        if (res.status === 200) {
          setAlert({
            redirect: '/departments',
            message: 'Department updated Successfully'
          })
          setIsAlert(true)
          props.onClose()
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
      {/* {isShow ? (
        <> */}
      {/* 
      <div id='meraModal'>
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
      </div> */}
      <div>
      {isAlert && <Alert redirect={alert.redirect} message={alert.message} />}
        <div className='fixed px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center'>
          <div className='fixed transition-opacity'>
            <div className='absolute bg-gray-300 opacity-30'></div>
          </div>

          <div className='bg-white rounded-lg overflow-hidden shadow-s transform transition-all sm:max-w-lg sm:w-full'>
            <form onSubmit={handleSubmit}>
              <div className='bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <h3 className='text-lg leading-6 font-medium text-white'>
                    {isUpdate ? 'Edit Department' : 'Add Department'}
                  </h3>
                </div>
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
              </div>
              <div className='bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <span className='flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto'>
                  <button
                    type='submit'
                    className='inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                  >
                    {isUpdate ? 'Edit' : 'Add'}
                  </button>
                </span>
                <span className='mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto'>
                  <button
                    type='button'
                    className='inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5'
                    onClick={props.onClose}
                  >
                    Close
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default DepartmentModel
