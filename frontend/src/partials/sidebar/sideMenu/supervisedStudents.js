import React from 'react'
import SideMenu from './sideMenu';
const SupervisedStudents = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <SideMenu title={'Students Under Me'} pathname={'/myStudents'} checkUrl={'/myStudents'} checkPathName={'myStudents'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>
  )
}

export default SupervisedStudents