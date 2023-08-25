import React, { useState } from "react";
import DashboardNavBar from "./DashboardNavBar";
import DashboardCategory from './DashboardCategory';
import DashboardChart from './DashboardChart';

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
      <>  
      <div className={`rounded-lg bg-gray-100 ${headerHeight} lg:fixed`}>
                <DashboardNavBar handleHeight={handleHeaderHeight} />
            </div>
        <div className="grid grid-cols-5 gap-4">
            <div className="col-start-2 col-end-5 gap-4">
                <div className="grow">
                    <DashboardCategory />
                </div>
                <div className="grow">
                    <DashboardChart />
                </div>
            </div>
        </div>
      </>
    );
}
