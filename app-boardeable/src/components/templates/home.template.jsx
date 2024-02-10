import React from "react";
import HeaderOrganism from "../organisms/header.organism";
import HomeFilterOrganism from "../organisms/home-filter.organism";
import HomeListOrganism from "../organisms/home-list.organism";

function HomeTemplate() {
  return (
    <div className="">
      <HeaderOrganism></HeaderOrganism>
      <div className=" flex justify-center w-full px-32 pb-20">
        <div className="w-full mt-16 ">
          <h1 className="text-2xl font-bold">My Boards</h1>
          <main className="flex flex-col gap-8 mt-6">
            <HomeFilterOrganism></HomeFilterOrganism>
            <HomeListOrganism></HomeListOrganism>
          </main>
        </div>
      </div>
    </div>
  );
}

export default HomeTemplate;
