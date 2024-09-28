import React from 'react'
import Image from 'next/image'
import SwiperCardNext from './SwiperCard'


function UserCard() {
    const Text1 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
    }

    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "14px"
    }

    const SectionTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px", /* 137.5% */
    }

    return (
        <>


            <div className='w-full grid place-items-center'>

                <div className="space-y-[30px] flex flex-col items-center">
                    <div className='w-full flex justify-start'>
                        <ul className='w-full flex justify-between'>
                            <li>
                                <p className='' style={SectionTitle}>New Suggestions</p>
                            </li>
                            <li className='h-[24px] w-[25px]'>

                            </li>
                        </ul>

                    </div>
                    <SwiperCardNext />
                </div>
            </div>

            {/* <div className='w-full grid place-items-center'>

                <div className="space-y-[20px] flex flex-col items-center">
                    <div className='w-full'>
                        <ul className='w-full flex justify-between'>
                            <li>
                                <p style={SectionTitle}>New Suggestions</p>
                            </li>
                            <li className='h-[24px] w-[25px]'>

                            </li>
                        </ul>

                    </div>
                    <div className="mt-[20px] relative flex items-center space-x-[20px] justify-center">

                        <SwiperCardNext />
                    </div> */}
            {/* <div className="flex justify-center space-x-[20px] w-[329px]">
                        <Image
                            width={40}
                            height={40}
                            className="w-[40px] h-[40px] cursor-pointer"
                            src="/assests/dashboard/icon/ignore-icon-2.svg"
                        />
                        <Image
                            width={40}
                            height={40}
                            className="w-[40px] h-[40px] cursor-pointer"
                            src="/assests/dashboard/icon/heart-icon-2.svg"
                        />
                        <Image
                            width={40}
                            height={40}
                            className="w-[40px] h-[40px] cursor-pointer"
                            src="/assests/dashboard/icon/send-icon-2.svg"
                        />
                    </div> */}
            {/* </div >
            </div > */}
        </>
    )
}

export default UserCard