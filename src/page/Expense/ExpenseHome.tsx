import React, { useState } from 'react'
import ExpenseTable from './ExpenseTable'
import DashboardNavBar from '../Dashboard/DashboardNavBar'
import Banner from '../Banner';
import ExpenseChart from '../../components/ExpenseChart';
import AddExpense from '../../components/AddExpense';
import AddCategory from '../../components/AddCategory';

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
            <div className="flex-grow lg:ml-40">
                <Banner />
                <div className='flex flex-row bg-indigo-500 gap-8 h-80 lg:ml-12'>
                    <div className=' h-80 w-1/2'>
                        <ExpenseChart />
                    </div>
                    <div className='flex flex-col flex-grow gap-4 h-80 mr-8'>
                        <div className='flex-grow border-solid border-2 border-green-600 h-40'>

                        </div>
                        <div className='flex-grow border-solid border-2 border-yellow-600 h-40'>

                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row lg:ml-10">
                    <div className="w-full lg:w-full">
                        <div className="flex space-x-4 px-4 md:px-8 lg:pl-2 lg:pr-8">
                            <AddExpense />
                            <AddCategory />
                        </div>
                        <ExpenseTable />
                    </div>
                </div>
            </div>
        </div>
    )
}