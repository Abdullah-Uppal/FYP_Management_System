import React from 'react'
import PersonMenu from '../sidebar/sideMenu/personMenu'
import SidebarLinkGroup from '../sidebar/sideMenu/sidebarLinkGroup'

const AdvisorSection = ({pathname,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <>
    <SidebarLinkGroup
      activecondition={pathname === "/users" || pathname.includes("users")}
    >
      {(handleClick, open) => {
        return (
          <PersonMenu
            handleClick={handleClick}
            open={open}
            sidebarExpanded={sidebarExpanded}
            setSidebarExpanded={setSidebarExpanded}
          />
        );
      }}
    </SidebarLinkGroup>
 </>
  )
}

export default AdvisorSection