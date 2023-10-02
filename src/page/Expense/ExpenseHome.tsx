import React from "react";
import Button from "../../components/Button";

export default function ExpenseHome(){

    const test = () => {
        console.log('reusable button');
    }

    return(
        <>
        <Button onClick={test} label={"Test"} color={"bg-red-600"}/>
        </>
    )
}