import React, { useState } from 'react'
import icons from '../../../../utils/icons/icons'
import { useDarkMode } from '../../../../ContextProvider/DarkModeContext';
import Image from 'next/image';
import ShareModal from '../../../../pages/_components/Model/Models/ShareModal';
import { Dialog, Popover } from '@mui/material';
import BlockUserModal from '../../../../pages/_components/Model/Models/BlockModal';
import ReportModal from '../../../../pages/_components/Model/Models/ReportModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateSpamUserdata } from '../../../../store/reducers/SpamReportReducer';
import CancelRequestModal from '../../../../pages/_components/Model/Models/CancelRequestModal';

function ProfileMenu({ Credentials, res, Section, accepteddata }) {

    const { darkMode } = useDarkMode();


    const Text3 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };



    const [anchorEl, setAnchorEl] = React.useState(null);
    const [UserData, SetUserData] = useState("");
    const [CurrURL, SetCurURL] = useState("")

    // Block Modal Section -- start


    const [blockprofile, setblockprofile] = useState(false);
    const [isBlockModalOpen, setisBlockModalOpen] = useState(false);

    const openBlockModal = () => {
        setisBlockModalOpen(true);
    }
    const closeBlockModal = () => { setisBlockModalOpen(false) }

    // Block Modal Section -- End

    // Report Modal Section - Start
    // Manages the opening and closing of the report modal, and updates spam user data upon reporting

    // State to manage the visibility of the report modal
    const [isReportModalOpen, setisReportModalOpen] = useState(false);

    // Redux dispatch hook and spam user data from the store
    const dispatch = useDispatch();
    const spamUserData = useSelector(state => state.Spamuser.SpamUserdata);

    // Function to open the report modal
    const OpenReportModal = () => {
        setisReportModalOpen(true);
    };

    // Function to close the report modal
    const CloseReportModal = () => {
        setisReportModalOpen(false);
    };

    // Function to handle report action
    // This closes the current modal, opens the report modal, and updates spam user data in the Redux store
    const ReportModalHandle = () => {
        handleClose(); // Close the current modal
        OpenReportModal(); // Open the report modal
        // Dispatch updated spam user data to the store
        dispatch(updateSpamUserdata({
            ...spamUserData,
            spamUserId: res?.id,
            UserName: res?.firstName + " " + res?.lastName
        }));
    };

    // Report Modal Section - End




    const handleClick = (event, res) => {
        SetUserData(res)
        setAnchorEl(event.currentTarget);

        const userId = res?.id || res?._id || "";
        const currentUrl = window.location.href;

        // Remove "/sent" from the URL if it exists
        const newUrl = currentUrl.replace(/\/(sent|accepted|cancelled|deleted|newrequest)/g, '');

        // Append userId to the modified URL
        const urlWithUserId = `${newUrl}/${userId}`;
        SetCurURL(urlWithUserId);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;


    const [openURLModal, setOpenURLModal] = React.useState(false);


    const HandleOpenShareModal = () => {
        openModal()
        handleClose();
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (e) => {
        setIsModalOpen(true);

    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleCopyURL = () => {

        setOpenURLModal(true)
        navigator.clipboard.writeText(CurrURL)
        handleClose();
        setTimeout(() => {
            setOpenURLModal(false)
        }, 1000);

    }


    const SecntSection = () => {
        return (
            <>
            </>
        )
    }

    const AcceptedSection = () => {

        const [isCancelModalOpen, setisCancelModalOpen] = useState(false);

        const closeCancelModal = () => {
            setisCancelModalOpen(false)
        }
        const HandleUnfriend = () => {
            setisCancelModalOpen(true)
            console.log("acdata = ", accepteddata)
            console.log("acdata2 = ", {
                currUser: accepteddata?.id,
                OtherUser: accepteddata?.lastInitiatorUser
            })

        }


        return (
            <>
                <li
                    style={Text3}
                    onClick={() => openBlockModal(UserData)}
                    className=" cursor-pointer hover:bg-[#F2F7FF] w-full p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]"
                >
                    <div className=" ml-[20px] flex space-x-[24px]">

                        {blockprofile ? (
                            <>

                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        id="Vector"
                                        d="M7 14C6.03167 14 5.12167 13.8162 4.27 13.4488C3.41833 13.0813 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.91875 10.5817 0.55125 9.73C0.18375 8.87833 0 7.96833 0 7C0 6.03167 0.18375 5.12167 0.55125 4.27C0.91875 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.91875 4.27 0.55125C5.12167 0.18375 6.03167 0 7 0C7.96833 0 8.87833 0.18375 9.73 0.55125C10.5817 0.91875 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0813 3.41833 13.4488 4.27C13.8162 5.12167 14 6.03167 14 7C14 7.96833 13.8162 8.87833 13.4488 9.73C13.0813 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0813 9.73 13.4488C8.87833 13.8162 7.96833 14 7 14ZM7 12.95C8.66104 12.95 10.068 12.3736 11.2208 11.2208C12.3736 10.068 12.95 8.66104 12.95 7C12.95 6.29228 12.8275 5.61076 12.5825 4.95546C12.3375 4.30015 11.9933 3.70417 11.55 3.1675L3.1675 11.55C3.6925 12.005 4.28454 12.3521 4.94363 12.5913C5.60272 12.8304 6.28818 12.95 7 12.95ZM2.4675 10.8325L10.8325 2.4675C10.2958 2.0125 9.69985 1.6625 9.04454 1.4175C8.38924 1.1725 7.70772 1.05 7 1.05C5.33896 1.05 3.93203 1.6264 2.77921 2.77921C1.6264 3.93203 1.05 5.33896 1.05 7C1.05 7.71182 1.17833 8.39727 1.435 9.05637C1.69167 9.71546 2.03583 10.3075 2.4675 10.8325Z"
                                        fill="red"
                                    />
                                </svg>
                                <p className="text-[red]">
                                    Unblock {UserData?.name ? UserData?.name : ""}
                                </p>{" "}
                            </>
                        ) : (
                            <>

                                <Image
                                    loading="lazy"
                                    alt="icon"
                                    width={14}
                                    height={14}
                                    src="/assests/dashboard/icon/block-icon.svg"
                                />
                                <p>Block {UserData?.name ? UserData?.name : ""}</p>{" "}
                            </>
                        )}{" "}
                    </div>
                </li>
                <li
                    onClick={HandleUnfriend}
                    style={Text3}
                    className="cursor-pointer  w-full hover:bg-[#F2F7FF] p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]"
                >
                    <div className=" ml-[20px] flex space-x-[24px]">
                        <Image loading="lazy"
                            alt="copy"
                            width={14}
                            height={14}
                            src="/assests/Black/UnfriendUser.svg"
                        />{" "}
                        <p>Unfriend {UserData?.name ? UserData?.name : ""}</p>
                    </div>
                </li>

                <CancelRequestModal
                    data={{
                        currUser: accepteddata?._id || accepteddata?.id,
                        OtherUser: accepteddata?.lastInitiatorUser,
                        status: "removed"
                    }}
                    isOpen={isCancelModalOpen}
                    onClose={closeCancelModal}
                />
            </>
        )
    }



    const renderSection = () => {
        switch (Section) {
            case 'sent':
                return <SecntSection />
            case 'accepted':
                return <AcceptedSection />
            default:
                return ""
        }
    }



    return (
        <>

            <div onClick={(event) => handleClick(event, res)} className="grid place-items-center cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838] relative top-[-6px] rounded-[10px] h-[25px] w-[25px]">
                <span aria-describedby={id}
                    variant="contained"
                    className="cursor-pointer"
                    onClick={(event) => handleClick(event, res)}>
                    {darkMode ? icons.more.dark : icons.more.light}
                </span>
            </div>

            {/* Modal  */}

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                PaperProps={{
                    style: {
                        border: "none",
                        boxShadow:
                            "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        borderRadius: "10px",
                        marginLeft: "-10px",
                    }, // Add this to remove the shadow
                }}
            >
                <div className={`flex flex-col items-center bg-[#FFF] rounded-[10px] w-[220px] h-[full] pb-[10px] `}>
                    <div className="w-full h-full">
                        <ul className="w-full flex flex-col justify-center items-center space-y-[0px]">
                            <li
                                style={Text3}
                                onClick={HandleOpenShareModal}
                                className="w-full p-[5px]  hover:bg-[#F2F7FF]  cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[12px]"
                            >
                                <div className=" ml-[20px] flex space-x-[24px]">

                                    <Image
                                        loading="lazy"
                                        alt="icon"
                                        width={13}
                                        height={14}
                                        src="/assests/dashboard/icon/share-icon.svg"
                                    />
                                    <p>Share Profile</p>
                                </div>
                            </li>
                           
                            <li
                                onClick={ReportModalHandle}
                                style={Text3}
                                className="cursor-pointer w-full hover:bg-[#F2F7FF] p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]"
                            >
                                <div className=" ml-[20px] flex space-x-[24px]">

                                    <Image
                                        loading="lazy"
                                        alt="icon"
                                        width={14}
                                        height={14}
                                        src="/assests/dashboard/icon/report-icon.svg"
                                    />
                                    <p> Report this profile</p>
                                </div>
                            </li>
                            <li
                                onClick={handleCopyURL}
                                style={Text3}
                                className="cursor-pointer  w-full hover:bg-[#F2F7FF] p-[5px] space-x-[24px] flex  items-center space-x-[12px] text-[14px]"
                            >
                                <div className=" ml-[20px] flex space-x-[24px]">
                                    <Image
                                        loading="lazy"
                                        alt="icon"
                                        width={12}
                                        height={14}
                                        src="/assests/dashboard/icon/copy-icon.svg"
                                    />{" "}
                                    <p>Copy URL</p>
                                </div>
                            </li>
                            {renderSection()}
                        </ul>

                    </div>
                </div>
            </Popover>


            {/* All Models */}
            <ShareModal isOpen={isModalOpen} onClose={closeModal} data={CurrURL} />
            <BlockUserModal
                isOpen={isBlockModalOpen}
                onClose={closeBlockModal}
                data={{
                    currUser: accepteddata?._id || accepteddata?.id,
                    OtherUser: accepteddata?.lastInitiatorUser,
                    status: "blocked"
                }}
            />

            <ReportModal
                title={"helo"}
                isOpen={isReportModalOpen}
                onClose={CloseReportModal}
                ReportData={CurrURL}
            />

            <React.Fragment>
                <Dialog
                    open={openURLModal}
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
                            <spa className="text-[#fff]"> URL has been copied</spa>
                        </div>
                    </div>
                </Dialog>
            </React.Fragment>

            {/* All Models */}

        </>
    )
}
export default ProfileMenu