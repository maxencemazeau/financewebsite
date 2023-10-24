import Button from '../Button'
import React, { useState } from 'react'
import ModalForm from '../Modal/ModalForm'
import useAxios from '../../hooks/useAxios'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function AddExpense(){

    const [user] = useLocalStorage('user', []);
    const [modalState, setModalState] = useState<boolean>(false);
    const [categoryId, setCategoryId] = useState<number>();

    const onSubmit = async(data: any) => {
        setModalState(false);
        const expenseName = data["Expense name"];
        const amount = data["Cost"];
        const expenseAmount = parseFloat(amount);
        const buyerName = data["Buyer name"];
        const purchaseDate = data["Date"];
        await useAxios.post('/addNewExpense', { expenseName, expenseAmount, buyerName, purchaseDate, userId: user.userId, categoryId: categoryId});
    }

    return(
        <>
            <Button onClick={() => setModalState(true)} label={"Add Expense"} style={"bg-blue-400 my-6 font-meduim"}/>
            {modalState && <ModalForm category={true} onClose={() => setModalState(false)} title={"Add a new expense"} formSubmit={onSubmit} setCategoryId={setCategoryId} formFields={[{name:"Expense name"}, {name: "Cost"}, {name: "Buyer name"}, {name: "Date"}]}/>}
        </>
    )
}