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

                <div className='w-full grid place-items-center'>
                    <div className='w-full flex justify-start'>
                        <ul className='w-full grid place-items-start'>
                            <li>
                                <p style={SectionTitle}>New Suggestions</p>
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