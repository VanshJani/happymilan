import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchshortlistUsers } from '../../../../../store/matrimoney-services/slices/getShortlistUsersSlice'
import Pagination from '../../../../../components/common/Features/Pagination'
import Avatar from 'react-avatar'
import Link from 'next/link'
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import ProfileSkeletonLoader from '../../../../../components/common/animation/GridSkeleton'

function GridUserProfile() {
    const profileStyles = useMemo(() => ({
        ProfileName: { color: "#000", fontFamily: "Poppins", fontWeight: "600", lineHeight: "normal" },
        ListText: { color: "#000", fontFamily: "Poppins", fontWeight: "400", lineHeight: "24px" },
        Text4: { color: "#000", fontFamily: "Poppins", fontWeight: "400", lineHeight: "12px" },
        ProfileCard: { borderRadius: "10px", background: "#FFF", boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)" }
    }), []);

    const theuserData = [
        {
            id: 1,
            userName: "Ajay Sharma",
            profilePic: "/assests/dashboard/profile/1.svg",
            Activestatus: true,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 2,
            userName: "Rahul Verma",
            profilePic: "/assests/dashboard/profile/2.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 3,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/3.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 4,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/4.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 5,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/5.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
        {
            id: 6,
            userName: "Praveen K",
            profilePic: "/assests/dashboard/profile/6.svg",
            Activestatus: false,
            personal: {
                height: "32, 5’3”",
                marriagestatus: "Never Married",
                cast: "Hindu, Patel",
                location: "Ahmedabad, Gujarat",
                language: "Gujarati, Hindi",
                profession: "Software Engineer"
            },
            description: "I'd describe myself as someone who's reliable, trendy, smart and someone who always has a smile",
            images: {
                image1: "",
                image2: "",
                image3: "",
                image4: ""
            }
        },
    ]


    const dispatch = useDispatch();


    const { userData,
        totalPages,
        limit,
        pagesdata,
        loading,
        error,
        status } = useSelector((state) => state.shortlistusers)


    const [currentPage, setCurrentPage] = useState(1);

    const Pages = {
        currentPage: currentPage,
        viewType: "Gridview"
    }

    useEffect(() => {
        dispatch(fetchshortlistUsers(Pages))
    }, [currentPage, dispatch])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <>
            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div className=''></div>

                    {
                        status === "loading" ? <ProfileSkeletonLoader /> :
                            <>
                                {
                                    userData?.results?.map((res, index) => {
                                        return (

                                            <div key={index} style={profileStyles?.ProfileCard} className='inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                                <div className='flex justify-between pt-[10px]'>
                                                    <ul className='pl-[10px] flex space-x-[10px]'>
                                                        <li>
                                                            <Image alt='icon-1' width={17} height={14} src='/assests/Black/Couple2.svg' />
                                                        </li>
                                                        <li className='text-[10px]' style={profileStyles?.Text4}>You & Her </li>
                                                    </ul>
                                                    <ul className='pr-[10px] flex space-x-[30px]'>
                                                        <li>
                                                            <Image alt='shortlist' width={15} height={14} src='/assests/Black/Stars-2.svg' />
                                                        </li>
                                                        <li>
                                                            <Image alt='more' width={3} height={14} src='/assests/Black/3Dots.svg' />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <Link className='w-[100px] h-[100px] rounded-[50%]' href={`/longterm/dashboard/${res?.shortlistId?._id}`} >

                                                        <div className='w-[100px] h-[100px] rounded-[50%] flex justify-center hover:opacity-80'>
                                                            {res?.shortlistId?.profilePic ? <>
                                                                <Image quality={45} loading='lazy' alt='profile-pic' width={100} height={100} style={{ objectFit: "cover" }} className='w-[100px] h-[100px] rounded-[50%]' src={res?.shortlistId?.profilePic} />
                                                            </>
                                                                :
                                                                <><Avatar name={res?.shortlistId?.name} round size='100' /></>
                                                            }
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className='text-center'>
                                                    <Link href={`/longterm/dashboard/${res?.shortlistId?._id}`} >
                                                        <h1 style={profileStyles?.ProfileName} className='text-[18px]'>{res?.shortlistId?.name}</h1>
                                                    </Link>
                                                    <p style={profileStyles?.ListText} className='text-[14px]'>{`32, ${res?.shortlistId?.height ? res?.shortlistId?.height : "NA"}`}</p>
                                                    {/* <p style={profileStyles?.ListText} className='text-[14px]'>{`${res?.shortlistId?.religion ? capitalizeFirstLetter(res?.shortlistId?.religion) : "NA"} , ${res?.shortlistId?.cast ? capitalizeFirstLetter(res?.shortlistId?.cast) : "NA"}`}</p> */}
                                                    <p style={profileStyles?.ListText} className='text-[14px]'>
                                                        {`${res?.shortlistId?.religion ? capitalizeFirstLetter(res?.shortlistId?.religion) : "NA"} , ${res?.shortlistId?.cast ? capitalizeFirstLetter(res?.shortlistId?.cast) : "NA"}`}
                                                    </p>
                                                    <p style={profileStyles?.ListText} className='text-[14px]'>{res?.shortlistId?.maritalStatus ? res?.shortlistId?.maritalStatus : "NA"}</p>
                                                </div>

                                                <div className='flex space-x-[15px] justify-center'>
                                                    <div><Image alt='ignore' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/ignore-icon-2.svg' /></div>
                                                    <div><Image alt='like' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/heart-icon-2.svg' /></div>
                                                    <div><Image alt='send' width={40} height={40} className='w-[40px] h-[40px]' src='/assests/dashboard/icon/send-icon-2.svg' /></div>
                                                </div>
                                            </div>

                                        )

                                    })

                                } </>}



                </div >
                {userData.length > 0 ? <>  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} darkMode={false} /> </> : ""}
            </div>
        </>
    )
}

export default GridUserProfile