import React, { useEffect, useState } from 'react'
import styles from '../../../../../styles/styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';
import { Dialog } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAcceptedRequestData } from '../../../../../store/actions/UsersAction';
import index from '../../profile';
import UserprofileSkeleton from '../../../../../components/common/shader/UserprofileSkeleton';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
import dynamic from 'next/dynamic';
const ShareModal = dynamic(() => import('../../../../_components/Model/Models/ShareModal'))
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext';
import { addToShortlist } from '../../../../../store/actions/GetingAlluser';
import CancelRequestModal from '../../../../_components/Model/Models/CancelRequestModal';
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu';
import ShortlistUser from '../../../../_components/common/Buttons/ShortlistUser';

const ShowMore = dynamic(() => import('../../../../_components/common/profile/UserBio'), { ssr: false });
const MatchScoreModal = dynamic(() => import('../../../../_components/Model/Models/MatchScoreModal'), { ssr: false });
// const ProfileMenu = dynamic(() => import('../../../../_components/Model/popover/MenuPop'), { ssr: false });
const RegisterAlertModal = dynamic(() => import('../../../../_components/Model/Models/RegisterAlertModal'), { ssr: false });
const ReportModal = dynamic(() => import('../../../../_components/Model/Models/ReportModal'), { ssr: false });
const BlockUserModal = dynamic(() => import('../../../../_components/Model/Models/BlockModal'), { ssr: false });


function AcceptedRequest() {
    const { darkMode } = useDarkMode();

    const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false);
    const [isReportModalOpen, setisReportModalOpen] = useState(false);
    const [isBlockModalOpen, setisBlockModalOpen] = useState(false);
    const [isCancelModalOpen, setisCancelModalOpen] = useState(false);
    const [Data, setData] = useState("");
    const [openShortlistModal, setopenShortlistModal] = React.useState(false)
    const [shortlistText, setshortlistText] = useState();

    const CloseRegisterModal = () => {
        setisRegisterModalOpen(false);
    };

    const closeBlockModal = () => { setisBlockModalOpen(false) }

    const openCancelModal = () => {
        // setData(res)
        setisCancelModalOpen(true);
    }
    const closeCancelModal = () => { setisCancelModalOpen(false) }


    const CloseReportModal = () => {
        setisReportModalOpen(false);
    };


    const HandleShortlist = (id) => {
        dispatch(addToShortlist(id)); // Dispatch the action with the shortlist ID

        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);

    };

    const [isModalOpen, setIsModalOpen] = useState(false);



    const closeModal = () => {
        setIsModalOpen(false);
    };

    const statusText = {
        fontFamily: "Poppins",
        fontSize: "8px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
    }


    const ListText = {
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
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }



    const dispatch = useDispatch();

    const data = useSelector((state) => state.usersact?.acceptedrequestdata)

    const [page, setpage] = useState(1);

    useEffect(() => {
        dispatch(getAcceptedRequestData("listview", page));
    }, [])

    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }


    const [CurrURL, SetCurURL] = useState("")

    const [Cancelusersdata, Setcancelusersdata] = useState({
        currUser: "",
        OtherUser: ""

    })

    const HandleCancelRequest = (res, id) => {

        Setcancelusersdata({
            currUser: res?.id,
            OtherUser: res?.lastInitiatorUser
        })
        openCancelModal();
    }

    if (data?.data?.loading == true) {
        return (
            <>
                <UserprofileSkeleton />
            </>
        )
    }



    return (
        <>
            {data?.data?.results && data?.data?.results?.length > 0 ? <>
                <div>

                    <div className='flex flex-col'>

                        {


                            data?.data?.results?.map((res) => {

                                return (
                                    <>
                                        <div key={index} className="relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]">
                                            <div style={Box} className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}>
                                                <div className='w-[350px]'>
                                                    <div className='p-[15px] w-full '>
                                                        <Swiper
                                                            pagination={{ clickable: true }}
                                                            modules={[Pagination]}
                                                            className="mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]"
                                                        >
                                                            <SwiperSlide>
                                                                <Image alt={`profile`} width={197} height={258} style={{ width: "197px", height: "258px", borderRadius: "10px", objectFit: "cover" }} className='w-[197px] h-[258px]' src={res?.friendList?.profilePic ? res?.friendList?.profilePic : ""} loading="lazy" />
                                                            </SwiperSlide>

                                                        </Swiper>

                                                    </div>
                                                </div>
                                                <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                                                    <div className='flex justify-between  h-[50px]'>
                                                        <div>
                                                            <Link href={`/longterm/dashboard/${res.id}`} ><h1 className={`${styles.ProfileName} text-[#000] dark:text-[#FFF] 2xl:text-[20px] xl:text-[15px] text-[15px]`}>{res?.friendList?.name}</h1></Link>
                                                            <h1 style={statusText} className={`text-[#7A7A7A]`}>Online now</h1>
                                                        </div>
                                                        <div className='pr-[8px]'>
                                                            <ul className='flex justify-evenly space-x-[25px] pr-[10px] pt-[10px]'>
                                                                <li className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[10px] flex space-x-[10px] top-[-12px] relative left-[5px]`}>
                                                                    <MatchScoreModal user={res?.friendList} />
                                                                </li>
                                                                <li className='cursor-pointer'>
                                                                    <ShortlistUser UserId={res?.friendList?.id || res?.friendList?._id} />
                                                                </li>
                                                                <li>
                                                                    {/* <ProfileMenu HandleCancelRequest={() => HandleCancelRequest(res, res?.friendList?.id || res?.friendList?._id)} MenuTitle={"accepted"} SetCurURL={SetCurURL} openBlockModal={openBlockModal} OpenReportModal={OpenReportModal} openModal={openModal} res={res} /> */}
                                                                    <ProfileMenu accepteddata={res} res={res?.friendList} Section={'accepted'} />

                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                                                        <div id="user-card">
                                                            <ul id="user-card-grid">
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    32, 5'3
                                                                </li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    {res?.friendList?.religion ? res?.friendList?.religion : 'NA'}, {res?.friendList?.cast ? res?.friendList?.cast : 'NA'}
                                                                </li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    {res?.friendList?.motherTongue ? res.friendList.motherTongue : "NA, NA"}
                                                                </li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    {res?.friendList?.maritalStatus ? res.friendList.maritalStatus : "NA, NA"}
                                                                </li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    {res?.friendList?.address ? res?.friendList?.address?.currentCity : "NA"}, {res?.friendList?.address ? res.friendList.address.currentCountry : "NA"}
                                                                </li>
                                                                <li className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]' style={ListText}>
                                                                    <Image loading='lazy' alt='mark' width={15} height={14} src={darkMode ? "/assests/Black/RightTickWhite.svg" : '/assests/Black/RightTick.svg'} className='inline pr-[5px]' />
                                                                    {res?.friendList?.userProfessional ? res?.friendList?.userProfessional?.jobTitle : "NA, NA"}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                                                            <ShowMore userid={res?.friendList?.id || res?.friendList?._id} text={(res?.friendList?.writeBoutYourSelf ? res?.friendList?.writeBoutYourSelf : "NA")} maxLength={100} />
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]'>
                                                        <ul className='flex space-x-[10px]'>
                                                            <li><h1 className={`${styles.BoldText} text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]`}>Accepted</h1></li>
                                                            <li><Image loading='lazy' alt="accepted" width={23} height={23} src='/assests/dashboard/icon/accepted-right.svg' /></li>
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
                <ShareModal isOpen={isModalOpen} onClose={closeModal} data={CurrURL} />
                <RegisterAlertModal
                    title={Data}
                    isOpen={isRegisterModalOpen}
                    onClose={CloseRegisterModal}
                />
                <ReportModal
                    title={"helo"}
                    isOpen={isReportModalOpen}
                    onClose={CloseReportModal}
                />

                <BlockUserModal
                    data={Data}
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

                <CancelRequestModal
                    data={Cancelusersdata}
                    isOpen={isCancelModalOpen}
                    onClose={closeCancelModal}
                />

            </>
                :
                <>
                    <div className='h-[500px] grid place-items-center'>
                        <div className='grid place-items-center space-y-[5px]'>
                            <Image alt='not-found' width={34} height={34} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                            <h1 className='inline' style={ImageNotFoundText}>No Profiles Found</h1>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default AcceptedRequest