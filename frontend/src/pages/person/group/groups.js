import React from 'react'
import GroupCard from '../../../partials/group/groupCard'

const Groups = () => {
    return (


        //grid of auto rows and columns
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3    gap-4 p-5 min-w-max">
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
        </div>

    )
}

export default Groups