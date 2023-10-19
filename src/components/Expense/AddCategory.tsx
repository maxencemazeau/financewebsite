import Button from '../Button'
import React, { useState, useEffect } from 'react'
import ModalForm from '../Modal/ModalForm'
import useAxios from '../../hooks/useAxios'
import useLocalStorage from '../../hooks/useLocalStorage'

export default function AddCategory(){
    
    const [user] = useLocalStorage('user', []);
    const [modalState, setModalState] = useState<boolean>(false);

    const onSubmit = async(data: any) => {
        setModalState(false);
        const categoryName = data["Category name"]
        console.log(categoryName);
        try {
        await useAxios.post('/addNewCategory', { userId: user.userId, categoryName: categoryName });
        } catch(err){
            console.log(err);

        }
    }

    return(
        <>
            <Button onClick={() => setModalState(true)} label={"Add new category"} style={"bg-orange-400 my-6 font-meduim"}/>
            {modalState && <ModalForm category={false} onClose={() => setModalState(false)} title={"Add a new category"} formSubmit={onSubmit} formFields={[{name:"Category name"}]}/>}
        </>
    )
}