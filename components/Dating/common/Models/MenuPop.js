import React, { useEffect, useRef, useState } from 'react'
import { Dialog, DialogContent } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Deleteimage } from '../../../../store/actions/UsersAction';
import { fetchUserDetails, updateUserDetails } from '../../../../store/dating-services/Redux-reducer/home/MyprofileReducer';

function MenuPop({ data }) {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const { details } = useSelector((state) => state.user); // Ensure this is pointing to the correct part of the Redux state

    const LogoutModalText = {
        fontFamily: "Poppins",
        fontSize: "20px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "30px"
    }


    const Text = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }

    const ObjectData = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    }



    // Toggle menu visibility

    const [alldata, setalldata] = useState({
        ...details,
        profilePic: ""
    })

    const handleToggle = () => {

        setalldata({
            // ...details,
            profilePic: data?.url
        })
        setIsOpen(!isOpen);
    };



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleSetAsProfilePicture = () => {
        handleClickOpen();

    }


    //Dispatch Calls 

    const dispatch = useDispatch();

    const UploadProfileImage = () => {
        // dispatch(SetAsProfileImage({ details, ImageURL: data?.url }))
        // console.log(data)
        dispatch(updateUserDetails(alldata))
        setOpen(false)
        setTimeout(() => {
            dispatch(fetchUserDetails())
        }, 1000);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Attach the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);


    // if (!isOpen) return null;



    const [openLogoutModal, setOpenLogoutModal] = React.useState(false);
    const [userdeletedata, SetuserDeleteData] = useState([])

    const handleClickDeleteImageModal = (res) => {
        setOpenLogoutModal(true);
        SetuserDeleteData(data)
    };

    const handleCloseLogout = () => {
        setOpenLogoutModal(false);
    };

    const HandleLogout = (e) => {
        if (e.target.name != "stay") {
            dispatch(Deleteimage(userdeletedata));
            setOpenLogoutModal(false);

        }
        setOpenLogoutModal(false)

    }



    return (
        <>

            <div className='absolute right-0' ref={menuRef}>
                <div className=''>
                    <svg className='cursor-pointer' onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
                        <path d="M2 15.2695C1.5875 15.2695 1.23442 15.1225 0.94075 14.8287C0.646917 14.535 0.5 14.182 0.5 13.7695C0.5 13.357 0.646917 13.0038 0.94075 12.71C1.23442 12.4163 1.5875 12.2695 2 12.2695C2.4125 12.2695 2.76558 12.4163 3.05925 12.71C3.35308 13.0038 3.5 13.357 3.5 13.7695C3.5 14.182 3.35308 14.535 3.05925 14.8287C2.76558 15.1225 2.4125 15.2695 2 15.2695ZM2 9.50021C1.5875 9.50021 1.23442 9.35329 0.94075 9.05946C0.646917 8.76579 0.5 8.41271 0.5 8.00021C0.5 7.58771 0.646917 7.23462 0.94075 6.94096C1.23442 6.64712 1.5875 6.50021 2 6.50021C2.4125 6.50021 2.76558 6.64712 3.05925 6.94096C3.35308 7.23462 3.5 7.58771 3.5 8.00021C3.5 8.41271 3.35308 8.76579 3.05925 9.05946C2.76558 9.35329 2.4125 9.50021 2 9.50021ZM2 3.73096C1.5875 3.73096 1.23442 3.58412 0.94075 3.29046C0.646917 2.99662 0.5 2.64346 0.5 2.23096C0.5 1.81846 0.646917 1.46537 0.94075 1.17171C1.23442 0.877874 1.5875 0.730957 2 0.730957C2.4125 0.730957 2.76558 0.877874 3.05925 1.17171C3.35308 1.46537 3.5 1.81846 3.5 2.23096C3.5 2.64346 3.35308 2.99662 3.05925 3.29046C2.76558 3.58412 2.4125 3.73096 2 3.73096Z" fill="#5F6368" />
                    </svg>
                </div>
                {isOpen && (
                    <div className="h-[100px] w-[170px] grid place-items-center absolute top-1 right-[18px] bg-white shadow-lg border rounded-[10px] ">
                        <ul className="flex flex-col w-full">
                            <li
                                className="pl-5 w-full hover:bg-gray-100 cursor-pointer flex space-x-3 items-center p-2"
                                style={ObjectData}
                                onClick={handleSetAsProfilePicture}
                            >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M1.48874 14C1.07272 14 0.720588 13.8559 0.432353 13.5676C0.144118 13.2794 0 12.9273 0 12.5113V7.82353H1.23529V12.5113C1.23529 12.5747 1.26172 12.6327 1.31456 12.6854C1.36726 12.7383 1.42532 12.7647 1.48874 12.7647H6.17647V14H1.48874ZM7.82353 14V12.7647H12.5113C12.5747 12.7647 12.6327 12.7383 12.6854 12.6854C12.7383 12.6327 12.7647 12.5747 12.7647 12.5113V7.82353H14V12.5113C14 12.9273 13.8559 13.2794 13.5676 13.5676C13.2794 13.8559 12.9273 14 12.5113 14H7.82353ZM2.67647 10.9118L4.71944 8.20359L6.3665 10.31L8.67876 7.301L11.3867 10.9118H2.67647ZM0 6.17647V1.48874C0 1.07272 0.144118 0.720588 0.432353 0.432353C0.720588 0.144118 1.07272 0 1.48874 0H6.17647V1.23529H1.48874C1.42532 1.23529 1.36726 1.26172 1.31456 1.31456C1.26172 1.36726 1.23529 1.42532 1.23529 1.48874V6.17647H0ZM12.7647 6.17647V1.48874C12.7647 1.42532 12.7383 1.36726 12.6854 1.31456C12.6327 1.26172 12.5747 1.23529 12.5113 1.23529H7.82353V0H12.5113C12.9273 0 13.2794 0.144118 13.5676 0.432353C13.8559 0.720588 14 1.07272 14 1.48874V6.17647H12.7647ZM9.80309 5.27368C9.49385 5.27368 9.23705 5.17156 9.03268 4.96732C8.82844 4.76295 8.72632 4.50615 8.72632 4.19691C8.72632 3.88754 8.82844 3.63067 9.03268 3.42629C9.23705 3.22206 9.49385 3.11994 9.80309 3.11994C10.1125 3.11994 10.3693 3.22206 10.5737 3.42629C10.7779 3.63067 10.8801 3.88754 10.8801 4.19691C10.8801 4.50615 10.7779 4.76295 10.5737 4.96732C10.3693 5.17156 10.1125 5.27368 9.80309 5.27368Z" fill="black" />
                                    </svg>
                                </span>
                                <p>
                                    Set as Profile
                                </p>
                            </li>
                            <li
                                className="pl-5 w-full hover:bg-gray-100 cursor-pointer flex space-x-3 items-center p-2"
                                style={ObjectData}
                                onClick={handleClickDeleteImageModal}
                            >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
                                        <path d="M2.32808 14C1.91461 14 1.56138 13.8536 1.26841 13.5608C0.975579 13.2678 0.829163 12.9146 0.829163 12.5011V1.97714H0V0.733395H3.73123V0H8.70621V0.733395H12.4374V1.97714H11.6083V12.5011C11.6083 12.9199 11.4632 13.2745 11.173 13.5647C10.8828 13.8549 10.5282 14 10.1094 14H2.32808ZM10.3645 1.97714H2.07291V12.5011C2.07291 12.5756 2.09681 12.6367 2.14463 12.6845C2.19244 12.7323 2.2536 12.7563 2.32808 12.7563H10.1094C10.1732 12.7563 10.2317 12.7297 10.2847 12.6764C10.3379 12.6234 10.3645 12.5649 10.3645 12.5011V1.97714ZM4.06621 11.0979H5.30975V3.63546H4.06621V11.0979ZM7.12769 11.0979H8.37123V3.63546H7.12769V11.0979Z" fill="black" />
                                    </svg>
                                </span>
                                <p>Delete</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ borderRadius: "10px" }}
            >
                <DialogContent className="text-center w-[450px] mt-[20px]">
                    <div style={LogoutModalText} id="alert-dialog-description">
                        Are you sure you want to set this image as your profile picture?
                    </div>
                </DialogContent>

                <div className="flex justify-evenly p-[20px] mb-[20px]">
                    <div>
                        <button className='bg-custom-gradient text-[#FFF] rounded-[24px] w-[122px] h-[50px] hover:opacity-60 duration-75' onClick={UploadProfileImage} autoFocus>Yes</button>
                    </div>
                    <div>
                        <button className='rounded-[24px] w-[122px] h-[50px] border-[1px] border-[black]' onClick={handleClose}>
                            No
                        </button>
                    </div>
                </div>
            </Dialog>



            <Dialog
                open={openLogoutModal}
                onClose={handleCloseLogout}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className=""
                sx={{ '& .MuiDialog-paper': { borderRadius: '18px' } }}
            >
                <DialogContent className="text-center w-[400px] mt-[20px]">
                    <div id="alert-dialog-description">
                        <p style={LogoutModalText}>Are you sure you want to delete the image?</p>
                    </div>
                </DialogContent>
                <div className="flex justify-evenly p-[20px] mb-[20px]">
                    <div>
                        <button onClick={HandleLogout} name="stay" id="grad-button" className="rounded-[24px] w-[122px] h-[50px]">No</button>
                    </div>
                    <div>
                        <button onClick={HandleLogout} name="exit" className="border-[black] border-[1px] rounded-[24px] w-[122px] h-[50px]">Yes</button>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default MenuPop