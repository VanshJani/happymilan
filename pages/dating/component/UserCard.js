import React from 'react'
import SwiperCardNext from './SwiperCard'


function UserCard() {

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
        </>
    )
}

export default UserCard