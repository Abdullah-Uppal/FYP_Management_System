import React from 'react'
import SideMenu from './sideMenu';

const MilestoneMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <SideMenu title={'MileStones'} pathname={'/milestone'} checkUrl={'/milestone'} checkPathName={'milestone'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>
  )
}

export default MilestoneMenu