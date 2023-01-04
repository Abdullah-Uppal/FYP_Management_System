import React from 'react'
import SideMenu from './sideMenu';

const GroupMenu = ({ handleClick, open, sidebarExpanded, setSidebarExpanded }) => {
    return (
        <SideMenu title={'Group'} pathname={'/group'} checkUrl={'/group'} checkPathName={'group'} handleClick={handleClick} open={open} sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} subMenus={[]} />
    )
}

export default GroupMenu