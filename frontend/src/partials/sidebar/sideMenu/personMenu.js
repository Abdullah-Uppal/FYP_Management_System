import React from 'react'
import SideMenu from './sideMenu';
const PersonMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <SideMenu title={'Persons'} pathname={'/persons'} checkUrl={'/persons'} checkPathName={'persons'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>
  )
}

export default PersonMenu