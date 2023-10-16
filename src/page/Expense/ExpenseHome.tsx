import React, { useState } from 'react'
import ExpenseTable from './ExpenseTable'
import DashboardNavBar from '../Dashboard/DashboardNavBar'
import ModalForm from '../../components/ModalForm';
import Banner from '../Banner';
import Button from '../../components/Button';
import ExpenseChart from '../../components/ExpenseChart';

export default function ExpenseHome() {

    const [headerHeight, setHeaderHeight] = useState("h-16");
    const [modalState, setModalState] = useState<boolean>(false);

    const handleHeaderHeight = (isExpanded: any) => {
        if (isExpanded) {
            setHeaderHeight("h-64");
        } else {
            setHeaderHeight("h-16");
        }
    };

    const onSubmit = () => {
        setModalState(false);
    }

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
                    <div className="px-4 md:px-8 lg:pl-2 lg:pr-8">
            <Button onClick={() => setModalState(true)} label={"Add Expense"} style={"bg-blue-400 my-6 font-meduim"}/>
            {modalState && <ModalForm category={true} onClose={() => setModalState(false)} title={"Add a new expense"} formSubmit={onSubmit} formFields={[{name:"Expense name"}, {name: "Cost"}, {name: "Buyer name"}, {name: "Date"}]}/>}
        </div>
                        <ExpenseTable />
                    </div>
                </div>
            </div>
        </div>
    )
}