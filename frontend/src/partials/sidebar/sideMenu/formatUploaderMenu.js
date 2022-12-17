import React from 'react'
import SideMenu from './sideMenu';
const FormatUploaderMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <SideMenu title={'Format Upload'} pathname={'/uploadformat'} checkUrl={'/uploadformat'} checkPathName={'uploadformat'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>
  )
}

export default FormatUploaderMenu