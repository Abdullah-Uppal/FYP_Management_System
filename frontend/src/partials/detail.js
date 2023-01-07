import React from 'react'
import MyDataTable from '../utils/table'
import Search from '../components/search'


const Detail = ({ title, column, data, search, setSearch, children }) => {

    const handleSearch = (event) => {
        console.log(event.target.value)
        setSearch(event.target.value);
    };

    return (
            <div>
            <div className='w-full bg-gray-100 py-10 px-5 md:px-0'>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                    <div className='flex flex-col'>
                        <div className='my-4'>
                            <h1 className='text-3xl font-bolder leading-tight text-gray-900'>
                                {title}
                            </h1>
                        </div>
                        <div className='-mb-2 py-4 flex flex-wrap flex-grow justify-between'>
                           <Search value={search} Event={handleSearch}/>
                            {/* <div className='flex items-center py-2'>
                                <NavLink
                                    to={path}
                                    className='inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline'
                                >
                                  Add New <FaUserPlus size={17} className='text-white'/> 
                                </NavLink>
                            </div> */}
                            {children}
                        </div>
                        <div className='-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8'>
                            <div className='align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200'>

                                <MyDataTable column={column} data={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Detail