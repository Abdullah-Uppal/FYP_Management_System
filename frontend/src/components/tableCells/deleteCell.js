import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'

const DeleteCell = ({Event,param}) => {
    return (
        <NavLink
            to='#'
            className='text-indigo-600 hover:text-indigo-900 focus:outline-none  text-lg focus:underline'
        >
            <FaTrash onClick={() => Event(param)} />
        </NavLink>
    )
}

export default DeleteCell