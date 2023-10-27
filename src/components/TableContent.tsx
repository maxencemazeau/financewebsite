import React, { useState } from 'react';
import ModalForm from './Modal/ModalForm';


interface Content {
    data: (string | number)[],
    option?: boolean,
    onDelete?: () => void,
    title?: string,
    onEdit? : () => void
}


const TableContent: React.FC<Content> = ({ data, option, onDelete, title, onEdit }) => {

    const [modalState, setModalState] = useState<boolean>(false);

    const onSubmit = () => {
        setModalState(false);
    }

    const openEditModal = () => {
        setModalState(true);
    }

    const onDeleteButton = () => {
        onDelete?.();
    }

    const onEditButton = () => {
        onEdit?.();
    }

    const isMobile = window.innerWidth <= 748;

    return (
        <>
            <tr>
                {data.slice(0, isMobile ? 3 : data.length).map((rowData, idx) => (
                    <>
                        <td key={idx} className="py-3 px-6 whitespace-nowrap">
                            <div>
                                <span className="block text-gray-700 text-sm font-medium">{rowData}</span>
                            </div>
                        </td>
                    </>
                ))}

                {isMobile &&
                    <td>
                        <button>
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                        </button>
                    </td>

                }

                <td>
                    {option && !isMobile &&
                        <div>
                            <button className='px-4 font-semibold text-black hover:text-blue-400' onClick={onEditButton}>Edit </button>
                            <button className="text-red-400 font-semibold hover:text-red-800" onClick={onDeleteButton}>Delete</button>
                        </div>}
                </td>
            </tr>

            {modalState && (
                <ModalForm
                    category={false}
                    onClose={() => setModalState(false)}
                    title={title}
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