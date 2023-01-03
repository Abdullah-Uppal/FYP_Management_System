import React from 'react'
import SideMenu from './sideMenu';
const PersonMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  
    const subMenus = [
        {   
            path: '/user/advisors',
            title: 'Advisor',
        },
        {   
            path: '/user/students',
            title: 'Students',
        },
        {   
            path: '/user/groups',
            title: 'Groups',
        },
        {   
            path: '/user/committee',
            title: 'Committee',
        },
        {   
            path: '/departments',
            title: 'Departments',
        }
    ]

  return (
    <SideMenu title={'Users'} pathname={'/users'} checkUrl={'/users'} checkPathName={'users'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={subMenus}/>
  )
}

export default PersonMenu