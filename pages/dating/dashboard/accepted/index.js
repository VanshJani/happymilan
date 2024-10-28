import React from 'react'
import Image from 'next/image'
import DatingLayout from '../../../../components/Dating/layout/DatingLayout'
import AcceptedUsersCard from '../../component/AcceptedCard'


function AcceptedData() {
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
            <DatingLayout>

                <div className=' w-full grid place-items-center'>
                    <div className='w-full flex justify-start'>
                        <ul className='pr-[40px] pl-[40px] w-full flex justify-between'>
                            <li>
                                <p style={SectionTitle}>Accepted Profiles</p>
                            </li>
                            <li className='w-[247px] h-[40px] relative'>
                                <div className="hover:bg-[#F3F8FF] h-[30px] w-[30px] rounded-[100%] absolute left-2 top-1 grid place-items-center">
                                    <Image width={15} height={15} alt="search" src="/assests/dashboard/icon/Search-grad.svg" loading="lazy" />
                                </div>
                                <input type='search' placeholder='Search by name' className='border-[1px] border-[#E3E3E3] w-[247px] h-[40px] rounded-[20px] pr-4 pl-10' />
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-[30px] flex flex-col items-center">
                        <AcceptedUsersCard />
                    </div>
                </div>
            </DatingLayout>
        </>
    )
}

export default AcceptedData