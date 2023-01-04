import React from 'react'
import SideMenu from './sideMenu';

const UserMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {

    const subMenus = [
        {   
            path: '/user/advisors',
            title: 'Advisor',
        },
        {   
            path: '/user/groups',
            title: 'Groups',
        },
        {   
            path: '/user/students',
            title: 'Students',
        },
    ]

  return (
    <SideMenu title={'Users'} pathname={'/users'} checkUrl={'/users'} checkPathName={'users'}
    icon={''}
    handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={subMenus}/>
  )
}

export default UserMenu