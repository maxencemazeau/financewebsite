import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import Banner from '../Banner';
import axiosInstance from '../../hooks/useAxios';
import useLocalStorage from '../../hooks/useLocalStorage';


interface Inputs {
    username : string,
    password : string
}

export default function LoginForm() {

    const [loginError,setLoginError] = useState<boolean>(false);
    const [user, setUser] = useLocalStorage('user', []);
    const navigate = useNavigate();

const {
    register,
    handleSubmit,
    formState: {errors},
} = useForm<Inputs>()

const onSubmit: SubmitHandler<Inputs> = async(data) => {
    try {
        const response = await axiosInstance.get('/login', {
            params: { username: data.username, password: data.password },
          });
        if(response.data[0].username === data.username && response.data[0].password === data.password){
            setLoginError(false);
            setUser(response.data[0]);
        }
     }
     catch(error){
        setLoginError(true);
     };
    }
    
    useEffect(() => {
        if(user.length !== 0){
            navigate('/Dashboard');
        }

    }, [user, navigate])

    return (
        <>
        <Banner />
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                <a href="/" className="font-bold text-4xl">
                        Wise<span className='text-blue-400'>Finance</span>
                    </a>
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <a href="/Register" className="font-medium text-blue-400 hover:text-indigo-500">Sign up</a></p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            {...register("username", { required : true})}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
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
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-blue-400 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Sign in
                    </button>
                    {loginError === true ? 
                    <p className="text-red-500">Wrong username or password</p>
                    :
                     <p></p>
                     }
                    <div className="text-center">
                        <a href="" className="hover:text-indigo-600 mr-4">Forgot password?</a>
                        <a href="/" className="text-blue-400 hover:text-indigo-600">Back to home page</a>
                    </div>
                </form>
            </div>
        </main>
    </>
    )
}