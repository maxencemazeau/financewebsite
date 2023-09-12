import React, { useState, useEffect } from 'react';
import axiosInstance from '../../hooks/useAxios';
import useLocalStorage from '../../hooks/useLocalStorage';

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
                        {
                            userGoal.map((item, goalId) => (
                                <tr key={goalId}>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.goalName}</span>
                                        </div>
                                    </td>
                                    <td  className=" py-3 px-6 whitespace-nowrap">
                                        <span className="block text-gray-700 text-sm font-medium">{item.targetAmount}</span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
       </ul>
       </div>
       </section> 
        </>
    )
}