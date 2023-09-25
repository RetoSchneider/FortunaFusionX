import React from "react";
import TopBar from "../mainPage/mainPageTopBar";
import LeftSideBar from "../mainPage/mainPageLeftSideBar";
import BottomBar from "../mainPage/mainPageBottomBar";

const MainPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen relative">
      <TopBar />
      <div className="flex-grow flex pt-1 overflow-y-auto">
        <LeftSideBar />
        <div className="flex-grow overflow-y-auto">{children}</div>
      </div>
      <div className="bottom-0 w-screen relative">
        <BottomBar />
      </div>
    </div>
  );
};

export default MainPageLayout;
