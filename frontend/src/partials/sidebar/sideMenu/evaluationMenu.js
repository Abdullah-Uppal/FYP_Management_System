import React from 'react'
import SideMenu from './sideMenu';
const EvaluationMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <SideMenu title={'Evaluation'} pathname={'/evaluation'} checkUrl={'/evaluation'} checkPathName={'evaluation'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>
  )
}

export default EvaluationMenu