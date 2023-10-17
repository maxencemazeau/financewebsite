import { useEffect, useState } from "react"

interface PaginationProps{
    setCurrentPage: (value: number) => void,
    onPageNext: () => void,
    onPagePrevious: () => void,
    currentPage: number,
    totalPage: number
}

 const Pagination: React.FC<PaginationProps> = ({ totalPage, currentPage , setCurrentPage, onPagePrevious, onPageNext}) => {

    const [pages, setPages] = useState<number[]>([]);

    useEffect(() => {
        const pageNumber = Array.from({length: totalPage}, (_, i) => i + 1);
        setPages(pageNumber);

    },[totalPage])

    const getItem = (item: number) => {
        setCurrentPage(item);
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
            <div className="hidden justify-end text-sm md:flex">

                <div className="flex items-center gap-12" aria-label="Pagination">
                    <button onClick={onPagePrevious} className="hover:text-indigo-600">
                        Previous
                    </button>
                    <ul className="flex items-center gap-1">
                        {
                            pages.map((item, idx) => (
                                <li key={item}>
                                    {                                   
                                            <button onClick={() => getItem(item)} aria-current={currentPage == item ? "page" : false} className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-indigo-600 ${currentPage == item ? "bg-blue-400 text-white font-medium" : ""}`}>
                                                {item}
                                            </button>
                                    }
                                </li>
                            ))
                        }
                    </ul>
                    <button onClick={onPageNext} className="hover:text-indigo-600">
                        Next
                    </button>
                </div>
            </div>
            {/* On mobile version */}
            <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
                <button onClick={onPagePrevious} className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Previous</button>

                <button onClick={onPageNext} className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Next</button>
            </div>
        </div>
    )
}

export default Pagination