import { Box, Dialog, Modal, Popover } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import ShareModal from '../../../../pages/_components/Model/Models/ShareModal';
import ReportModal from '../../../../pages/_components/Model/Models/ReportModal';
import { useDispatch, useSelector } from 'react-redux';
// import BlockUserModal from '../../../../pages/_components/Model/Models/BlockModal';
import BlockUserModal from '../../../../pages/_components/Model/Models/BlockModal';
import { updateSpamUserdata } from '../../../../store/reducers/SpamReportReducer';

function ProfileMoreSection({ res }) {
// console.log("🚀 ~ ProfileMoreSection ~ res:", res)



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




    const handleClick = (event) => {
        console.log("🚀 ~ handleClick ~ res:", res)
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

    return (
        <>
            <div onClick={handleClick} className='hover:bg-[#EFF5FF] rounded-full p-1 cursor-pointer absolute flex justify-end top-0 right-[70px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                    <path d="M11.1364 18C10.8168 18 10.5475 17.8887 10.3285 17.666C10.1095 17.4434 10 17.1758 10 16.8631C10 16.5545 10.1097 16.2856 10.329 16.0563C10.5484 15.827 10.8148 15.7124 11.1283 15.7124C11.448 15.7124 11.7173 15.8275 11.9363 16.0577C12.1553 16.2879 12.2648 16.5577 12.2648 16.8673C12.2648 17.1768 12.1553 17.443 11.9363 17.6658C11.7173 17.8886 11.4507 18 11.1364 18ZM11.1364 12.1381C10.8168 12.1381 10.5475 12.0284 10.3285 11.809C10.1095 11.5897 10 11.3232 10 11.0098C10 10.6901 10.1097 10.4208 10.329 10.2018C10.5484 9.98281 10.8148 9.87332 11.1283 9.87332C11.448 9.87332 11.7173 9.98281 11.9363 10.2018C12.1553 10.4208 12.2648 10.6874 12.2648 11.0016C12.2648 11.3213 12.1553 11.5906 11.9363 11.8096C11.7173 12.0286 11.4507 12.1381 11.1364 12.1381ZM11.1364 6.29899C10.8168 6.29899 10.5475 6.18595 10.3285 5.95988C10.1095 5.73381 10 5.46204 10 5.14458C10 4.82712 10.1097 4.55699 10.329 4.33419C10.5484 4.1114 10.8148 4 11.1283 4C11.448 4 11.7173 4.11234 11.9363 4.33701C12.1553 4.56168 12.2648 4.83196 12.2648 5.14785C12.2648 5.46687 12.1553 5.73848 11.9363 5.96268C11.7173 6.18689 11.4507 6.29899 11.1364 6.29899Z" fill="black" />
                </svg>
            </div>

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
                        marginLeft: "-14px",
                        marginTop:"5px"
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
                            
                        </ul>

                    </div>
                </div>
            </Popover>



            <ShareModal isOpen={isModalOpen} onClose={closeModal} data={CurrURL} />
            <BlockUserModal
                isOpen={isBlockModalOpen}
                onClose={closeBlockModal}
                // data={{
                //     currUser: accepteddata?._id || accepteddata?.id,
                //     OtherUser: accepteddata?.lastInitiatorUser,
                //     status: "blocked"
                // }}
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

        </>
    )
}

export default ProfileMoreSection