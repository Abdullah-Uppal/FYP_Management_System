import React from 'react'
import Model from './model'

const GroupHeader = () => {
  return (
    <div className="container px-4 sm:px-6 lg:px-8 h-full">
        <div className="container  h-full flex items-start justify-between -mb-px flex-col gap-3 sm:flex-row sm:item-center">
            <div className="flex items-center">
            <input type="text" className='block min-w-full p-2 text-gray-900 border border-indigo-500 rounded-lg bg-gray-50 sm:text-lg focus:ring-blue-500 focus:border-blue-500  dark:border-indigo-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search...'/>
            </div>
            <Model/>
        </div>
    </div>

  )
}

export default GroupHeader