import React from 'react'
import SideMenu from './sideMenu';
const DashboardMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {

    const subMenus = [
        {
            path: '/',
            title: 'Main'
        }
    ]

  return (
    <SideMenu title={'Dashboard'} pathname={'/'} checkUrl={'/'} checkPathName={'dashboard'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={subMenus}/>

  )
}

export default DashboardMenu