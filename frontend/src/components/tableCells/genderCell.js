import React from 'react'

const GenderCell = ({ gender }) => {
    return (

        gender === 'Male' ? <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-green-800'>
            {gender}
        </span> :
            <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-pink-800'>
                {gender}
            </span>

    )
}

export default GenderCell