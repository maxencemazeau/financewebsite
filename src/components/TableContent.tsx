import React from 'react';


interface Content {
    data: (string | number)[],
    option?: boolean
}


const TableContent: React.FC<Content> = ({ data, option }) => {

    return (
        <>
                    <tr>
                       
                       {data.map((rowData, idx) => (
                        <>
                            <td key={idx} className="py-3 px-6 whitespace-nowrap">
                                <div>
                                    <span className="block text-gray-700 text-sm font-medium">{rowData}</span>
                                </div>
                            </td>
                        </>    
                        ))}

                        <td>
                                {option && <p>Edit / Delete</p>}
                            </td>
                    </tr>
        </>
    )
}

export default TableContent;