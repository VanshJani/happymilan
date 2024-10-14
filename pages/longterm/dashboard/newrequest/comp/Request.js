import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { Dialog } from '@mui/material';
import UserprofileSkeleton from '../../../../../components/common/shader/UserprofileSkeleton';
import { acceptRequest, getFriendsList, rejectRequest } from '../../../../../store/actions/UsersAction';
import { useDispatch, useSelector } from 'react-redux';
import { addToShortlist } from '../../../../../store/actions/GetingAlluser';
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal';
import ShowMore from '../../../../_components/common/profile/UserBio';
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu';
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound';


function Request() {

    const { data, loading } = useSelector((state) => state.usersact.requestdata)

    const HandleShortlist = (id) => {
        dispatch(addToShortlist(id)); // Dispatch the action with the shortlist ID

        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);

    };

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

    const ListText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */
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

    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }

    const [openShortlistModal, setopenShortlistModal] = React.useState(false)

    const [shortlistText, setshortlistText] = useState();

    const dispatch = useDispatch();
    const HanldeAccept = (res) => {

        dispatch(acceptRequest(res))
        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(getFriendsList());

        }, 800);

    }

    const HanldeReject = (res) => {
        dispatch(rejectRequest(res));

        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(getFriendsList());
        }, 800);

    }

    const [hoveredProfile, setHoveredProfile] = useState(null);
    const [hoveredRejectButton, sethoveredRejectButton] = useState(null);


    if (loading) {
        return <UserprofileSkeleton />
    }
    return (
        <>

            <div>

                <div className='flex flex-col'>

                    {data && data.data && data.data.map((res, index) => {
                        return (
                            <div key={index} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                <div style={Box} className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                    <div className='w-[350px]'>
                                        <div className='p-[15px] w-full'>
                                            <Swiper

                                                pagination={{ clickable: true }}
                                                modules={[Pagination]}
                                                className="mySwiper relative 2xl:w-[197px] xl:w-[185px] w-[185px] h-[260px]"
                                            >
                                                {res?.user?.userProfilePic
                                                    ?.slice(0, 3)
                                                    .map((Imageres, theindex) => (
                                                        <SwiperSlide key={theindex}>
                                                            <Image
                                                                alt={`img${theindex + 1}`}
                                                                // onClick={HandleShow}
                                                                width={197} height={258}
                                                                className='w-[197px] h-[258px]'
                                                                src={Imageres?.url}
                                                                style={{ borderRadius: "10px", objectFit: "cover" }}
                                                                loading="lazy"
                                                                quality={45}
                                                            />
                                                        </SwiperSlide>
                                                    ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                        <div className='flex justify-between  h-[50px]'>
                                            <div>
                                                <h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={ProfileName}>{res.user?.name}</h1>
                                                <h1 style={statusText} className={`text-[#17C270]`}>Online now</h1>
                                            </div>
                                            <div className='pr-[8px]'>
                                                <ul className='flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]'>

                                                    <li className="cursor-pointer hover:bg-[#F2F7FF] items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]">

                                                        <MatchScoreModal user={res?.user} />

                                                    </li>
                                                    <li>
                                                        <div onClick={() => HandleShortlist(res.user.id)} className="cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]">
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
                                                        <ProfileMenu res={res?.user} />
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                            <div id="user-card">
                                                <ul id="user-card-grid">
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' /> {`${res?.user?.age ?? "NA"}, ${res?.user?.height ?? "NA"}`}</li>
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.user?.maritalStatus ?? "NA"}`}</li>
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.user?.religion ?? "NA"}, ${res?.user?.cast ?? "NA"}`}</li>
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.user?.address?.currentCity ?? "NA"}, ${res?.user?.address?.currentCountry ?? "NA"}`}</li>
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.user?.motherTongue ?? "NA"}`}</li>
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.user?.userProfessional?.jobTitle ?? "NA"}`}</li>
                                                </ul>
                                            </div>
                                            <div className="mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]">
                                                <ShowMore userid={res?.user?._id || res?.user?.id} text={res?.user?.writeBoutYourSelf} maxLength={100} />
                                            </div>
                                        </div>
                                        <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] lg:mt-0 mr-[20px] space-x-[10px]'>
                                            <h1 className='text-[16px] 2xl:text-[16px] xl:text-[14px]' style={BoldText}>Want to accept?</h1>
                                            <div className='flex space-x-[21px]'>
                                                <div onClick={() => HanldeAccept(res)}
                                                    onMouseEnter={() => setHoveredProfile(index)}
                                                    onMouseLeave={() => setHoveredProfile(null)}
                                                    className={`${hoveredProfile === index ? "bg-custom-gradient" : ""}  cursor-pointer w-[40px]  h-[40px] grid place-items-center rounded-full border-[1px] border-[#0F52BA]`}>
                                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.65147 12L0 6.34853L0.637477 5.73308L5.65147 10.747L16.3765 0L17.014 0.637506L5.65147 12Z" fill={hoveredProfile === index ? "white" : "black"} />
                                                    </svg>
                                                </div>
                                                <div
                                                    onClick={() => HanldeReject(res)}
                                                    onMouseEnter={() => sethoveredRejectButton(index)}
                                                    onMouseLeave={() => sethoveredRejectButton(null)}
                                                    className={`${hoveredRejectButton === index ? "bg-custom-gradient" : ""} w-[40px] h-[40px] grid place-items-center rounded-full border-[1px] border-[#0F52BA]`}>
                                                    <svg className='SVG-hover' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.529793 12L0 11.4702L5.47021 6L0 0.529793L0.529793 0L6 5.47021L11.4702 0L12 0.529793L6.52979 6L12 11.4702L11.4702 12L6 6.52979L0.529793 12Z" fill={hoveredRejectButton === index ? "white" : "black"} />
                                                    </svg>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

            <React.Fragment>
                <Dialog
                    open={openShortlistModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        style: {
                            backgroundColor: "transparent", // or 'none' if you prefer
                            boxShadow: "none",
                        },
                    }}
                    BackdropProps={{
                        style: { opacity: 0, backgroundColor: "none", boxShadow: "none" },
                    }}
                >
                    <div
                        style={{ padding: "17px 19px 17px 20px" }}
                        className="bg-[#333333] w-[249px] rounded-[100px] text-center grid place-items-center"
                    >
                        <div className="text-[14px]" style={Urlmodaltext}>
                            <span className="text-[#fff]"> {shortlistText}</span>
                        </div>
                    </div>
                </Dialog>
            </React.Fragment>

            <ProfileDataNotFound ProfileData={data?.data} />

        </>
    )
}

export default Request