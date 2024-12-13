import Image from 'next/image'
import React from 'react'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import icons from '../../../../../utils/icons/icons';
import { useSelector } from 'react-redux';
import ShortlistUser from '../../../../_components/common/Buttons/ShortlistUser';
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal';
import Avatar from 'react-avatar';
import GridLikeButton from '../../../../_components/common/Buttons/LikeSections/GridLikeButton';
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize';
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu';
import Link from 'next/link';

function GridUser() {

    const { darkMode, toggleDarkMode } = useDarkMode();

    const ProfileName = {
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const ListText = {
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */
    }

    const Text4 = {
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    }


    const ProfileCard = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }

    const userData = [
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

    const { data } = useSelector((state) => state.usersact.recentusersdata)


    return (
        <>
            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div className=''></div>

                    {
                        data?.map((user, index) => {
                            return (
                                <div key={index} style={ProfileCard} className='inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                    <div className='mt-2 flex justify-between pt-[10px]'>
                                        <ul className='pl-[10px] flex space-x-[10px]'>
                                            <li className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`}>

                                                <MatchScoreModal user={user?.viewerId} />

                                            </li>
                                        </ul>
                                        <ul className='pr-[10px] flex space-x-[30px]'>
                                            <li>
                                                <li>
                                                    <ShortlistUser UserId={(user?.viewerId?.id || user?.viewerId?._id) || ""} />
                                                </li>
                                            </li>
                                            <li>
                                                <ProfileMenu res={user?.viewerId} Section={'recentview'} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='flex justify-center '>
                                        {user?.viewerId?.profilePic ? <>
                                            <Link href={`/longterm/dashboard/${(user?.viewerId?.id || user?.viewerId?._id) || ""}`}>
                                                <Image quality={45} loading='lazy' alt='profile-pic' width={100} height={100} style={{ objectFit: "cover" }} className='hover:opacity-70 duration-150 w-[100px] h-[100px] rounded-[50%]' src={user?.viewerId?.profilePic} />
                                            </Link>
                                        </>
                                            :
                                            <>
                                                <Link href={`/longterm/dashboard/${(user?.viewerId?.id || user?.viewerId?._id) || ""}`}>
                                                    <Avatar name={user?.viewerId?.name} round size='100' className='hover:opacity-70 duration-150' />
                                                </Link>
                                            </>
                                        }
                                    </div>
                                    <div className='text-center'>

                                        <h1 style={ProfileName} className=' text-[#000] dark:text-[#FFF] text-[18px]'>{capitalizeFirstLetter(user?.viewerId?.name)}</h1>
                                        <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{user?.viewerId?.age || "NA"}, {user?.viewerId?.height || "NA"}”</p>
                                        <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{capitalizeFirstLetter(user?.viewerId?.religion) || "NA"}, {capitalizeFirstLetter(user?.viewerId?.caste) || "NA"}</p>
                                        <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{capitalizeFirstLetter(user?.viewerId?.maritalStatus) || "NA"}</p>

                                    </div>
                                    <GridLikeButton userId={(user?.viewerId?.id || user?.viewerId?._id) || ""}
                                        TheUsername={user?.viewerId?.name}
                                        userdata={user?.viewerId} />
                                </div>

                            )

                        })
                    }




                </div >
                
            </div>
        </>
    )
}

export default GridUser