import React from 'react'
import SwiperCardNext from './SwiperCard'
import { useSelector } from 'react-redux';


function UserCard() {

    const SectionTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px", /* 137.5% */
    }

    const datingUsers = useSelector((state) => state.rangeuser?.users[0]?.paginatedResults || []);

    return (
        <>
            <div className=' w-full grid place-items-center'>

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
                    {
                        datingUsers.length > 0 ? (
                            <SwiperCardNext />
                        ) : (
                            <div className="mt-[20px] top-3 left-[9px] relative flex items-center space-x-[20px] justify-center">
                                <div className="2xl:h-[378px] 2xl:w-[329px] xl:w-[270px] xl:h-[319px] rounded-xl shadow-lg bg-gray-200">
                                    <div className='w-full h-full grid place-items-center'>
                                        <p>No Data Found</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default UserCard