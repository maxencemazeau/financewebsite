import React, { useState } from 'react'
import ExpenseTable from './ExpenseTable'
import DashboardNavBar from '../Dashboard/DashboardNavBar'
import Banner from '../Banner';

export default function ExpenseHome() {

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
      <Banner />
       
        <div className="flex flex-col lg:flex-row lg:ml-10">
          
          <div className="w-full lg:w-3/4">
            <ExpenseTable />
          </div>
        </div>
            </div>
        </div>
    )
}