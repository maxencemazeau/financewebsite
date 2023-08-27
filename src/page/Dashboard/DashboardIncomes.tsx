import React from 'react';

export default function DashboardIncomes(){

    const tableItems = [
        {
            time: "Yearly",
            amount: "40000",
            percent: "10%",
        },
        {
            time: "Monthly",
            amount: "3333",
            percent: "40%",
        },
        
    ]

    return(
        <>
        <section className="pb-14">
      <div className="w-full mx-auto px-4 md:px-8">
      <ul className="border w-full rounded-lg">
        <div className="flex h-80">

        <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Incomes</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.time}</span>
                                            <br/>
                                            <span className="block text-gray-700 text-sm font-medium">{item.amount}</span>
                                        </div>
                                    </td>
                                    
                                    <td  className=" py-3 px-6 whitespace-nowrap">
                                        <span className="block text-gray-700 text-sm font-medium">{item.percent}</span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
       </ul>
       </div>
       </section> 
        </>
    )
}