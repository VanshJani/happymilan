import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { Dialog, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { sendRequest } from '../../../../../store/actions/UsersAction';
import { addToShortlist } from '../../../../../store/actions/GetingAlluser';
import RegisterAlertModal from '../../../../_components/Model/Models/RegisterAlertModal';
import ReportModal from '../../../../_components/Model/Models/ReportModal';
import ProfileMenu from '../../../../_components/Model/popover/MenuPop';
import BlockUserModal from "../../../../_components/Model/Models/BlockModal";
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal';
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound';
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize';
const ShareModal = dynamic(() => import('../../../../_components/Model/Models/ShareModal'), { ssr: false });
const ShowMore = dynamic(() => import('../../../../_components/common/profile/UserBio'), { ssr: false });
const SendRequestBtn = dynamic(() => import('../../../../_components/common/Buttons/SendRequestBtn'), { ssr: false });


function RecentViewUser() {

    const { darkMode, toggleDarkMode } = useDarkMode();


    const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false);
    const [isReportModalOpen, setisReportModalOpen] = useState(false);
    const [isBlockModalOpen, setisBlockModalOpen] = useState(false);

    const CloseRegisterModal = () => {
        setisRegisterModalOpen(false);
    };

   
    const closeBlockModal = () => { setisBlockModalOpen(false) }

    

    const CloseReportModal = () => {
        setisReportModalOpen(false);
    };


    const dispatch = useDispatch();


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [sentrequest, setsentRequest] = useState(false);

    const ProfileName = {
        color: darkMode ? "#FFF" : "#000",
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
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */
    }


    const Box = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }


    const Urlmodaltext = {
        color: darkMode ? "#FFF" : "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }

    const [openURLModal, setOpenURLModal] = React.useState(false);

   


    const { data, loading } = useSelector((state) => state.usersact.recentusersdata)


    const [openShortlistModal, setopenShortlistModal] = React.useState(false);

    const [shortlistText, setshortlistText] = useState();


    const HandleRequestModal = (res) => {
        // if (data?.data?.userProfileCompleted) {
        dispatch(sendRequest(res.id));

        setsentRequest((prevState) => ({
            ...prevState,
            [res.id]: !prevState[res.id], // Update the sentRequests state for the specific user ID
        }));

        if (!sentrequest[res.id]) {
            setshortlistText("Request Sent..");
            setopenShortlistModal(true);
        } else {
            setshortlistText("Request Removed..");
            setopenShortlistModal(true);
        }

        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);

    };


    const HandleShortlist = (id) => {
        dispatch(addToShortlist(id)); // Dispatch the action with the shortlist ID

        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);


    };

    const imageFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal",
    };


    return (
        <>
            <div>

                <div className='flex flex-col justify-center items-center'>

                    {

                        data?.map((res, index) => {

                            return (


                                <div className="">
                                    <div
                                        style={Box}
                                        className={`bg-[#FFF] dark:bg-[#242526] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] lg:w-[530px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:h-[270px]  md:w-[400px]`}
                                    >
                                        <div className="w-[350px] 2xl:w-[350px] xl:w-[350px] lg:w-[250px] md:w-[300px]">
                                            <div className="p-[15px] w-full ">
                                                {res?.viewerId?.userProfilePic &&
                                                    res?.viewerId?.userProfilePic.length > 0 ? (
                                                    <Swiper
                                                        pagination={{ clickable: true }}
                                                        modules={[Pagination]}
                                                        className="mySwiper relative 2xl:w-[197px] xl:w-[187px] lg:w-[170px] w-[185px] h-[260px]"
                                                    >
                                                        {res?.viewerId?.userProfilePic
                                                            .slice(0, 3)
                                                            .map((Imageres, theindex) => (
                                                                <SwiperSlide key={theindex}>
                                                                    <Image
                                                                        placeholder="blur"
                                                                        blurDataURL="data:..."
                                                                        alt={`img${theindex + 1}`}
                                                                        width={197}
                                                                        height={258}
                                                                        style={{
                                                                            // width: "197px",
                                                                            // height: "258px",
                                                                            borderRadius: "10px",
                                                                            objectFit: "cover",
                                                                        }}
                                                                        className="2xl:w-[197px] 2xl:h-[258px] xl:w-[197px] xl:h-[258px] lg:w-[180px] lg:h-[240px] w-[180px] h-[240px]"
                                                                        src={Imageres.url}
                                                                        loading="lazy"
                                                                        quality={45}
                                                                    />
                                                                </SwiperSlide>
                                                            ))}
                                                    </Swiper>
                                                ) : (
                                                    <div>
                                                        <div
                                                            style={{
                                                                backgroundColor: "#F8FBFF",
                                                                width: "197px",
                                                                height: "258px",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                borderRadius: "10px"
                                                            }}
                                                        >
                                                            <div className="grid place-items-center space-y-[5px]">
                                                                <Image
                                                                    alt="not-Found"
                                                                    width={34}
                                                                    height={34}
                                                                    loading="lazy"
                                                                    quality={25}
                                                                    src={"/assests/dashboard/icon/NotFound-img.svg"}
                                                                />
                                                                <h1
                                                                    className="inline"
                                                                    style={imageFoundText}
                                                                >
                                                                    No Image
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]">
                                            <div className="flex justify-between">
                                                <div className="w-[50%] ">
                                                    <h1
                                                        onClick={() => HandlePushUser(res?.viewerId?._id || res?.viewerId?.id)}
                                                        className="2xl:text-[18px] xl:text-[15px] text-[10px] cursor-pointer text-[#000] dark:text-[#FFF] hover:opacity-75 duration-100 break-words"
                                                        style={ProfileName}
                                                    >
                                                        {capitalizeFirstLetter(res?.viewerId?.name)}
                                                    </h1>
                                                    <h1
                                                        style={statusText}
                                                        className="text-[#17C270] break-words"
                                                    >
                                                        {res?.viewerId?.isUserActive ?
                                                            <span className="text-[9px] text-[#0091FF]">Online now</span>
                                                            :
                                                            <span className="text-[9px] text-[#a6a6a6]">Offline</span>
                                                        }
                                                    </h1>
                                                </div>

                                                <div className="pr-[8px]">
                                                    <ul className='flex justify-evenly space-x-[10px] pr-[10px] pt-[10px]'>

                                                        <li className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] flex space-x-[10px] top-[-8px] p-[5px] relative left-[5px]`}>

                                                            <MatchScoreModal user={res?.viewerId} />

                                                        </li>


                                                        <li
                                                            className="cursor-pointer"
                                                            onClick={() => HandleShortlist(res?.viewerId?._id || res?.viewerId?.id)}
                                                        >
                                                            <div className="cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838] p-[5px] rounded-[50%] relative top-[-5px]">
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
                                                            <ProfileMenu res={res?.viewerId} />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]">
                                                <div id="user-card">
                                                    <ul id="user-card-grid">
                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            <Image
                                                                loading="lazy"
                                                                alt="mark"
                                                                width={15}
                                                                height={14}
                                                                src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                className="inline pr-[5px]"
                                                            />
                                                            {`NA,${res?.viewerId?.height}`}
                                                        </li>

                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            {res?.viewerId?.maritalStatus ?
                                                                <>
                                                                    <Image
                                                                        loading="lazy"
                                                                        alt="mark"
                                                                        width={15}
                                                                        height={14}
                                                                        src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                        className="inline pr-[5px]"
                                                                    />
                                                                    {res?.viewerId?.maritalStatus ? capitalizeFirstLetter(res?.viewerId?.maritalStatus) : "NA , NA"}
                                                                </>
                                                                : ""}
                                                        </li>

                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            {res?.viewerId?.religion ?
                                                                <>
                                                                    <Image
                                                                        loading="lazy"
                                                                        alt="mark"
                                                                        width={15}
                                                                        height={14}
                                                                        src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                        className="inline pr-[5px]"
                                                                    />
                                                                    {`${res?.viewerId?.religion ? capitalizeFirstLetter(res?.viewerId?.religion) : "NA"}, ${res?.viewerId?.cast ? capitalizeFirstLetter(res?.viewerId?.cast) : "NA"}`}
                                                                </>
                                                                : ""}
                                                        </li>


                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            {res?.viewerId?.address ?
                                                                <>
                                                                    <Image
                                                                        loading="lazy"
                                                                        alt="mark"
                                                                        width={15}
                                                                        height={14}
                                                                        src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                        className="inline pr-[5px]"
                                                                    />
                                                                    {`${res?.viewerId?.address ? capitalizeFirstLetter(res?.viewerId?.address?.currentCity) : "NA"} , ${res?.viewerId?.address ? capitalizeFirstLetter(res?.viewerId?.address?.currentCountry) : "NA"}`}
                                                                </>
                                                                : ""}
                                                        </li>


                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            {res?.viewerId?.motherTongue ?
                                                                <>
                                                                    <Image
                                                                        loading="lazy"
                                                                        alt="mark"
                                                                        width={15}
                                                                        height={14}
                                                                        src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                        className="inline pr-[5px]"
                                                                    />
                                                                    {`${res?.viewerId?.motherTongue ? capitalizeFirstLetter(res?.viewerId?.motherTongue) : "NA , NA"}  `}
                                                                </>
                                                                : ""}
                                                        </li>

                                                        <li
                                                            className="text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]"
                                                            style={ListText}
                                                        >
                                                            {res?.viewerId?.userProfessional ?
                                                                <>
                                                                    <Image
                                                                        loading="lazy"
                                                                        alt="mark"
                                                                        width={15}
                                                                        height={14}
                                                                        src={darkMode ? "/assests/Black/RightTickWhite.svg" : "/assests/Black/RightTick.svg"}
                                                                        className="inline pr-[5px]"
                                                                    />
                                                                    {res?.viewerId?.userProfessional ? capitalizeFirstLetter(res?.viewerId?.userProfessional.jobTitle) : "NA , NA"}
                                                                </>
                                                                : ""}
                                                        </li>

                                                    </ul>
                                                </div>
                                                <div className="mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]">

                                                    <ShowMore userid={res?.viewerId?._id || res?.viewerId?.id} text={res?.viewerId?.writeBoutYourSelf} maxLength={100} />
                                                </div>
                                            </div>

                                            <div className="absolute right-0 bottom-[18px]">
                                                <SendRequestBtn
                                                    userdata={res?.viewerId?.name}
                                                    // Requeststatus={res?.friendsDetails}
                                                    RequestId={sentrequest[res?.viewerId?._id || res?.viewerId?.id]}
                                                    HandleRequestModal={() => HandleRequestModal(res?.viewerId)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
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

            <ProfileDataNotFound ProfileData={data} />

            <RegisterAlertModal
                title={""}
                isOpen={isRegisterModalOpen}
                onClose={CloseRegisterModal}
            />
            <ReportModal
                title={"helo"}
                isOpen={isReportModalOpen}
                onClose={CloseReportModal}
            />

            <BlockUserModal
                isOpen={isBlockModalOpen}
                onClose={closeBlockModal}
            />

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
        </>
    )
}

export default RecentViewUser