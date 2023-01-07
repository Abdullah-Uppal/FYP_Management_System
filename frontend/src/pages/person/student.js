import React, { useMemo,useCallback } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Detail from '../../partials/detail'
import EditCell from '../../components/tableCells/editCell'
import DeleteCell from '../../components/tableCells/deleteCell'
import GenderCell from '../../components/tableCells/genderCell'
const Student = () => {
    const [persons, setPersons] = useState([])

    useEffect(() => {
        getPersons().then(data => {
            console.log(data)
            setPersons(data.person)
        })
    }, [])

    const url = 'http://localhost:3000/person/getPerson'
    const getPersons = async () => {
        console.log('data fetch first')
        try {
            return await axios.get(url).then(res => res.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    const handleDelete = useCallback(async id => {
        const url = 'http://localhost:3000/person/' + id
        await axios.delete(url).then(res => {
            setPersons(
                persons.filter((value, index, arr) => {
                    return value._id !== id
                })
            )
        })
    }, [persons]);
    const column = useMemo(() => [
        {
            name: '#',
            selector: row => row.regno,
            sortable: true,
            filterable: true,
            cell: (row, index) => index + 1,
        },
        {
            name: 'Name',
            selector: row => row.fname + ' ' + row.lname,
            sortable: true,
            filterable: true,
            // minWidth: 'fit-content',
        },
        {
            name: 'Registration Number',
            selector: row => row.regno,
            filterable: true,
            sortable: true,
            // minWidth: 'fit-content',
        },
        {
            name: 'Email',
            selector: row => row.email,
            filterable: true,
            sortable: true,
            // minWidth: 'fit-content',
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
                <EditCell path={'/user/student/update/' + person._id}/>
                <DeleteCell Event={handleDelete} param={person._id}/>
               
            </div>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
       
    ], [handleDelete]);

    const [search, setSearch] = useState('');
    
 const filterFunction = (search,data) => {
      return data.filter((row) =>
        row.fname.toLowerCase().includes(search.toLowerCase()) ||
        row.lname.toLowerCase().includes(search.toLowerCase()) ||
        row.email.toLowerCase().includes(search.toLowerCase()) ||
        row.gender.toLowerCase().includes(search.toLowerCase())
      );
    };
    return (
        // <div>
        //     <div className='w-full bg-gray-100 py-10 px-5 md:px-0'>
        //         <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
        //             <div className='flex flex-col'>
        //                 <div className='my-4'>
        //                     <h1 className='text-3xl font-bolder leading-tight text-gray-900'>
        //                         All Students
        //                     </h1>
        //                 </div>
        //                 <div className='-mb-2 py-4 flex flex-wrap flex-grow justify-between'>
        //                     <div className='flex items-center py-2'>
        //                         <input
        //                             className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        //                             id='inline-search'
        //                             type='text'
        //                             placeholder='Search'
        //                         />
        //                     </div>
        //                     <div className='flex items-center py-2'>
        //                         <NavLink
        //                             to={'/user/student/new'}
        //                             className='inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline'
        //                         >
        //                             Create
        //                         </NavLink>
        //                     </div>
        //                 </div>
        //                 <div className='-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
        //                     <div className='align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200'>
        //                         {/* <table className='table-auto w-full' id='table'>
        //                             <thead>
        //                                 <tr className='bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase'>
        //                                     <th className='p-2 md:px-6 md:py-3 text-left font-medium'>
        //                                         No.
        //                                     </th>
        //                                     <th className='p-2 md:px-6 md:py-3 text-left font-medium'>
        //                                         Name
        //                                     </th>
        //                                     <th className='p-2 md:px-6 md:py-3 text-left font-medium'>
        //                                         Reg No
        //                                     </th>
        //                                     <th className='p-2 md:px-6 md:py-3 text-left font-medium'>
        //                                         Email
        //                                     </th>
        //                                     <th className='p-2 md:px-6 md:py-3 text-left font-medium'>
        //                                         Gender
        //                                     </th>
        //                                     <th className=' md:px-0 md:py-0 text-left font-medium'>
        //                                         Actions
        //                                     </th>
        //                                     <th></th>
        //                                 </tr>
        //                             </thead>

        //                             <tbody className='bg-white'>
        //                                 {persons.map(person => (
        //                                     <tr id={person._id} key={persons.indexOf(person) + 1}>
        //                                         <td className='p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                                             {persons.indexOf(person) + 1}
        //                                         </td>
        //                                         <td className='p-2 text-sm md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                                             {person.fname} {person.lname}
        //                                         </td>
        //                                         <td className='p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                                             {person.regno}
        //                                         </td>
        //                                         <td className='p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                                             <div className='text-sm leading-5 text-gray-900'>
        //                                                 {person.email.slice(0, 16) + '...'}
        //                                             </div>
        //                                         </td>
        //                                         <td className='p-2 md:px-6 md:py-4 whitespace-no-wrap border-b border-gray-200'>
        //                                             <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-green-800'>
        //                                                 {person.gender}
        //                                             </span>
        //                                         </td>
        //                                         <td className=' whitespace-no-wrap border-b border-gray-200'>
        //                                             <NavLink
        //                                                 to={'/user/student/update/' + person._id}
        //                                                 className='text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg'
        //                                             >
        //                                                 <FiEdit />
        //                                             </NavLink>
        //                                         </td>
        //                                         <td className='ml-4  pr-2 md:pr-3 whitespace-no-wrap border-b border-gray-200'>
        //                                             <NavLink
        //                                                 to='#'
        //                                                 className='text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline'
        //                                             >
        //                                                 <FaTrash onClick={() => handleDelete(person._id)} />
        //                                             </NavLink>
        //                                         </td>
        //                                     </tr>
        //                                 ))}
        //                             </tbody>
        //                         </table> */}
        //                         <MyDataTable column={column} data={persons} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
      <Detail title={"All Students"} column={column} data={filterFunction(search,persons)} search={search} setSearch={setSearch} path={'/user/student/new'} />
    )
}

export default Student
