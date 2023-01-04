import React from "react";
import SideMenu from "./sideMenu";
const AllocationMenu = ({
  handleClick,
  open,
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  const subMenus = [
    {
      path: "/allocation/groups",
      title: "Groups Allocation",
    },
    {
      path: "/allocation/supervisors",
      title: "Supervisors Allocation",
    },
    {
      path: "/allocation/projects",
      title: "Projects Allocation",
    },
  ];

  return (
    <SideMenu
      title={"Allocation"}
      pathname={"/allocation"}
      checkUrl={"/allocation"}
      checkPathName={"allocation"}
      icon={
        "data:image/png;base64,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"
      }
      handleClick={handleClick}
      open={open}
      sidebarExpanded={sidebarExpanded}
      setSidebarExpanded={setSidebarExpanded}
      subMenus={subMenus}
    />
  );
};

export default AllocationMenu;
