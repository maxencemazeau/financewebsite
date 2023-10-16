import React, { useState } from 'react';
import ModalForm from './ModalForm';


interface Content {
    data: (string | number)[],
    option?: boolean
}


const TableContent: React.FC<Content> = ({ data, option }) => {

    const [modalState, setModalState] = useState<boolean>(false);

    const onSubmit = () => {
        setModalState(false);
    }

    const openEditModal = () => {
        setModalState(true);
    }

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
                    {option &&
                        <div>
                            <button className='px-4' onClick={openEditModal}>Edit </button>
                            <button>Delete</button>
                        </div>}
                </td>
            </tr>

            {modalState && (
                <ModalForm
                    category={false}
                    onClose={() => setModalState(false)}
                    title={"Edit expense"}
                    formSubmit={onSubmit}
                    formFields={[
                        { name: "Expense name" },
                        { name: "Cost" },
                        { name: "Buyer name" },
                        { name: "Date" }
                    ]}
                />
            )}
        </>
    )
}

export default TableContent;