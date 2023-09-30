import React from 'react';


interface Content {
    data: (string | number)[]
}

interface ContentProps {
    content: Content;
}


const TableContent: React.FC<ContentProps> = ({ content }) => {

    const { data } = content;

    return (
        <>
                    <tr>
                       
                       {data.map((rowData, idx) => (
                            <td key={idx} className="py-3 px-6 whitespace-nowrap">
                                <div>
                                    <span className="block text-gray-700 text-sm font-medium">{rowData}</span>
                                </div>
                            </td>
                        ))}
                    </tr>
        </>
    )
}

export default TableContent;