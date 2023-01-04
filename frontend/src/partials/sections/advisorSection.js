import React from 'react'
import SidebarLinkGroup from '../sidebar/sideMenu/sidebarLinkGroup'
import SupervisedStudents from '../sidebar/sideMenu/supervisedStudents'

const AdvisorSection = ({pathname,sidebarExpanded,setSidebarExpanded}) => {
  return (
    <>
    <SidebarLinkGroup
      activecondition={pathname === "/users" || pathname.includes("users")}
    >
      {(handleClick, open) => {
        return (
          <SupervisedStudents
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