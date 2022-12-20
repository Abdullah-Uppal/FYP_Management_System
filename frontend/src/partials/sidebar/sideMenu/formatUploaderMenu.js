import React from 'react'
import SideMenu from './sideMenu';
const FormatUploaderMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <SideMenu title={'Downloads'} pathname={'/formats'} checkUrl={'/formats'} checkPathName={'formats'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>
  )
}

export default FormatUploaderMenu