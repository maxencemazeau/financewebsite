import { useForm, SubmitHandler } from 'react-hook-form';
import CategoryDropdown from "../CategoryDropdown";

interface ModalState{
        onClose: () => void,
        formSubmit: (data: Inputs) => void,
        title: string,
        formFields?: { name: string}[],
        category?: boolean
}

interface Inputs{
    [key: string | number]: string | number
}   


function ModalForm({ onClose, formSubmit, title, formFields, category }: ModalState) {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>()

    const handleClose = () => {
        onClose();
    }

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        try{
            formSubmit(data);
        } catch(errors) {
            
        }
    }

    return (
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={handleClose}></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                        <div className="flex items-center justify-between p-4 border-b">
                            <h4 className="text-lg font-medium text-gray-800">
                                {title}
                            </h4>
                            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                onClick={handleClose}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        <main className="w-full flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <form
                    className="mt-8 space-y-5"
                >
                    {formFields?.map((field: any,index: number) => (
                        <div key={index}>
                        <label className="font-medium">
                            {field.name}
                        </label>
                        { field.name === "Date" ? 
                        <input
                        type="date"
                        {...register(field.name, { required : true, maxLength : 50})}
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                    : <input
                            type="text"
                            {...register(field.name, { required : true, maxLength : 50})}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        /> }  
                    </div>
                    ))}
                    {category && <CategoryDropdown />}
                </form>
            </div>
        </main>
                        <div className="flex items-center gap-3 p-4 mt-5 border-t">
                            <button className="px-6 py-2 text-white bg-green-600 rounded-md outline-none ring-offset-2 ring-green-600 focus:ring-2"
                                onClick={handleSubmit(onSubmit)}
                            >
                                Accept
                            </button>
                            <button className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ModalForm
