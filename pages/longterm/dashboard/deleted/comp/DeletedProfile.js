import React, { useState } from 'react'

import Popover from '@mui/material/Popover';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import ShareModal from '../../../../_components/Model/Models/ShareModal';
import { Dialog, DialogContent } from '@mui/material';
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu';


function DeletedProfile() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const [blockprofile, setblockprofile] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        handleClose();
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const userData = [
        {
            id: 1,
            userName: "Kabir Singh",
            profilePic: "/assests/dashboard/delete/deleted-1.svg",
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
                image1: "/assests/dashboard/delete/deleted-1.svg",
                image2: "/assests/dashboard/delete/deleted-2.svg",
                image3: "/assests/dashboard/delete/deleted-3.svg",
                image4: ""
            }
        },
        {
            id: 2,
            userName: "Rohan Desai",
            profilePic: "/assests/dashboard/delete/deleted-2.svg",
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
                image1: "/assests/dashboard/delete/deleted-2.svg",
                image2: "/assests/dashboard/delete/deleted-3.svg",
                image3: "/assests/dashboard/delete/deleted-1.svg",
                image4: ""
            }
        },
        {
            id: 3,
            userName: "Vivaan Reddy",
            profilePic: "/assests/dashboard/delete/deleted-3.svg",
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
                image1: "/assests/dashboard/delete/deleted-3.svg",
                image2: "/assests/dashboard/delete/deleted-2.svg",
                image3: "/assests/dashboard/delete/deleted-1.svg",
                image4: ""
            }
        }
    ]

    const BoldText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }
    const ProfileName = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }
    const statusText = {

        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    }
    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const ListText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */
    }

    const Text4 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    }

    const Box = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }
    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const [openURLModal, setOpenURLModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpenURLModal(true);


        setTimeout(() => {
            setOpenURLModal(false);
            handleClose()
        }, 2000);
    };

    return (
        <>
            <div>

                <div className='flex flex-col'>

                    {

                        userData.map((res) => {
                            const { images } = res
                            return (
                                <>


                                    <div key={res.id} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                        <div style={Box} className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                            <div className='w-[350px]'>
                                                <div className='p-[15px] w-full '>
                                                    <Swiper

                                                        pagination={{ clickable: true }}
                                                        modules={[Pagination]}
                                                        className="mySwiper relative 2xl:w-[197px] xl:w-[185px] w-[185px] h-[260px]"
                                                    >
                                                        <SwiperSlide>
                                                            <Image width={197} height={258} className='w-[197px] h-[258px]' src={images.image1} />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <Image width={197} height={258} className='w-[197px] h-[258px]' src={images.image2} />
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <Image width={197} height={258} className='w-[197px] h-[258px]' src={images.image3} />
                                                        </SwiperSlide>
                                                    </Swiper>
                                                </div>
                                            </div>
                                            <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                <div className='flex justify-between  h-[50px]'>
                                                    <div>
                                                        <h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={ProfileName}>{res.userName}</h1>
                                                        <h1 style={statusText} className={res.Activestatus ? `text-[#17C270]` : `text-[#7A7A7A]`}>{res.Activestatus ? "Online now" : "Offline"}</h1>
                                                    </div>
                                                    <div className='pr-[8px]'>
                                                        <ul className='flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]'>
                                                            <li className="cursor-pointer hover:bg-[#F2F7FF] items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]">
                                                                <div>
                                                                    <Image
                                                                        loading="lazy"
                                                                        alt="couple-icon"
                                                                        width={17}
                                                                        height={14}
                                                                        src="/assests/Black/Couple2.svg"

                                                                    />
                                                                </div>
                                                                <div className="">
                                                                    <span className="relative top-[-2px] text-[10px] text-[#000] dark:text-[#FFF]"
                                                                        style={Text4}>
                                                                        Match Score
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]">
                                                                    <Image
                                                                        loading="lazy"
                                                                        width={15}
                                                                        height={14}
                                                                        alt="star"
                                                                        src={"/assests/Black/Stars-2.svg"}
                                                                    />
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <ProfileMenu res={res} Section={'delete'} />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                                    <div id="user-card">
                                                        <ul id="user-card-grid">
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.height}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.cast}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.language}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.marriagestatus}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.location}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res.personal.profession}</li>
                                                        </ul>
                                                    </div>
                                                    <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                        <p style={Text3} className='text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] '>{res.description}<span className='text-[#0F52BA]'> more </span></p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end items-center mt-[20px] lg:mt-0 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]'>
                                                    <ul className='flex space-x-[10px]'>
                                                        <li><h1 className='text-[16px] 2xl:text-[16px] xl:text-[14px]' style={BoldText}>This is no more longer</h1></li>
                                                        <li>
                                                            <Image width={20} height={23} src='/assests/Black/trash-2.svg' />

                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>

                                    </div>



                                </>
                            )
                        })

                    }


                </div>

            </div>

            <ShareModal isOpen={isModalOpen} onClose={closeModal} />

            <React.Fragment>
                <Dialog
                    open={openURLModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent className='w-[249px] h-[81px] text-center grid place-items-center'>
                        <div className='text-[14px]' style={Urlmodaltext}>
                            URL has been copied
                        </div>
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        </>
    )
}

export default DeletedProfile