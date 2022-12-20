import React from 'react'
import GroupHeader from '../../../partials/group/components/header'
import Groups from './groups'

const Group = () => {
  return (
    <div className='flex flex-col gap-4'>
        <GroupHeader/>
        <Groups/>
    </div>
  )
}

export default Group