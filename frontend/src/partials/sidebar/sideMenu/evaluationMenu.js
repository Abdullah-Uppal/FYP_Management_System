import React from "react";
import SideMenu from "./sideMenu";
const EvaluationMenu = ({
  handleClick,
  open,
  sidebarExpanded,
  setSidebarExpanded,
}) => {
  return (
    <SideMenu
      title={"Evaluation"}
      pathname={"/evaluation"}
      checkUrl={"/evaluation"}
      checkPathName={"evaluation"}
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

export default EvaluationMenu;
