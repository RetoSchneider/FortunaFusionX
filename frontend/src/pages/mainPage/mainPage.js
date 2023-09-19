import React from "react";
import TopBar from "../../components/mainPage/mainPageTopBar";
import LeftSideBar from "../../components/mainPage/mainPageLeftSideBar";
import BottomBar from "../../components/mainPage/mainPageBottomBar";

const mainPage = () => {
  return (
    <div className="flex flex-col h-screen relative">
      <TopBar />
      <div className="flex-grow flex pt-2 pb-2 overflow-y-auto">
        <LeftSideBar />
      </div>
      <div className="bottom-0 w-screen relative">
        <BottomBar />
      </div>
    </div>
  );
};

export default mainPage;
