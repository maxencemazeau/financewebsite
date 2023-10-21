import React, { useState, useEffect } from 'react'
import TableContent from '../../components/TableContent';
import useAxios from '../../hooks/useAxios';
import useLocalStorage from '../../hooks/useLocalStorage';

interface UserCategory{
    categoryId: number,
    categoryName: string,
    totalExpense: number
}

export default function CategoryTable(){
    
        const [user] = useLocalStorage('user', []);
        const [userCategory, setUserCategory] = useState<UserCategory[]>([])

    useEffect(() => {
        const fetch = async() => {
            const response = await useAxios.get(`/getCategoryByUserAmount/${user.userId}`)
            setUserCategory(response.data);
            console.log(response.data);
        }

        fetch();
    }, [user.userId])


    return(
        <>
        <section className="pb-14">
      <div className="w-full mx-auto px-4 md:px-8 lg:pl-2 lg:pr-8">
      <ul className="border w-full rounded-lg">
        <div className="flex h-96">

        <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                    {userCategory.map((item) => (
                                <TableContent key={item.categoryId} data={[item.categoryName, item.totalExpense]} />
                                ))}
                         
                    </tbody>
                </table>
        </div>
       </ul>
       </div>
       </section> 
        </>
    )
}