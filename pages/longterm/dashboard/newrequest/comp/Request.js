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

    const [openShortlistModal, setopenShortlistModal] = React.useState(false)

    const [shortlistText, setshortlistText] = useState();

    const dispatch = useDispatch();
    const HanldeAccept = (res) => {

        dispatch(acceptRequest("long-term", res))
        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(getFriendsList());

        }, 800);

    }

    const HanldeReject = (res) => {
        console.log("🚀 ~ HanldeReject ~ res:", res)
        dispatch(rejectRequest("long-term", res));

        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(getFriendsList());
        }, 800);

    }



    if (loading) {
        return <UserprofileSkeleton />
    }
    return (
        <>

            <div>

                <div className='flex flex-col'>

                    {data && data.data && data.data?.results.map((res, index) => {
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
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' /> {`${res?.user?.age || "NA"}, ${res?.user?.height || "NA"}`}</li>
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.user?.maritalStatus || "NA"}`}</li>
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.user?.religion || "NA"}, ${res?.user?.caste || "NA"}`}</li>
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.user?.address?.currentCity || "NA"}, ${res?.user?.address?.currentCountry || "NA"}`}</li>
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.user?.motherTongue || "NA"}`}</li>
                                                    <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={ListText}><Image alt='img' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.user?.userProfessional?.jobTitle || "NA"}`}</li>
                                                </ul>
                                            </div>
                                            <div className="mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]">
                                                <ShowMore userid={res?.user?._id || res?.user?.id} text={res?.user?.writeBoutYourSelf} maxLength={100} />
                                            </div>
                                        </div>
                                        <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] lg:mt-0 mr-[20px] space-x-[10px]'>
                                            <h1 className='text-[16px] 2xl:text-[16px] xl:text-[14px]' style={BoldText}>Want to accept?</h1>
                                            <div className='flex space-x-[21px]'>

                                                <div onClick={() => HanldeAccept(res)} id='accept-request' className='rounded-full border-[1px] border-[#17C270] w-[63px] h-[44px] grid place-items-center'>
                                                    <svg className='accept-icon-dt' width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.15225 13.4522L0 7.29998L1.8915 5.40873L6.15225 9.66948L15.313 0.508728L17.2045 2.39998L6.15225 13.4522Z" />
                                                    </svg>

                                                </div>

                                                <div onClick={() => HanldeReject(res)} className='w-[63px] h-[44px] grid place-items-center' id='cancel-dating'>
                                                    <svg className='cancel-icon-dt' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path id="Vector" d="M1.85225 14.9045L0 13.0523L5.6 7.45225L0 1.85225L1.85225 0L7.45225 5.6L13.0522 0L14.9045 1.85225L9.3045 7.45225L14.9045 13.0523L13.0522 14.9045L7.45225 9.3045L1.85225 14.9045Z" />
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

            <ProfileDataNotFound ProfileData={data?.data?.results} />

        </>
    )
}

export default Request