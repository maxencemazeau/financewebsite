import React from "react";
import CategoryCard from "../../components/CategoryCards"

interface integrations {
    title: string,
    percent: number,
    budget: number,
    spend: number
}

const IntegrationProps: integrations[] = [
    {
        title: "Groceries",
        percent: 86,
        budget: 400,
        spend: 300
    },
    {
        title: "House",
        percent: 86,
        budget: 400,
        spend: 300
    },
    {
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

const DashboardCategory: React.FC = () => {
    return (
        <section className="py-14 flex w-full justify-center">
            {
                IntegrationProps.map((item, idx: number) => (
                    <div className="w-1/4 mr-8">
                    <CategoryCard
                        key={idx}
                        category={{ title: item.title, percent: item.percent, budget: item.budget, spend: item.spend }}
                    />
                    </div>
                ))
                
            }
        </section>
    )
}

export default DashboardCategory;
