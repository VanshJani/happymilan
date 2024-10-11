import React, { useEffect, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import UserprofileSkeleton from '../../../../../components/common/shader/UserprofileSkeleton';
import Link from 'next/link';
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize';
import { fetchFriends } from '../../../../../store/matrimoney-services/slices/UserSentRequestPagination';
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu';
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound';

function SentRequest() {

    const profileStyles = useMemo(() => ({
        BoldText: {
            color: "#000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal"
        },

        ProfileName: {
            color: "#000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal"
        },

        statusText: {
            fontFamily: "Poppins",
            fontSize: "8px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "12px"
        },

        Text3: {
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        },

        ListText: {
            color: "#000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px"
        },

        Text4: {
            color: "#000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "12px"
        },

        Box: {
            borderRadius: "10px",
            background: "#FFF",
            boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
        },

        Urlmodaltext: {
            color: "#000",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal"
        },

        ImageNotFoundText: {
            color: "#B3CBF1",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal"
        }
    }), []);


    const dispatch = useDispatch();
    const { userData, status } = useSelector(state => state.getsentrequestdata);

    useEffect(() => {
        // Initial fetch
        dispatch(fetchFriends('ListView', { currentPage: 1 }));
    }, [dispatch]);

    if (status == "loading") {
        return (
            <>
                <UserprofileSkeleton />
            </>
        )
    }

    return (
        <>

            <div className=''>

                <div className='flex flex-col'>
                    {
                        userData?.map((res, index) => {
                            return (
                                <>

                                    <div key={index} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                        <div style={profileStyles?.Box} className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                            <div className='w-[350px]'>
                                                <div className='p-[15px] w-full '>
                                                    {res?.friend?.userProfilePic && res?.friend?.userProfilePic.length > 0 ? (
                                                        <Swiper

                                                            pagination={{ clickable: true }}
                                                            modules={[Pagination]}
                                                            className="mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]"
                                                        >
                                                            {res?.friend?.userProfilePic.slice(0, 3).map((Imageres, theindex) => (

                                                                <SwiperSlide key={theindex}>
                                                                    <Image placeholder="blur" blurDataURL="data:..." alt={`img${theindex + 1}`} width={197} height={258} style={{ width: "197px", height: "258px", borderRadius: "10px", objectFit: "cover" }} className='w-[197px] h-[258px]' src={Imageres.url} loading="lazy" />
                                                                </SwiperSlide>

                                                            ))}
                                                        </Swiper>
                                                    ) : (
                                                        <div>
                                                            <div style={{ backgroundColor: "#F8FBFF", width: "197px", height: "258px", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                                <div className='grid place-items-center space-y-[5px]'>
                                                                    <Image alt='not-Found' width={34} height={34} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                                                                    <h1 className='inline' style={profileStyles?.ImageNotFoundText}>No Image</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                </div>
                                            </div>
                                            <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                <div className='flex justify-between  h-[50px]'>
                                                    <div>
                                                        <Link href={`/longterm/dashboard/${res.id || res?._id}`} ><h1 className='2xl:text-[20px] xl:text-[15px] text-[15px]' style={profileStyles?.ProfileName}>{res?.friend?.name}</h1></Link>
                                                        <h1 style={profileStyles?.statusText} className={`text-[#7A7A7A]`}>{"Online now"}</h1>
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
                                                                        style={profileStyles?.Text4}>
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
                                                                <ProfileMenu res={res?.friend} Section={'sent'} />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                                    <div id="user-card">
                                                        <ul id="user-card-grid">
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={profileStyles?.ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`'32,5'3`}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={profileStyles?.ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{`${res?.friend?.religion || 'NA'}, ${res?.friend?.cast || 'NA'}`}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={profileStyles?.ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res?.friend?.motherTongue || "NA , NA"}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={profileStyles?.ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />{res?.friend?.maritalStatus || "NA , NA"}</li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={profileStyles?.ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />
                                                                {capitalizeFirstLetter(res?.friend?.address?.currentCity) || "NA"} , {capitalizeFirstLetter(res?.friend?.address?.currentCountry) || "NA"}

                                                            </li>
                                                            <li className='text-[14px] 2xl:text-[14px] xl:text-[13px]' style={profileStyles?.ListText}><Image alt='mark' width={15} height={14} src='/assests/Black/RightTick.svg' className='inline pr-[5px]' />
                                                                {capitalizeFirstLetter(res?.friend?.userProfessional?.jobTitle) || "NA , NA"}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                        <p style={profileStyles?.Text3} className='text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] '>{res?.friend?.writeBoutYourSelf || "NA"}<span className='text-[#0F52BA]'> more </span></p>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]'>
                                                    <ul className='absolute  bottom-[40px] flex space-x-[10px]'>
                                                        <li><h1 className='text-[16px] 2xl:text-[16px] xl:text-[14px]' style={profileStyles?.BoldText}>Sent</h1></li>
                                                        <li><Image alt='img' width={23} height={23} src='/assests/dashboard/icon/accepted-right.svg' /></li>
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
            <ProfileDataNotFound ProfileData={userData} />
        </>
    )
}

export default SentRequest