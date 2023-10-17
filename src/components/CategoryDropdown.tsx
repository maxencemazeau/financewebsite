import React, { useState, useEffect } from 'react'
import useAxios from '../hooks/useAxios'
import useLocalStorage from '../hooks/useLocalStorage'

interface Category{
    categoryId: number,
    categoryName: string
}

export default function CategoryDropdown(){

    const [user] = useLocalStorage('user', [])
    const [category, setCategory] = useState<Category[]>([]);

    useEffect(() => {
        const fetch = async() => {
            const response = await useAxios.get(`/getCategoryByUser/${user.userId}`);
            setCategory(response.data);
        }

        fetch();
    }, [])

    return(
        <>
            <div className="relative max-w-xs mt-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute bottom-3 w-6 h-6 my-auto text-gray-400 right-2.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <label className="font-medium">Categories</label>
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
               {category.map(item => (
                    <option key={item.categoryId}>{item.categoryName}</option>
               ))}
            </select>
        </div>
        </>
    )
}