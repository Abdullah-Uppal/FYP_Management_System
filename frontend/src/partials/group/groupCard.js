import React from 'react'

const GroupCard = ({ group }) => {

    return (

        <div className="w-full flex flex-row gap-5 py-4 px-3 items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="w-14 h-14 mb-3 rounded-full shadow-lg" src="https://picsum.photos/seed/picsum/200/300" alt="Bonnie" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                        {group.id}
                    </p>
                    <div className='flex flex-row flex-wrap gap-1 '>

                            
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {group.students.map(s=>s.regno).join()}
                            </p>
                           
                       
                    </div>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">

                    </p>
                </div>

            </div>
        </div>
        // <div className="w-full flex flex-row gap-5 py-1 px-3 items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        //     <div className='flex items-center space-x-4'>
        //         <div className="flex-shrink-0">
        //             <img className="w-14 h-14 mb-3 rounded-full shadow-lg" src="https://picsum.photos/seed/picsum/200/300" alt="Bonnie" />
        //         </div>

        //     </div>

        // </div>



    )
}

export default GroupCard