import React from "react"
import PersonMenu from "../sidebar/sideMenu/personMenu";
import AllocationMenu from "../sidebar/sideMenu/allocationMenu";
import SidebarLinkGroup from "../sidebar/sideMenu/sidebarLinkGroup";
import FormatUploaderMenu from "../sidebar/sideMenu/formatUploaderMenu";
import ProjectIdeas from "../sidebar/sideMenu/projectIdeas";
import MeetingMenu from "../sidebar/sideMenu/meetingMenu";
import MilestoneMenu from "../sidebar/sideMenu/milestoneMenu";
import EvaluationMenu from "../sidebar/sideMenu/evaluationMenu";

const AdminSection = ({pathname,sidebarExpanded,setSidebarExpanded}) => {
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
      <SidebarLinkGroup
        activecondition={
          pathname === "/allocation" || pathname.includes("allocation")
        }
      >
        {(handleClick, open) => {
          return (
            <AllocationMenu
              handleClick={handleClick}
              open={open}
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
            />
          );
        }}
      </SidebarLinkGroup>
      <SidebarLinkGroup
        activecondition={
          pathname === "/formats" || pathname.includes("formats")
        }
      >
        {(handleClick, open) => {
          return (
            <FormatUploaderMenu
              handleClick={handleClick}
              open={open}
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
            />
          );
        }}
      </SidebarLinkGroup>
      <SidebarLinkGroup
        activecondition={
          pathname === "/project/all" || pathname.includes("projects")
        }
      >
        {(handleClick, open) => {
          return (
            <ProjectIdeas
              handleClick={handleClick}
              open={open}
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
            />
          );
        }}
      </SidebarLinkGroup>
      <SidebarLinkGroup
        activecondition={
          pathname === "/meeting/all" || pathname.includes("meetings")
        }
      >
        {(handleClick, open) => {
          return (
            <MeetingMenu
              handleClick={handleClick}
              open={open}
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
            />
          );
        }}
      </SidebarLinkGroup>
      <SidebarLinkGroup
        activecondition={
          pathname === "/milestone" || pathname.includes("milestone")
        }
      >
        {(handleClick, open) => {
          return (
            <MilestoneMenu
              handleClick={handleClick}
              open={open}
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
            />
          );
        }}
      </SidebarLinkGroup>
      <SidebarLinkGroup
        activecondition={
          pathname === "/evaluation" || pathname.includes("evaluation")
        }
      >
        {(handleClick, open) => {
          return (
            <EvaluationMenu
              handleClick={handleClick}
              open={open}
              sidebarExpanded={sidebarExpanded}
              setSidebarExpanded={setSidebarExpanded}
            />
          );
        }}
      </SidebarLinkGroup>
    </>
  );
};

export default AdminSection;
