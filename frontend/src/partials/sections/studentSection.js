import React from 'react'
import FaqMenu from '../sidebar/sideMenu/faqMenu'
// import PersonMenu from '../sidebar/sideMenu/personMenu'
import SidebarLinkGroup from '../sidebar/sideMenu/sidebarLinkGroup'

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
   </>
  )
}

export default StudentSection