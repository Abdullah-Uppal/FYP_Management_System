import React from 'react'
import SideMenu from './sideMenu';
const FaqMenu = ({handleClick,open,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <SideMenu title={'FAQ'} pathname={'/faq'} checkUrl={'/faq'} checkPathName={'faq'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]}/>
  )
}

export default FaqMenu

