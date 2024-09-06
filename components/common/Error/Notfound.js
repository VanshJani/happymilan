import { useRouter } from 'next/router'
import React from 'react'

function Notfound({ error }) {

    const router = useRouter();
    return (
        <>
            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-9xl font-bold text-purple-400">404</h1>
                        <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                        <p className="text-2xl pb-8 px-12 font-medium">{error}</p>
                        {/* <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p> */}
                        <button onClick={() => router.back()} id='grad-button' className=" px-6 py-3 rounded-[23px] mr-6">
                            HOME
                        </button>

                        <button className="border-[1px] border-[black] hover:bg-[#EFF5FF] px-6 py-3 rounded-[23px]">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notfound