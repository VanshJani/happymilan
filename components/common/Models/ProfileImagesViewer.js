import { Box, Modal } from '@mui/material'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { EffectFade, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useSelector } from 'react-redux';
import UploadImage from '../../../pages/longterm/dashboard/commonCompo/HandeImageUpload/UploadImage';
// import 'swiper/css/pagination';

function ProfileImagesViewer() {

    const { data } = useSelector((state) => state.myprofile);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        outline: "none",
        borderRadius: "10px",
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
    };


    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }

    const [CurrImage, setCurrImage] = useState()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setCurrImage(0)
    };



    const ImagesSlider = [
        {
            id: 1,
            URL: "https://images.unsplash.com/photo-1723764881665-5b40cea01c9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            URL: "https://plus.unsplash.com/premium_photo-1669740214190-1e7b7a05c44c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            URL: "https://plus.unsplash.com/premium_photo-1669740216517-94f3860b1d6a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            URL: "https://plus.unsplash.com/premium_photo-1669740217737-611345f9d246?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]



    useEffect(() => {
        console.log("CurrentImage", CurrImage)
        console.log("Length", data?.userProfilePic?.length)
    }, [CurrImage, setCurrImage])


    const [openUpload, setOpenUpload] = React.useState(false);



    const handleClickOpenUpload = (res) => {
        // console.log("<== Image Response ==>", res)
        if (data.userProfilePic.length > 5) {
            alert("You have reached the maximum limit of 5 images. If you want to upload a new image, please delete one of your current images.");
        } else {
            // alert("Image Not More");
            setOpenUpload(true);
        }

    };

    const handleCloseUpload = () => {
        setOpenUpload(false);
    };


    return (
        <>
            <div className='2xl:w-[300px] xl:w-[250px] 2xl:h-[381px] xl:h-[350px] fixed 2xl:top-[110px] xl:top-[95px] right-10  2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full'>
                {data?.userProfilePic?.length > 0 ? (
                    <Swiper
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper 2xl:w-[300px] xl:w-[250px] 2xl:h-[381px] xl:h-[350px] rounded-[10px]"
                    >

                        {

                            data?.userProfilePic?.map((res, index) => (
                                <SwiperSlide key={index}>
                                    {/* <div className='right-[10px] mt-[10px] z-[10] absolute'>
                                        <Image loading='lazy' onClick={() => handleClickDeleteImageModal(res)} alt='delete' width={24} height={24} src="/assests/dashboard/icon/Trash-icon.svg" />
                                    </div>
                                    <img style={imageStyle} onClick={() => handleClickOpen(res, index)} alt='user-images' className='space-x-[10px] rounded-[10px] h-[381px] w-[300px] cursor-pointer' src={res?.url} /> */}
                                    <Image loading="lazy" onClick={handleOpen} width={300} height={381} className='2xl:w-[300px] xl:w-[250px] 2xl:h-[381px] xl:h-[350px]' alt='image' src={res?.url} />

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                ) : (
                    <div style={{ backgroundColor: "#F8FBFF" }} className='h-[381px] w-[300px] grid place-items-center'>
                        <div className='grid place-items-center space-y-[5px]'>
                            <Image loading='lazy' alt='no-found' width={34} height={34} src={"/assests/dashboard/icon/Photo-NotFound.svg"} />
                            <h1 className='inline' style={ImageNotFoundText}>No Photos Found</h1>
                        </div>
                    </div>
                )
                }
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='w-[767px] h-[520px] space-y-[26px]'>

                        <ul className='flex justify-evenly items-center'>
                            <li className='w-[42px] h-[42px] rounded-full'>
                                <Image id='custom-prev-button' className={CurrImage === 0 ? 'transform scale-x-[-1] opacity-50' : 'transform scale-x-[-1] hover:opacity-50 duration-150 cursor-pointer'} width={42} height={42} src={"/assests/icons/arrow-btn.svg"} />
                            </li>
                            <li className=''>
                                <Swiper
                                    spaceBetween={30}
                                    effect={'fade'}
                                    navigation={{
                                        prevEl: "#custom-prev-button",
                                        nextEl: "#custom-next-button",
                                    }}
                                    onSlideChange={(swiper) => setCurrImage(swiper.activeIndex)}
                                    modules={[EffectFade, Navigation, Pagination]}
                                    className="mySwiper w-[332px] h-[449px]"
                                >
                                    {
                                        data?.userProfilePic?.map((res, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <Image loading="lazy" quality={50} width={300} height={381} className='w-[332px] h-[449px]' style={{ width: "332px", height: "449px", objectFit: "cover", borderRadius: "10px" }} alt='image' src={res?.url} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </li>
                            <li className='w-[42px] h-[42px] rounded-full'>
                                <Image id='custom-next-button' className={CurrImage == data?.userProfilePic?.length - 1 ? 'opacity-50' : 'hover:opacity-50  cursor-pointer duration-150'} width={42} height={42} src={"/assests/icons/arrow-btn.svg"} />
                            </li>
                        </ul>

                        <ul className='flex space-x-[27px] justify-center'>
                            {
                                data?.userProfilePic?.map((res, index) => {
                                    return (
                                        <li key={index} className={`${CurrImage === index ? "border-[2px] border-[#8225AF]" : "border-[2px]"} rounded-[10px]`}>
                                            <Image loading='lazy' quality={40} width={50} height={50} style={{ objectFit: "cover", width: "60px", height: "60px", borderRadius: "10px" }} src={res?.url} />
                                        </li>
                                    )
                                })
                            }
                            {
                                data?.userProfilePic?.length < 6 && (
                                    <li onClick={handleClickOpenUpload} className='grid place-items-center w-[60px] h-[60px] rounded-[10px] bg-[#F1F1F1] cursor-pointer duration-150 hover:bg-[#ededed]'>
                                        <Image width={20} height={18} alt='camera' src={"/assests/profile/before-imageupload-icon.svg"} />
                                    </li>
                                )

                            }


                        </ul>

                    </div>
                </Box>
            </Modal>

            <UploadImage openUpload={openUpload}
                handleCloseUpload={handleCloseUpload} />
        </>
    )
}

export default ProfileImagesViewer