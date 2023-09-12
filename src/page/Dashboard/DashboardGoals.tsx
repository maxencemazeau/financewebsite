import React, { useState, useEffect } from 'react';
import axiosInstance from '../../hooks/useAxios';
import useLocalStorage from '../../hooks/useLocalStorage';
import TableContent from '../../components/TableContent';

interface UserGoal {
    goalId: number,
    goalTypeId: number,
    userId : number,
    targetAmount: number,
    goalName : string
}

export default function DashboardGoals(){

    const [user] = useLocalStorage('user', []);
    const [userGoal, setUserGoal] = useState<UserGoal[]>([])

    useEffect(() => {
        const fetch = async() => {
            const response = await axiosInstance.get(`/goalById/${user.userId}`)
            setUserGoal(response.data);
        }

        fetch();
    }, [user.userId])

    // const tableData = userGoal.map((item) => {
    //     return {
    //         goalId : item.goalId,
    //         goalName : item.goalName
    //     }
    // })


    return(
        <>
        <section className="pb-14">
      <div className="w-full mx-auto px-4 md:px-8 lg:pl-2 lg:pr-8">
      <ul className="border w-full rounded-lg">
        <div className="flex h-96">

        <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Goals</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                    {userGoal.map((item, goalId) => (
                                <TableContent key={goalId} content={{data : [item.goalName, item.targetAmount]}} />
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