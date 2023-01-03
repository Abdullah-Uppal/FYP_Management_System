import React from 'react'
import SidebarLinkGroup from '../sidebar/sideMenu/sidebarLinkGroup'
import StudentsUnderAdvisor from '../sidebar/sideMenu/studentsUnderAdvisor'

const AdvisorSection = ({pathname,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <>
    <SidebarLinkGroup
      activecondition={pathname === "/users" || pathname.includes("users")}
    >
      {(handleClick, open) => {
        return (
          <StudentsUnderAdvisor
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