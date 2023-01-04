import React from "react";
import SideMenu from "./sideMenu";

const MilestoneMenu = ({
  handleClick,
  open,
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  return (
    <SideMenu
      title={"MileStones"}
      pathname={"/milestone/new"}
      checkUrl={"/milestone/new"}
      checkPathName={"milestone"}
      icon={
        "data:image/png;base64,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"
      }
      handleClick={handleClick}
      open={open}
      sidebarExpanded={sidebarExpanded}
      setSidebarExpanded={setSidebarExpanded}
      subMenus={[]}
    />
  );
};

export default MilestoneMenu;
