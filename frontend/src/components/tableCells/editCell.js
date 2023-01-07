import React from 'react'
import { NavLink } from 'react-router-dom'

import { FiEdit } from 'react-icons/fi'

const EditCell = ({ path }) => {
    return (
        <NavLink
            to={path}
            className='text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline text-lg'
        >
            <FiEdit />
        </NavLink>
    )
}

export default EditCell