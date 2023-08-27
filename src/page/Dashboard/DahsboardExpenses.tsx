import React from 'react';

export default function DashboardExpenses(){

    const tableItems = [
        {
            expenseType: "Grocery",
            productName: "Chocolat",
            buyDate: "23/07/2023",
            buyerName: "Maxence",
            amount: "40",
        },
        {
            expenseType: "Grocery",
            productName: "Chocolat",
            buyDate: "23/07/2023",
            buyerName: "Maxence",
            amount: "40",
        },
        {
            expenseType: "Grocery",
            productName: "Chocolat",
            buyDate: "23/07/2023",
            buyerName: "Maxence",
            amount: "40",
        },
        {
            expenseType: "Grocery",
            productName: "Chocolat",
            buyDate: "23/07/2023",
            buyerName: "Maxence",
            amount: "40",
        },
        {
            expenseType: "Grocery",
            productName: "Chocolat",
            buyDate: "23/07/2023",
            buyerName: "Maxence",
            amount: "40",
        },
        
    ]

    return(
        <>
        <section className="pb-14">
      <div className="w-full mx-auto px-4 md:px-8 lg:pl-2 lg:pr-8">
      <ul className="border w-full rounded-lg">
        <div className="flex h-80">

        <table className="w-full table-auto text-sm text-left">
                    <thead className=" font-medium border-b">
                        <tr className="bg-gray-50">
                            <th className="py-3 px-6">Expenses</th>
                            <th className="py-3 px-6"></th>
                            <th className="py-3 px-6"></th>
                            <th className="py-3 px-6"></th>
                            <th className="text-blue-400 py-3 px-6 hover:text-indigo-600">View more</th>
                            <th className="py-3 px-6"></th>
                        </tr>
                        <tr>
                            <th className="py-3 px-6">Category</th>
                            <th className="py-3 px-6">Product</th>
                            <th className="py-3 px-6">Date</th>
                            <th className="py-3 px-6">Buyer</th>
                            <th className="py-3 px-6">Amount</th>                
                        </tr>
                        
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.expenseType}</span>
                                        </div>
                                    </td>
                                    <td  className=" py-3 px-6 whitespace-nowrap">
                                        <span className="block text-gray-700 text-sm font-medium">{item.productName}</span>
                                    </td>
                                    <td  className=" py-3 px-6 whitespace-nowrap">
                                        <span className="block text-gray-700 text-sm font-medium">{item.buyDate}</span>
                                    </td>
                                    <td  className=" py-3 px-6 whitespace-nowrap">
                                        <span className="block text-gray-700 text-sm font-medium">{item.buyerName}</span>
                                    </td>
                                    <td  className=" py-3 px-6 whitespace-nowrap">
                                        <span className="block text-gray-700 text-sm font-medium">{item.amount}</span>
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