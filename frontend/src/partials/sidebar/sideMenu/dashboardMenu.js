import React from 'react'
import SideMenu from './sideMenu';
const DashboardMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <SideMenu title={'Home'} pathname={'/'} checkUrl={'/'} checkPathName={'dashboard'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>

  )
}

export default DashboardMenu