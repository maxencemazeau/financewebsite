import React, { useState, useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import useLocalStorage from '../../hooks/useLocalStorage';
import TableContent from '../../components/TableContent';

interface Expense{
    expenseId : number,
    categoryName: string,
    expenseName: string,
    purchaseDate : string,
    buyerName: string,
    expenseAmount : number

}

export default function DashboardExpenses(){

    const [user] = useLocalStorage('user', []);
    const [userExpense, setUserExpense] = useState<Expense[]>([]);


    useEffect(() => {
       const fetch = async() => {
            const response = await useAxios.get(`/expenseByUser/${user.userId}`);
            const expenses: Expense[] = response.data;

            expenses.forEach((userExpense: Expense) => {
                const date = new Date(userExpense.purchaseDate);
                userExpense.purchaseDate = date.toLocaleDateString();
            })

            setUserExpense(expenses);
        }

        fetch();
    },[])

    console.log(userExpense);
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
                            userExpense.map((item, idx) => (
                                <TableContent key={idx} content={{data : [item.categoryName, item.expenseName , item.purchaseDate, item.buyerName, item.expenseAmount]}} />
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