import React from 'react'
import { NavLink } from 'react-router-dom';
const CreateNew = ({title,path,children}) => {
  return (
    <div className='flex items-center py-2'>
                <NavLink
                    to={path}
                    className='inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline'
                >
                    {title} {children}
                </NavLink>
            </div>
  )
}

export default CreateNew