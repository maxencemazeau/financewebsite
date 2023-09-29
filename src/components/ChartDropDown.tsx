import { useEffect, useRef, useState } from "react"
import { start } from "repl"

interface ChartDropDownProps {
    setDateModal: (value: boolean) => void,
    setStartDate: (value: string) => void,
    setEndDate: (value: string) => void
}


const ChatsDropDown: React.FC<ChartDropDownProps> = ({ setDateModal, setStartDate, setEndDate }) => {

    const menuItems = [
        ["Today", "bg-blue-600", "text-black"],
        ["Last Week", "bg-orange-600", "text-black"],
        ["This Month", "bg-teal-600", "text-black"],
        ["This Year", "bg-yellow-300", "text-black"],
        ["Personalize date", "bg-purple-600", "text-black"],
    ]

    const [selectedItem, setSelectedItem] = useState({
        item: menuItems[0],
        idx: 0
    })

    const [state, setState] = useState(false)

    const selectMenuRef = useRef<HTMLButtonElement | null>();

    let currentDate: Date = new Date();
    let startDate: Date;
    let endDate: Date;

    useEffect(() => {

        const handleSelectMenu = (e: any) => {
            if (selectMenuRef.current && !selectMenuRef.current.contains(e.target)) {
                setState(false)
            }
        }

        document.addEventListener('click', handleSelectMenu)

    }, [])

    const formattedDateToMidnight = (date: Date) => {
        date.setUTCHours(0, 0, 0, 0);
        return date.toISOString();
    }

    const dropDownTime = async (selectedValue: any) => {
        switch (selectedValue) {
            case "Today":
                currentDate.setUTCHours(0, 0, 0, 0);
                const formattedDate = currentDate.toISOString();
                setStartDate(formattedDate);
                setEndDate(formattedDate);
                break;
            case "Last Week":
                endDate = new Date();
                startDate = new Date(endDate);
                startDate.setDate(endDate.getDate() - 7);
                setStartDate(formattedDateToMidnight(startDate));
                setEndDate(formattedDateToMidnight(endDate));
                break;
            case "This Month":
                startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
                endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
                setStartDate(formattedDateToMidnight(startDate));
                setEndDate(formattedDateToMidnight(endDate));
                break;
            case "This Year":
                startDate = new Date(currentDate.getFullYear(), 0);
                endDate = new Date(currentDate.getFullYear() + 1, 0)
                setStartDate(formattedDateToMidnight(startDate));
                setEndDate(formattedDateToMidnight(endDate));
                break;
            case "Personalize date":
                setDateModal(true);
                break;
        }
    }

    return (
        <div className="relative max-w-sm text-base">
            <button ref={selectMenuRef as React.RefObject<HTMLButtonElement>} className="flex items-center justify-between gap-2 w-full px-3 py-2 text-gray-500 bg-white border rounded-md shadow-sm cursor-default outline-none focus:border-indigo-600"
                aria-haspopup="true"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                onClick={() => setState(!state)}
            >
                <div className="flex items-center gap-x-3">
                    Status <span className={`w-2 h-2 rounded-full ${selectedItem.item[1]}`}></span>
                    <span className={`text-sm ${selectedItem.item[2]}`}>{selectedItem.item[0]}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>

            {
                state ? (
                    <div className="relative w-full">
                        <ul className="absolute w-full mt-3 overflow-y-auto bg-white border rounded-md shadow-sm max-h-64" role="listbox">
                            {
                                menuItems.map((el, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => {
                                            setSelectedItem({
                                                item: el,
                                                idx,
                                            });
                                            dropDownTime(el[0]);
                                        }}

                                        role="option"
                                        aria-selected={selectedItem.idx === idx ? true : false}
                                        className={`${selectedItem.idx === idx ? 'text-indigo-600 bg-indigo-50' : ''} flex items-center justify-between gap-2 px-3 cursor-default py-2 duration-150 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50`}
                                    >
                                        <div className="flex items-center gap-x-3">
                                            <span className={`w-2 h-2 rounded-full ${el[1]}`}></span>
                                            {el[0]}
                                        </div>
                                        {
                                            selectedItem.idx === idx ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            ) : ''
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ) : ''
            }
        </div>
    )
}

export default ChatsDropDown