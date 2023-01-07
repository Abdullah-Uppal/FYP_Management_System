import React from 'react'
import { useEffect, useState, useMemo,useCallback } from 'react'
import axios from 'axios'
import GenderCell from '../../components/tableCells/genderCell'
import EditCell from '../../components/tableCells/editCell'
import DeleteCell from '../../components/tableCells/deleteCell'
import Detail from '../../partials/detail'

const Supervisor = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        getPersons().then(data => {
            setPersons(data.supervisor)
        })
    }, [])

    const url = 'http://localhost:3000/supervisor/getSupervisor'
    const getPersons = async () => {
        try {
            return await axios.get(url).then(res => res.data)
        } catch (error) {
            console.log(error)
        }
    }
    const handleDelete = useCallback(async id => {
        const url = 'http://localhost:3000/supervisor/deleteSupervisor/' + id
        await axios.delete(url).then(res => {
            setPersons(
                persons.filter((value, index, arr) => {
                    return value._id !== id
                })
            )
        })
    }, [persons]);

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
    //     a.download = 'supervisor.csv'
    //     document.body.appendChild(a)
    //     a.click()
    //     document.body.removeChild(a)
    //   }
    const column = useMemo(() => [
        {
            name: '#',
            selector: row => row.name,
            sortable: true,
            filterable: true,
            cell: (row, index) => index + 1,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            filterable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            filterable: true,
            sortable: true,
        },
        {
            name: 'Role',
            selector: row => row.role,
            filterable: true,
            sortable: true,
        },
        {
            name: 'Gender',
            selector: row => row.gender,
            filterable: true,
            sortable: true,
            cell: row => <GenderCell gender={row.gender} />

        },
        {
            name: '',
            cell: (person) => <div className='flex gap-2'>
                <EditCell path={'/user/advisor/update/' + person._id} />
                <DeleteCell Event={handleDelete} param={person._id} />

            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },

    ], [handleDelete]);
    const [search, setSearch] = useState('');

    const filterFunction = (search, data) => {
        return data.filter((row) =>
            row.name.toLowerCase().includes(search.toLowerCase()) ||
            row.role.toLowerCase().includes(search.toLowerCase()) ||
            row.email.toLowerCase().includes(search.toLowerCase()) ||
            row.gender.toLowerCase().includes(search.toLowerCase())
        );
    };
    return (
        // <div>
        //   <div className='w-full bg-gray-100 py-10 px-5 md:px-0'>
        //     <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        //       <div className='flex flex-col'>
        //         <div className='my-4'>
        //           <h1 className='text-3xl font-bolder leading-tight text-gray-900'>
        //             All Supervisor & Co-Supervisors
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
        //               to={'/user/advisor/new'}
        //               className='inline-flex px-8 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline'
        //             >
        //               Create
        //             </NavLink>
        //           </div>
        //         </div>
        //         <div className='-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
        //           <div className='align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200'>
        //             <table className='table-auto w-full' id='table'>
        //               <thead>
        //                 <tr className='bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider'>
        //                   <th className='p-2 md:px-6 md:py-3 text-left font-medium'>
        //                     No.
        //                   </th>
        //                   <th className='p-2 md:px-6 md:py-3 text-left font-medium'>
        //                     Name
        //                   </th>
        //                   <th className='p-2 md:px-6 md:py-3 text-left font-medium'>
        //                     Email
        //                   </th>
        //                   <th className='p-2 md:px-6 md:py-3 text-left font-medium'>
        //                     Role
        //                   </th>
        //                   <th className='p-2 md:px-6 md:py-3 text-left font-medium'>
        //                     Gender
        //                   </th>
        //                   <th className=' md:px-0 md:py-0 text-left font-medium'>
        //                     Actions
        //                   </th>
        //                   <th></th>
        //                 </tr>
        //               </thead>

        //               <tbody className='bg-white'>
        //                 {persons &&
        //                   persons.map(person => (
        //                     <tr id={person._id} key={persons.indexOf(person) + 1}>
        //                       <td className='p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                         {persons.indexOf(person) + 1}
        //                       </td>
        //                       <td className='p-2 text-sm md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                         {person.name}
        //                       </td>
        //                       <td className='p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                         {person.email.slice(0, 16) + '...'}
        //                       </td>
        //                       <td className='p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                         <div className='text-sm leading-5 text-gray-900'>
        //                           {person.role}
        //                         </div>
        //                       </td>
        //                       <td className='p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                         <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-green-800'>
        //                           {person.gender}
        //                         </span>
        //                       </td>
        //                       <td className=' whitespace-no-wrap border-b border-gray-200'>
        //                         <NavLink
        //                           to={'/user/advisor/update/' + person._id}
        //                           className='text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg'
        //                         >
        //                           <FiEdit />
        //                         </NavLink>
        //                       </td>
        //                       <td className='ml-4  pr-2 md:pr-3 whitespace-no-wrap border-b border-gray-200'>
        //                         <NavLink
        //                           to='#'
        //                           className='text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline'
        //                         >
        //                           <FaTrash
        //                             onClick={() => handleDelete(person._id)}
        //                           />
        //                         </NavLink>
        //                       </td>
        //                     </tr>
        //                   ))}
        //               </tbody>
        //             </table>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <Detail title={' All Supervisor & Co-Supervisors'} column={column} data={filterFunction(search,persons)} search={search} setSearch={setSearch} path={'/user/advisor/new'} />
    )
}

export default Supervisor
