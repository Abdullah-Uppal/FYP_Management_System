import React from 'react'
import SideMenu from './sideMenu';
const AllocationMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <SideMenu title={'Allocation'} pathname={'/allocation'} checkUrl={'/allocation'} checkPathName={'allocation'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>
  )
}

export default AllocationMenu