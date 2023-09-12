import React, { useState } from "react";
import DashboardNavBar from "./DashboardNavBar";
import DashboardCategory from './DashboardCategory';
import DashboardChart from "./DashboardChart";
import DashboardGoals from "./DashboardGoals";
import DashboardExpenses from "./DahsboardExpenses";
import DashboardIncomes from "./DashboardIncomes";
import Banner from "../Banner";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function DashboardHome() {

  const [headerHeight, setHeaderHeight] = useState("h-16");
  const data = localStorage.getItem('user');
  console.log(data);
  const handleHeaderHeight = (isExpanded: any) => {
    if (isExpanded) {
      setHeaderHeight("h-64");
    } else {
      setHeaderHeight("h-16");
    }
  };

  return (
    <>
    <div className="flex flex-col lg:flex-row">
      <div className={`rounded-lg bg-gray-100 ${headerHeight} lg:fixed`}>
        <DashboardNavBar handleHeight={handleHeaderHeight} />
      </div>
      <div className="flex flex-col flex-1 lg:ml-40">
      <Banner />
        <DashboardCategory />
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4">
            <DashboardChart />
          </div>
          <div className="w-full lg:w-1/4">
            <DashboardGoals />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/4">
            <DashboardIncomes />
          </div>
          <div className="w-full lg:w-3/4">
            <DashboardExpenses />
          </div>
        </div>

      </div>
    </div>
    </>
  )
}