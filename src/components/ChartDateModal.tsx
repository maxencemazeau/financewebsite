import React, { useState } from "react"

interface ChartDateModalProps{
    onClose : () => void
}

export default function ChartDateModal({onClose}: ChartDateModalProps) {

    const [state, setState] = useState(true);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleClose = () => {
        onClose();
    }

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <label className='bg-blue-400 rounded-l-lg px-4 py-2 border-gray-300 font-semibold text-white h-10'>Start</label>
                    <input type="date" onChange={(e) => setStartDate(e.target.value)} className='border-t border-r border-b p-2 mr-4 border-gray-300 rounded-r-lg h-10'></input>
                    <label className='bg-orange-400 rounded-l-lg px-4 py-2 border-gray-300 font-semibold text-white h-10'>End</label>
                    <input type='date' onChange={(e) => setEndDate(e.target.value)} className='border-t border-r border-b p-2 border-gray-300 rounded-r-lg h-10'></input>
                  <div className="mt-6">  
                    <button
                        onClick={handleClose}
                        className="px-5 py-3 mr-4 text-white duration-150 bg-red-600 rounded-lg hover:bg-red-700 active:shadow-lg"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleClose}
                        className="px-5 py-3 text-white duration-150 bg-green-600 rounded-lg hover:bg-green-700 active:shadow-lg"
                    >
                        Set date
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}