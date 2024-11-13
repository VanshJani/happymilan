import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendRequest } from '../../../store/actions/UsersAction'
import { Dialog } from '@mui/material'
import { useRouter } from 'next/router'
import { useDarkMode } from '../../../ContextProvider/DarkModeContext'
import dynamic from 'next/dynamic'
import ShortlistUser from '../common/Buttons/ShortlistUser'
import Avatar from 'react-avatar'
import Pagination from '../../../components/common/Features/Pagination'
import ProfileSkeletonLoader from '../../../components/common/animation/GridSkeleton'
import { userDatas } from '../../../store/actions/GetingAlluser'
import MatchScoreModal from '../Model/Models/MatchScoreModal'
import GridLikeButton from '../common/Buttons/LikeSections/GridLikeButton'
import { capitalizeFirstLetter } from '../../../utils/form/Captitelize'
import Link from 'next/link'

// Dynamically imported components
const ShareModal = dynamic(() => import("../Model/Models/ShareModal"));
const RegisterAlertModal = dynamic(() => import("../Model/Models/RegisterAlertModal"));
const ReportModal = dynamic(() => import("../Model/Models/ReportModal"), { ssr: false });
const ProfileMenu = dynamic(() => import("../Model/popover/MenuPop"), { ssr: false });
const BlockUserModal = dynamic(() => import("../Model/Models/BlockModal"), { ssr: false });


function UserGridProfile() {


    const { darkMode, toggleDarkMode } = useDarkMode();


    const ProfileName = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const ListText = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */
    }


    const ProfileCard = {
        borderRadius: "10px",
        background: darkMode ? "#242526" : "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }

    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const { data, loading } = useSelector(state => state?.alluser?.Ifinit);
    const dispatch = useDispatch();

    const [page, setpage] = useState(1);

    const NextPage = (page) => {
        setpage(page)
    }

    useEffect(() => {
        dispatch(userDatas({ page })); // Load the first page on mount
    }, [page, dispatch]);



    const router = useRouter()



    const [sentrequest, setsentRequest] = useState({});
    const [openShortlistModal, setopenShortlistModal] = React.useState(false);
    const [shortlistText, setshortlistText] = useState();
    const thedata = useSelector((state) => state.myprofile);


    const HandleRequestModal = (res) => {
        if (thedata.data.userProfileCompleted) {
            dispatch(sendRequest("long-term", res.id));

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
        } else {
            OpenRegisterModal();
        }
    };

    // Popup Data

    const [CurrURL, SetCurURL] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false);
    const [isReportModalOpen, setisReportModalOpen] = useState(false);
    const [isBlockModalOpen, setisBlockModalOpen] = useState(false);
    const [Data, setData] = useState("");

    const openModal = (e) => {
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const OpenRegisterModal = (res) => {
        setData(res);
        setisRegisterModalOpen(true);
    };

    const CloseRegisterModal = () => {
        setisRegisterModalOpen(false);
    };

    const openBlockModal = () => {
        setisBlockModalOpen(true);
    }
    const closeBlockModal = () => { setisBlockModalOpen(false) }

    const OpenReportModal = () => {
        setisReportModalOpen(true);

    };
    const CloseReportModal = () => {
        setisReportModalOpen(false);
    }
    const HandleVisitProfile = (res) => {
        router.push(`/longterm/dashboard/${res?.id}`)
    }
    return (
        <>
            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                <div className=' w-[90%] xl:w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[10px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div className=''></div>

                    {
                        loading ?
                            <>
                                <ProfileSkeletonLoader ViewType={6} />
                            </>
                            :
                            <>
                                {
                                    // UserGridProfile
                                    data?.data?.[0]?.paginatedResults?.map((user, index) => {
                                        return (

                                            <div key={user.id} style={ProfileCard} className='inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                                <div className='mt-2 flex justify-between pt-[10px]'>
                                                    <ul className='pl-[10px] flex space-x-[10px]'>
                                                        <li className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`}>

                                                            <MatchScoreModal user={user} />

                                                        </li>
                                                    </ul>
                                                    <ul className='pr-[10px] flex space-x-[30px]'>
                                                        <li>
                                                            <li>
                                                                <ShortlistUser UserId={user?.id} />
                                                            </li>
                                                        </li>
                                                        <li>
                                                            <ProfileMenu Sections={"Grid"} SetCurURL={SetCurURL} openBlockModal={openBlockModal} OpenReportModal={OpenReportModal} openModal={openModal} res={user} />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div onClick={() => HandleVisitProfile(user)} className='flex justify-center '>
                                                    {user?.profilePic ? <>
                                                        <Link href={`/longterm/dashboard/${user?.id || user?._id}`}>
                                                            <Image quality={45} loading='lazy' alt='profile-pic' width={100} height={100} style={{ objectFit: "cover" }} className='hover:opacity-70 duration-150 w-[100px] h-[100px] rounded-[50%]' src={user?.profilePic} />
                                                        </Link>
                                                    </>
                                                        :
                                                        <>
                                                            <Link href={`/longterm/dashboard/${user?.id || user?._id}`}>
                                                                <Avatar name={user?.name} round size='100' className='hover:opacity-70 duration-150' />
                                                            </Link>
                                                        </>
                                                    }
                                                </div>
                                                <div className='text-center'>

                                                    <h1 style={ProfileName} className=' text-[#000] dark:text-[#FFF] text-[18px]'>{capitalizeFirstLetter(user?.name)}</h1>
                                                    <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{user?.age || "NA"}, {user?.heigh || "NA"}”</p>
                                                    <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{capitalizeFirstLetter(user?.religion) || "NA"}, {capitalizeFirstLetter(user?.caste) || "NA"}</p>
                                                    <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{capitalizeFirstLetter(user?.maritalStatus) || "NA"}</p>

                                                </div>
                                                <GridLikeButton userId={user._id}
                                                    TheUsername={user?.name}
                                                    userdata={user} />
                                            </div>
                                        )
                                    })
                                }
                            </>
                    }
                </div>
                <Pagination currentPage={data?.data?.[0]?.currentPage} totalPages={data?.data?.[0]?.totalPages} onPageChange={NextPage} darkMode={false} URL={'/longterm/dashboard/'} />
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

export default UserGridProfile