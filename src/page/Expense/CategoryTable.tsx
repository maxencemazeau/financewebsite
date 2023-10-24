import React, { useState, useEffect } from 'react'
import TableContent from '../../components/TableContent';
import useAxios from '../../hooks/useAxios';
import useLocalStorage from '../../hooks/useLocalStorage';
import Pagination from '../../components/Pagination';

interface UserCategory{
    categoryId: number,
    categoryName: string,
    totalExpense: number,
    expenseCount: number
}

export default function CategoryTable(){
    
        const [user] = useLocalStorage('user', []);
        const [currentPage, setCurrentPage] = useState<number>(1);
        const [totalPage, setTotalPage] = useState<number>(0);
        const [userCategory, setUserCategory] = useState<UserCategory[]>([])

    useEffect(() => {
        const fetch = async() => {
            const response = await useAxios.get(`/getCategoryByUserAmount`, { params : { userId: user.userId, page: currentPage}})
            const category: UserCategory[] = response.data.userCategory
            setUserCategory(category);
            setTotalPage(response.data.pageNumber);
        }

        fetch();
    }, [user.userId])

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
        <section className="pb-14 lg:mt-24">
      <div className="w-full mx-auto px-4 md:px-8 lg:pl-2 lg:pr-8">
      <ul className="border w-full rounded-lg">
        <div className="flex h-96">

        <table className="w-full table-auto text-sm text-left">
                    <thead className=" font-medium border-b">
                        <tr className="bg-gray-50">
                            <th className="py-3 px-6">Categories</th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th className='py-3 px-6'>Name</th>
                            <th className='px-6'>Total</th>
                            <th className='px-6'>Count</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                    {userCategory.map((item) => (
                                <TableContent key={item.categoryId} data={[item.categoryName, item.totalExpense, item.expenseCount]} />
                                ))}
                           <td className="py-3 px-6 whitespace-nowrap" colSpan={6}>
                                <div>
                                    <span className="block text-gray-700 text-sm font-medium"><Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} onPagePrevious={onPagePrevious} onPageNext={onPageNext}/></span>
                                </div>
                            </td>
                         
                    </tbody>
                </table>
        </div>
       </ul>
       </div>
       </section> 
        </>
    )
}