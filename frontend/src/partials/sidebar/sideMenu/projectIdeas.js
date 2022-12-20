import React from 'react'
import SideMenu from './sideMenu';
const ProjectIdeas = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  
  
    return (
        <SideMenu title={'Project Ideas'} pathname={'/project/all'} checkUrl={'/all'} checkPathName={'all'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>
  )
}

export default ProjectIdeas