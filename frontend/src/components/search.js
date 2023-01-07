import React from 'react'

const Search = ({value,Event}) => {
    return (
        <div className='flex items-center py-2'>
            <input
                className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
                id='inline-search'
                type='text'
                placeholder='Search'
                value={value} onChange={Event}
            />
        </div>
    )
}

export default Search