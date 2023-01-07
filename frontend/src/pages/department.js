import React from 'react'
import { useEffect, useState, useMemo, useCallback } from 'react'
import axios from 'axios'
import DeleteCell from '../components/tableCells/deleteCell'
import Detail from '../partials/detail'
import { FaBuilding } from 'react-icons/fa'
import Model from '../components/model'

const Department = () => {
    const [departments, setDepartments] = useState([])
    const [addDepartment, setDepartment] = useState([])

    const getAllDepartments = useCallback(() => {
        getDepartments().then(data => {
            setDepartments(data.department)
        })
    },[])


    useEffect(() => {
        getAllDepartments()
    }, [getAllDepartments])


    const url = 'http://localhost:5000/department/getDepartment'
    const getDepartments = async () => {
        console.log('data fetch first')
        try {
            return await axios.get(url).then(res => res.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleDelete = useCallback(async id => {
        const url = 'http://localhost:5000/department/deleteDepartment/' + id
        await axios.delete(url).then(res => {
            setDepartments(
                departments.filter((value, index, arr) => {
                    return value._id !== id
                })
            )
        })
    }
        , [departments])
    //   const generateCSV = () => {
    //     const tableElement = document.querySelector('#table')
    //     let csv = ''
    //     for (const row of tableElement.rows) {
    //       for (const cell of row.cells) {
    //         if (cell.innerText !== '' && cell.innerText !== 'ACTIONS') {
    //           csv += cell.innerText + ','
    //         }
    //       }
    //       csv += '\n'
    //     }
    //     return csv
    //   }

    //   const downloadCSV = () => {
    //     const csv = generateCSV()
    //     console.log(csv)
    //     const blob = new Blob([csv], { type: 'text/csv' })
    //     const url = URL.createObjectURL(blob)
    //     const a = document.createElement('a')
    //     a.href = url
    //     a.download = 'department.csv'
    //     document.body.appendChild(a)
    //     a.click()
    //     document.body.removeChild(a)
    //   }
    const handleAdd = () => {
        addDepartmentHandler(addDepartment)
     }
    const addDepartmentHandler = async (name) => {
        await axios
            .post('http://localhost:5000/department/addDepartment', {
                title: String(name)
            })
            .then(res => {
                if (res.status === 200) {
                    alert('Department Added Successfully')
                    getAllDepartments()
                    
                   
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const column = useMemo(() => [
        {
            name: '#',
            selector: row => row.name,
            sortable: true,
            filterable: true,
            cell: (row, index) => index + 1,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
            filterable: true,
        },
        {
            name: '',
            cell: (department) => <div className='flex gap-2'>
                {/* <EditCell path={'/department/update/' + department._id} /> */}
                <DeleteCell Event={handleDelete} param={department._id} />

            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },

    ], [handleDelete]);
    const [search, setSearch] = useState('');

    const filterFunction = (search, data) => {
        return data.filter((row) =>
            row.title.toLowerCase().includes(search.toLowerCase())
        );
    };


    return (
        // <div>
        //   <div className='w-full bg-gray-100 rounded-lg py-10 px-5 md:px-0'>
        //     <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        //       <div className='flex flex-col'>
        //         <div className='my-4'>
        //           <h1 className='text-3xl font-bolder leading-tight text-gray-900'>
        //             All Departments
        //           </h1>
        //         </div>
        //         <div className='-mb-2 py-4 flex flex-wrap flex-grow justify-between'>
        //           <div className='flex items-center py-2'>
        //             <input
        //               className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        //               id='inline-search'
        //               type='text'
        //               placeholder='Search'
        //             />
        //           </div>
        //           <div className='flex items-center py-2'>
        //             <button
        //               className='inline-flex px-8 py-2 mr-5 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline'
        //               onClick={() => downloadCSV()}
        //             >
        //               Generate CSV
        //             </button>
        //             <NavLink
        //               to={'/department/new'}
        //               className='inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline'
        //             >
        //               Add Department
        //             </NavLink>
        //           </div>
        //         </div>
        //         <div className='-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
        //           <div className='align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200'>
        //             <table className='table-auto w-full' id='table'>
        //               <thead>
        //                 <tr className='bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase'>
        //                   <th className='p-2 md:px-2 md:py-3 text-left font-medium'>
        //                     No.
        //                   </th>
        //                   <th className='p-2 md:px-20 md:py-3 text-left font-medium'>
        //                     Name
        //                   </th>
        //                   <th className='p-2 md:px-0 md:py-0 text-left font-medium'>
        //                     Actions
        //                   </th>
        //                   <th></th>
        //                 </tr>
        //               </thead>

        //               <tbody className='bg-white'>
        //                 {departments.map(department => (
        //                   <tr
        //                     id={department._id}
        //                     key={departments.indexOf(department) + 1}
        //                   >
        //                     <td className='p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                       {departments.indexOf(department) + 1}
        //                     </td>
        //                     <td className='p-2 text-sm md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                       {department.title}
        //                     </td>
        //                     <td className=' whitespace-no-wrap border-b border-gray-200'>
        //                     <NavLink
        //                         to={'/department/update/' + department._id}
        //                         className='text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg'
        //                       >
        //                         <FiEdit />
        //                       </NavLink>
        //                     </td>
        //                     <td className='ml-4  pr-2 md:pr-3 whitespace-no-wrap border-b border-gray-200'>
        //                       <NavLink
        //                         to='#'
        //                         className='text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline'
        //                       >
        //                         <FaTrash
        //                           onClick={() => handleDelete(department._id)}
        //                         />
        //                       </NavLink>
        //                     </td>
        //                   </tr>
        //                 ))}
        //               </tbody>
        //             </table>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <Detail title={'Departments'} column={column} data={filterFunction(search, departments)} search={search} setSearch={setSearch}>
            {/* <CreateNew title={'Add Department'} path={'/department/new'}  >
                <FaBuilding  size={17} className='text-white'  />
            </CreateNew> */}
            <Model title={'Add'} handleAdd={handleAdd} setTitle={setDepartment} value={addDepartment}>
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline justify-center "> Add Department <FaBuilding size={17} className='text-white' /></div>
            </Model>
        </Detail>
    )
}

export default Department
