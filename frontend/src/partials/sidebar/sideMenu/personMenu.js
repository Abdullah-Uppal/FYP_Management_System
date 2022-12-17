import React from 'react'
import SideMenu from './sideMenu';
const PersonMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  
    const subMenus = [
        {
            path: '/person/student',
            title: 'Student'
        },
        {
            path: '/person/supervisor',
            title: 'Supervisor'
        }
    ]
    return (
    <SideMenu title={'Persons'} pathname={'/persons'} checkUrl={'/persons'} checkPathName={'persons'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={subMenus}/>
  )
}

export default PersonMenu