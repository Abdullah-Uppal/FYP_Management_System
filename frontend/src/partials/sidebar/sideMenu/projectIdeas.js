import React from 'react'
import SideMenu from './sideMenu';
const ProjectIdeas = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  
    const subMenus = [
        {   
            path: '/projects/postIdea',
            title: 'Post Idea'
        },
        {   
            path: '/projects/bookIdeas',
            title: 'Book Ideas'
        }
    ]
  
    return (
        <SideMenu title={'Project Ideas'} pathname={'/projects'} checkUrl={'/projects'} checkPathName={'projects'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={subMenus}/>
  )
}

export default ProjectIdeas