import React, { useState, useEffect } from 'react'
import { ExpenseChart } from '../page/Dashboard/DashboardChart';

interface ChartTitle{
    expenseData: ExpenseChart[];
}

export default function ChartsTitle({expenseData}: ChartTitle){

    const [expenseSum, setExpenseSum] = useState<number>();

    const expenseNumber = expenseData.length;

    useEffect(() => {
        const sum = expenseData.reduce((total, item) => total + item.expenseAmount, 0);
        setExpenseSum(sum);
    }, [expenseData])

    const items = [
        {
          title: "Total",
          desc: expenseSum,
        },
        {
          title : "Number",
          desc: expenseNumber
        }
      ]
      

    return(
        <>
        {items.map((item, id) => (
                <div key={id} className='py-4 pr-4'>
                  <p className='text-sm'>{item.title}</p>
                  <h4 className="text-gray-800 mr-8 font-semibold">
                    {item.desc}
                  </h4>
                </div>
              ))}
        </>
    )
}