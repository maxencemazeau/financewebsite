import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Pagination from "../../components/Pagination";
import useLocalStorage from "../../hooks/useLocalStorage";
import TableContent from "../../components/TableContent";
import useAxios from "../../hooks/useAxios";
import ModalForm from "../../components/ModalForm";

interface Expense{
    expenseId : number,
    categoryName: string,
    expenseName: string,
    purchaseDate : string,
    buyerName: string,
    expenseAmount : number

}

export default function ExpenseTable(){

    const [user] = useLocalStorage('user', []);
    const [userExpense, setUserExpense] = useState<Expense[]>([]);
    const [modalState, setModalState] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);

    useEffect(() => {
       const fetch = async() => {
            const response = await useAxios.get(`/expensePagination`, {params: {userId: user.userId, page: currentPage }});
            const expenses: Expense[] = response.data.expense;
            setTotalPage(response.data.totalPage);
            expenses.forEach((userExpense: Expense) => {
                const date = new Date(userExpense.purchaseDate);
                userExpense.purchaseDate = date.toLocaleDateString();
            })

            setUserExpense(expenses);
        }

        fetch();
    },[user.userId, currentPage])

    const onPageNext = () => {
        setCurrentPage(currentPage + 1);
        console.log(currentPage)
    }

    const onPagePrevious = () => {
        setCurrentPage(currentPage - 1);
        console.log(currentPage)
    }

    

    return(
        <>
        <div className="px-4 md:px-8 lg:pl-2 lg:pr-8">
            <Button onClick={() => setModalState(true)} label={"Add Expense"} style={"bg-blue-400 my-6 font-meduim"}/>
            {modalState && <ModalForm onClose={() => setModalState(false)}/>}
        </div>
        <section className="pb-14">
      <div className="w-full mx-auto px-4 md:px-8 lg:pl-2 lg:pr-8">
      <ul className="border w-full rounded-lg">
        <div className="flex h-100">

        <table className="w-full table-auto text-sm text-left">
                    <thead className=" font-medium border-b">
                        <tr className="bg-gray-50">
                            <th className="py-3 px-6">Expenses</th>
                            <th className="py-3 px-6"></th>
                            <th className="py-3 px-6"></th>
                            <th className="py-3 px-6 hidden md:table-cell"></th>
                            <th className="py-3 px-6 hidden md:table-cell"></th>
                            <th className="py-3 px-6 hidden md:table-cell"></th>
                        </tr>
                        <tr>
                            <th className="py-3 px-6">Category</th>
                            <th className="py-3 px-6">Product</th>
                            <th className="py-3 px-6 hidden md:table-cell">Date</th>
                            <th className="py-3 px-6 hidden md:table-cell">Buyer</th>
                            <th className="py-3 px-6 hidden md:table-cell">Amount</th> 
                            <th></th>               
                        </tr>
                        
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            userExpense.map((item, idx) => (
                                <>
                                <TableContent key={idx} data={[item.categoryName, item.expenseName , item.purchaseDate, item.buyerName, item.expenseAmount]} option={true} />
                                </>
                            ))
                        }
                         <tr>
                            <td className="py-3 px-6 whitespace-nowrap"  colSpan={6}>
                                <div>
                                    <span className="block text-gray-700 text-sm font-medium"><Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} onPagePrevious={onPagePrevious} onPageNext={onPageNext}/></span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                       
                </table>
        </div>
       </ul>
       </div>
       </section> 
    
        </>
    )
}