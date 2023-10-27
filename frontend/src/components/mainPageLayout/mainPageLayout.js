import React from "react";
import TopBar from "../mainPage/mainPageTopBar";
import LeftSideBar from "../mainPage/mainPageLeftSideBar";
import RightSideBar from "../mainPage/mainPageRightSideBar";
import BottomBar from "../mainPage/mainPageBottomBar";

const MainPageLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen relative">
      <TopBar />
      <div className="flex-grow flex overflow-hidden">
        {" "}
        <div className="flex flex-shrink-0 overflow-y-auto">
          <LeftSideBar />
        </div>
        <div className="flex-grow overflow-y-auto">{children}</div>
        <div className="flex flex-shrink-0 overflow-y-auto">
          <RightSideBar />
        </div>
      </div>
      <div className="bottom-0 relative">
        <BottomBar />
      </div>
    </div>
  );
};

export default MainPageLayout;
