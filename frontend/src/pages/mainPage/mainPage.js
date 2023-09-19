import React from "react";
import TopBar from "../../components/mainPage/mainPageTopBar";
import LeftSideBar from "../../components/mainPage/mainPageLeftSideBar";

const mainPage = () => {
  return (
    <div className="flex flex-col">
      <TopBar />
      <div className="flex pt-2">
        <LeftSideBar />
      </div>
    </div>
  );
};

export default mainPage;
