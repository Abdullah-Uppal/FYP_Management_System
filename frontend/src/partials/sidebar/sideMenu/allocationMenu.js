import React from 'react'
import SideMenu from './sideMenu';
const AllocationMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {

    const subMenus = [
        {   
            path: '/allocation/groups',
            title: 'Groups Allocation'
        },
        {   
            path: '/allocation/supervisors',
            title: 'Supervisors Allocation'
        },
        {   
            path: '/allocation/projects',
            title: 'Projects Allocation'
        }
    ]

  return (
    <SideMenu title={'Allocation'} pathname={'/allocation'} checkUrl={'/allocation'} checkPathName={'allocation'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={subMenus}/>
  )
}

export default AllocationMenu