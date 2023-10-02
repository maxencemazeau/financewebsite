import React from "react"

interface ButtonProps{
    onClick: () => void,
    label: string,
    color: string,
    icon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({onClick, label, color, icon}) => {

    return(
        <button onClick={onClick} className={`flex items-center gap-2 px-5 py-3 text-white duration-150 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 ${color}`}>
           {icon && <svg className="w-5 h-5">{icon}</svg>}
    {label}
        </button>
    )
}

export default Button;