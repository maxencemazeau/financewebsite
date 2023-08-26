import React, { useState } from "react";
import DashboardNavBar from "./DashboardNavBar";
import DashboardCategory from './DashboardCategory';
import DashboardChart from "./DashboardChart";
import DahsboardGoals from "./DahsboardGoals";

export default function DashboardHome() {

  const [headerHeight, setHeaderHeight] = useState("h-16");

  const handleHeaderHeight = (isExpanded: any) => {
    if (isExpanded) {
      setHeaderHeight("h-64");
    } else {
      setHeaderHeight("h-16");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className={`rounded-lg bg-gray-100 ${headerHeight} lg:fixed`}>
        <DashboardNavBar handleHeight={handleHeaderHeight} />
      </div>
      <div className="flex flex-col flex-1 lg:ml-40">
        <DashboardCategory />
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <DashboardChart />
          </div>
          <div className="w-full lg:w-1/4">
            <DahsboardGoals />
          </div>
        </div>

      </div>
    </div>
  )
}