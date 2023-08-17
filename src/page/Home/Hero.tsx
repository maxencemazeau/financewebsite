import React from "react"

export default function Hero() {

    return(
        <>
        <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
                <div className="text-center space-y-4">
                    <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
                    Take Control, Track,
                         <span className="text-blue-400"> and Thrive</span>
                    </h1>
                    <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                    Simplify budgeting, amplify savings, and pave the way to your prosperous future.
                    </p>
                </div>
                <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
                    <a href="javascript:void(0)" className="px-10 py-3.5 w-full bg-blue-400 text-white text-center rounded-md shadow-md block sm:w-auto">
                        Free trial
                    </a>                  
                </div>
            </section>
        </>
    )
}