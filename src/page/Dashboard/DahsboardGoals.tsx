import React from 'react';

export default function DahsboardGoals(){

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Liam James",
            email: "liamjames@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Software engineer",
            salary: "$100K"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Product designer",
            salary: "$90K"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Front-end developer",
            salary: "$80K"
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Laravel engineer",
            salary: "$120K"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            phone_nimber: "+1 (555) 000-000",
            position: "Open source manager",
            salary: "$75K"
        },
        
    ]

    return(
        <>
        <section className="pb-14">
      <div className="w-full mx-auto px-4 md:px-8 lg:pl-2 lg:pr-8">
      <ul className="border w-full rounded-lg">
        <div className="flex h-80">

        <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Goals</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="py-3 px-6 whitespace-nowrap">
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                        </div>
                                    </td>
                                    <td  className=" py-3 px-6 whitespace-nowrap">
                                        <span className="block text-gray-700 text-sm font-medium">Hello</span>
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