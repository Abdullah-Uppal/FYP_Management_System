import React from 'react'
import FaqMenu from '../sidebar/sideMenu/faqMenu'
// import PersonMenu from '../sidebar/sideMenu/personMenu'
import SidebarLinkGroup from '../sidebar/sideMenu/sidebarLinkGroup'
import GroupMenu from './../sidebar/sideMenu/groupMenu';

const StudentSection = ({pathname,sidebarExpanded,setSidebarExpanded}) => {
  return (
   <>
      <SidebarLinkGroup
        activecondition={pathname === "/faq" || pathname.includes("faq")}
      >
        {(handleClick, open) => {
          return (
            <FaqMenu
              handleClick={handleClick}
              open={open}
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
            />
          );
        }}
      </SidebarLinkGroup>
      <SidebarLinkGroup
        activecondition={pathname === "/group" || pathname.includes("group")}
      >
        {(handleClick, open) => {
          return (
            <GroupMenu
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

export default StudentSection