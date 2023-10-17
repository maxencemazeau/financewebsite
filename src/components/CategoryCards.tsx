import React from 'react';

interface Category {
    title: string;
    expenseAmount : number;
    budgetAmount: number;
    percent: number;
}

interface CategoryProps {
    category: Category;
}

const CategoryCard: React.FC<CategoryProps> = ({ category }) => {
    return (
        <>
            <li className="border rounded-lg">
                <div className="flex items-center justify-between p-4">
                    <div>
                        <h4 className="text-gray-800 font-semibold">{category.title}</h4>
                        <div className="text-gray-800">
                            <p>
                                Budget: {category.expenseAmount} / {category.budgetAmount}
                            </p>
                        </div>
                    </div>
                    <div className="text-gray-800 mt-6">
                        <p>
                            Used: <span className="text-green-500">{category.percent} %</span>
                        </p>
                    </div>
                </div>
            </li>
        </>
    );
}

export default CategoryCard;
