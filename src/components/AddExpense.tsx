import Button from './Button'
import React, { useState, useEffect } from 'react'
import ModalForm from './Modal/ModalForm'
import useAxios from '../hooks/useAxios'

export default function AddExpense(){

    const [modalState, setModalState] = useState<boolean>(false)

    const onSubmit = () => {
        setModalState(false);
    }

    return(
        <>
            <Button onClick={() => setModalState(true)} label={"Add Expense"} style={"bg-blue-400 my-6 font-meduim"}/>
            {modalState && <ModalForm category={true} onClose={() => setModalState(false)} title={"Add a new expense"} formSubmit={onSubmit} formFields={[{name:"Expense name"}, {name: "Cost"}, {name: "Buyer name"}, {name: "Date"}]}/>}
        </>
    )
}