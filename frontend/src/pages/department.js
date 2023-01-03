import React from 'react'
import { NavLink } from 'react-router-dom'
import DepartmentModel from '../partials/department/departmentModel'
import { FiEdit } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import axios from 'axios'
const Department = () => {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    getDepartments().then(data => {
      setDepartments(data.department)
    })
  }, [])

  const url = 'http://localhost:3000/department/getDepartment'
  const getDepartments = async () => {
    console.log('data fetch first')
    try {
      return await axios.get(url).then(res => res.data)
    } catch (error) {
      console.log(error.message)
    }
  }
  const handleDelete = async id => {
    const url = 'http://localhost:3000/department/deleteDepartment/' + id
    await axios.delete(url).then(res => {
      setDepartments(
        departments.filter((value, index, arr) => {
          return value._id !== id
        })
      )
    })
  }
  const generateCSV = () => {
    const tableElement = document.querySelector('#table')
    let csv = ''
    for (const row of tableElement.rows) {
      for (const cell of row.cells) {
        if (cell.innerText !== '' && cell.innerText !== 'ACTIONS') {
          csv += cell.innerText + ','
        }
      }
      csv += '\n'
    }
    return csv
  }

  const downloadCSV = () => {
    const csv = generateCSV()
    console.log(csv)
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'department.csv'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }
  return (
    <div>
      <div className='w-full bg-gray-100 rounded-lg py-10 px-5 md:px-0'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='flex flex-col'>
            <div className='my-4'>
              <h1 className='text-3xl font-bolder leading-tight text-gray-900'>
                All Departments
              </h1>
            </div>
            <div className='-mb-2 py-4 flex flex-wrap flex-grow justify-between'>
              <div className='flex items-center py-2'>
                <input
                  className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                  id='inline-search'
                  type='text'
                  placeholder='Search'
                />
              </div>
              <div className='flex items-center py-2'>
                {/* <NavLink
                  to={'/department/new'}
                  className='inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline'
                >
                  Create New
                </NavLink> */}
                <button
                  className='inline-flex px-8 py-2 mr-5 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline'
                  onClick={() => downloadCSV()}
                >
                  Generate CSV
                </button>
                <DepartmentModel />
              </div>
            </div>
            <div className='-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
              <div className='align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200'>
                <table className='table-auto w-full' id='table'>
                  <thead>
                    <tr className='bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase'>
                      <th className='p-2 md:px-2 md:py-3 text-left font-medium'>
                        No.
                      </th>
                      <th className='p-2 md:px-20 md:py-3 text-left font-medium'>
                        Name
                      </th>
                      <th className='p-2 md:px-0 md:py-0 text-left font-medium'>
                        Actions
                      </th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody className='bg-white'>
                    {departments.map(department => (
                      <tr
                        id={department._id}
                        key={departments.indexOf(department) + 1}
                      >
                        <td className='p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
                          {departments.indexOf(department) + 1}
                        </td>
                        <td className='p-2 text-sm md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
                          {department.title}
                        </td>
                        <td className=' whitespace-no-wrap border-b border-gray-200'>
                          <NavLink
                            to={'/department/update/' + department._id}
                            className='text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg'
                          >
                            <FiEdit />
                          </NavLink>
                        </td>
                        <td className='ml-4  pr-2 md:pr-3 whitespace-no-wrap border-b border-gray-200'>
                          <NavLink
                            to='#'
                            className='text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline'
                          >
                            <FaTrash
                              onClick={() => handleDelete(department._id)}
                            />
                          </NavLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Department
