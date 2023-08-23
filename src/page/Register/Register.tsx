import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios';

interface UserRegister {
    firstName : string,
    lastName : string,
    email : string,
    username : string,
    password : string
}

export default function Register () {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<UserRegister>()

    const onSubmit: SubmitHandler<UserRegister> = async(data) => {
        await axios.post('http://localhost:8080/register', { 
            firstName : data.firstName, lastName: data.lastName, email : data.email, username : data.username, password : data.password
        })
    }

    return (
        <main className="flex overflow-hidden">
            <div className="flex-1 hidden lg:block">
                <img src="https://res.cloudinary.com/floatui/image/upload/v1670701901/scott-webb-NQymDb5XqC4-unsplash_ezrolm.jpg" className="w-full h-screen object-cover" />
            </div>
            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
                <div className="max-w-lg flex-1 mx-auto px-4 text-gray-600">
                    <div>
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Create your account
                        </h3>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5 mt-12 lg:pb-12"
                    >
                        <div>
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                {...register("firstName", {required : true})}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Last Name
                            </label>
                            <input
                                type="text"
                                {...register("lastName", {required : true})}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register("email", {required : true})}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Username
                            </label>
                            <input
                                type="text"
                                {...register("username", {required : true})}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register("password", {required : true})}
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                         type="submit"   className="w-full px-4 py-2 text-white font-medium bg-blue-400 hover:bg-indigo-600 active:bg-indigo-600 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                        <div className="mt-5 space-y-2">
                        <p className="">Already an account ? <a href="/Register" className="font-medium text-blue-400 hover:text-indigo-500">Log in</a></p>
                    </div>
                    <div className="mt-5 space-y-2">
                    <a href="/" className="font-medium hover:text-indigo-500">Back to home page</a>
                    </div>
                    </form>
                </div>
            </div>
        </main>
    )
}