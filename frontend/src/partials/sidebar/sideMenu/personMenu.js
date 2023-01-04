import React from "react";
import SideMenu from "./sideMenu";
const PersonMenu = ({
  handleClick,
  open,
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  const subMenus = [
    {
      path: "/user/advisors",
      title: "Advisor",
    },
    {
      path: "/user/students",
      title: "Students",
    },
    {
      path: "/user/groups",
      title: "Groups",
    },
    {
      path: "/user/committee",
      title: "Committee",
    },
    {
      path: "/departments",
      title: "Departments",
    },
  ];

  return (
    <SideMenu
      title={"Users"}
      pathname={"/user"}
      checkUrl={"/user"}
      checkPathName={"user"}
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

export default PersonMenu;
