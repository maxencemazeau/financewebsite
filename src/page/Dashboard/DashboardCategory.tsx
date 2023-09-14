import React, { useState, useEffect } from "react"
import CategoryCard from "../../components/CategoryCards"
import axiosInstance from "../../hooks/useAxios"
import useLocalStorage from "../../hooks/useLocalStorage"

interface Integrations{
    categoryId: number,
    categoryName : string,
    percent: number,
    budgetAmount: number,
    totalExpense : number
}

const DashboardCategory: React.FC= () =>{

    const [user] = useLocalStorage('user', []);
    const [userCategory, setUserCategory] = useState<Integrations[]>([])

    useEffect(() => {
        const fetch = async() => {
            const response = await axiosInstance.get(`/userDashboardCategory/${user.userId}`);
            const userCategories: Integrations[] = response.data; 

            userCategories.forEach((userCategory: Integrations) => {
                   const categoryId =  userCategory.categoryId;
                   const categoryName = userCategory.categoryName;
                   const budgetAmount = userCategory.budgetAmount;
                   const expenseAmount = userCategory.totalExpense;

                   const percent = Math.floor((expenseAmount / budgetAmount) * 100);

                   userCategory.percent = percent;
            });
            setUserCategory([...userCategories]);
        }

        fetch();

    },[])

return(
    <>
    <section className="py-14">
                <div className="w-full mx-auto px-4 md:px-8">
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">    
                {
                    userCategory.map((item, idx: number) => (
                        <CategoryCard
                            key={idx}
                            category={{title : item.categoryName, percent: item.percent, expenseAmount: item.totalExpense, budgetAmount: item.budgetAmount}}
                        />
                    ))
                }
                </ul>
            </div>
           </section> 

    </>
)
            }

export default DashboardCategory;