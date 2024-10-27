// NewrequestData
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import DatingLayout from '../../../../components/Dating/layout/DatingLayout'
import { useDispatch, useSelector } from 'react-redux'
import { GetNewRequestDataDating } from '../../../../store/dating-services/Redux-actions/home/DatingUsersActions'
import { acceptRequest, rejectRequest } from '../../../../store/actions/UsersAction'


function NewrequestData() {
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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetNewRequestDataDating())
    }, [])

    const { loading, users } = useSelector((state) => state.datingusers?.Requests)


    const [openShortlistModal, setopenShortlistModal] = React.useState(false)

    const [shortlistText, setshortlistText] = useState();

    const HanldeAccept = (res) => {

        dispatch(acceptRequest("dating", res))
        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(GetNewRequestDataDating());

        }, 800);

    }

    const HanldeReject = (res) => {
        dispatch(rejectRequest("dating", res));

        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(GetNewRequestDataDating());
        }, 800);

    }


    return (
        <>
            <DatingLayout>
                <div className='w-full grid place-items-center'>

                    <div className='w-full flex justify-start'>
                        <ul className='pl-[35px] w-full grid place-items-start'>
                            <li>
                                <p style={SectionTitle}>
                                    New Requests ({(users?.results?.length > 9 ? users?.results?.length : `0${users?.results?.length || 0}`)})
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-[20px] flex flex-col items-center">
                        <div></div>

                        <div className='space-y-5'>

                            {
                                users?.results?.map((res, index) => {
                                    return (
                                        <div key={index} className='w-[640px] h-[137px] 2xl:w-[640px] 2xl:h-[137px] xl:w-[600px] xl:h-[137px] lg:w-[500px] lg:h-[137px] border-[1px] border-[#EAE5E5] rounded-[18px]'>
                                            <div className='flex justify-between pr-5'>
                                                <ul className='flex items-center space-x-5'>
                                                    <li>
                                                        <Image
                                                            width={120}
                                                            height={137}
                                                            className="cursor-pointer 2xl:h-[137px] 2xl:w-[120px] xl:w-[120px] xl:h-[137px] lg:w-[100px] lg:h-[100px] w-full h-full"
                                                            alt='image'
                                                            style={{ objectFit: "cover" }}
                                                            src={res?.user?.profilePic}
                                                        />
                                                    </li>
                                                    <li>
                                                        <div className="">
                                                            <div>
                                                                <div className="rounded-[10px] text-center bg-[#30b70a] text-[black] w-[36px] h-[14px]">
                                                                    <p style={Text2} className="text-[10px]">online</p>
                                                                </div>
                                                            </div>
                                                            <h1 className="text-[20px]" style={Text1}>
                                                                {res?.user?.name}
                                                            </h1>
                                                            <p className="text-[10px]" style={Text2}>
                                                                {res?.user?.gender} 36, 4’ 5” | Ahmedabad (2.1 km)
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <ul className='flex items-center space-x-5'>
                                                    <li>
                                                        <div onClick={() => HanldeReject(res)} className='w-[63px] h-[44px] grid place-items-center' id='cancel-dating'>
                                                            <svg className='cancel-icon-dt' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path id="Vector" d="M1.85225 14.9045L0 13.0523L5.6 7.45225L0 1.85225L1.85225 0L7.45225 5.6L13.0522 0L14.9045 1.85225L9.3045 7.45225L14.9045 13.0523L13.0522 14.9045L7.45225 9.3045L1.85225 14.9045Z" />
                                                            </svg>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div onClick={() => HanldeAccept(res)} id='accept-request' className='rounded-full border-[1px] border-[#17C270] w-[63px] h-[44px] grid place-items-center'>
                                                            <svg className='accept-icon-dt' width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.15225 13.4522L0 7.29998L1.8915 5.40873L6.15225 9.66948L15.313 0.508728L17.2045 2.39998L6.15225 13.4522Z" />
                                                            </svg>

                                                        </div>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </DatingLayout >
        </>
    )
}

export default NewrequestData