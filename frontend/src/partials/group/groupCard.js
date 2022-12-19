import React from 'react'

const GroupCard = () => {
    return (

        <div className="w-full flex flex-row gap-5 p-3 items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
           <div className="flex-shrink-0">
           <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/seed/picsum/200/300" alt="Bonnie" />
           </div>
            <div className="flex-1 min-w-0 flex-col mt-3 place-content-center align-middle items-center pb-10">
                
                <h5 className="my-2 text-xl font-medium text-gray-900 dark:text-white">Group 1</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">6 Members</span>
                <div className="w-full mt-4 space-x-3 self-end md:mt-6">
                    <small className='text-xs text-gray-500 truncate dark:text-gray-400'>Feb 29, 2022</small>
                </div>
            </div>
        </div>
    )
}

export default GroupCard