import React from 'react'
import SideMenu from './sideMenu';

const MeetingMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <SideMenu title={'Meetings'} pathname={'/meeting/all'} checkUrl={'/meeting/all'} checkPathName={'meeting/all'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>
  )
}

export default MeetingMenu