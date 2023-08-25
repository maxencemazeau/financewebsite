import React from "react"
import CategoryCard from "../../components/CategoryCards"

interface integrations{
    title : string,
    percent: number,
    budget: number,
    spend : number
}

const IntegrationProps : integrations[] = [
    {
        title: "Groceries",
        percent: 86,
        budget: 400,
        spend: 300

    }, {
        title: "House",
        percent: 86,
        budget: 400,
        spend: 300

    }, {
        title: "Game",
        percent: 86,
        budget: 1000,
        spend: 2000

    },
    {
        title: "Figma",
        percent: 86,
        budget: 10,
        spend: 5

    },
]

const DashboardCategory: React.FC= () =>{

return(
    <>
    <section className="py-14">
                <div className="w-full mx-auto px-4 md:px-8">
                <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">    
                {
                    IntegrationProps.map((item, idx: number) => (
                        <CategoryCard
                            key={idx}
                            category={{title : item.title, percent: item.percent, budget: item.budget, spend: item.spend}}
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