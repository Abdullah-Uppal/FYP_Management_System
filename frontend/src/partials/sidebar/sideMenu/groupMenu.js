import React from 'react'
import SideMenu from './sideMenu';

const GroupMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {

    const subMenus = [
        {   
            path: '/group',
            title: 'Thesis'
        },
    ]

  return (
    <SideMenu title={'Group'} pathname={'/group'} checkUrl={'/group'} checkPathName={'group'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={subMenus}/>
  )
}

export default GroupMenu