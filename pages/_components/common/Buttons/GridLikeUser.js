import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '../../../../ContextProvider/SocketContext';
import { getCookie } from 'cookies-next';
import { addToShortlist, CreateLikeUser } from '../../../../store/actions/GetingAlluser';
import { FetchGriduserdata, Getlikeduserdata, GetrecentuserprofileData } from '../../../../store/actions/UsersAction';
import { Dialog } from '@mui/material';

function GridLikeUser({ theUserName, currentPage, from, user, RequestId, HandleRequestModal, RequestedStatus, userLikeDetails }) {

    const { data, loading } = useSelector((state) => state.usersact.LikedUsersData);
    const [isUserLiked, setIsUserLiked] = useState(false);
    const [isUsershortlist, setisUsershortlist] = useState(false);
    const [isUserDisliked, setIsUserDisliked] = useState(false);


    const [isLiked, setIsLiked] = useState(userLikeDetails?.isLike); // Initial state comes from props
    const [isDisliked, setIsDisliked] = useState(!userLikeDetails?.isLike);


    const dispatch = useDispatch();

    const socket = useSocket()
    const currentUserId = getCookie("userid")


    const [openShortlistModal, setopenShortlistModal] = React.useState(false);

    const [shortlistText, setshortlistText] = useState();

    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const handleLikeClick = () => {
        setIsUserLiked(!isUserLiked);
        // Toggle like state
        if (!isLiked) {
            setIsLiked(true)
            setIsDisliked(false)
            socket?.emit('createUserLike', {
                "userId": userLikeDetails?.user,
                "likedUserId": userLikeDetails?.likedUserId,
            })

            setshortlistText(`You Liked ${theUserName}'s profile.`);
            setopenShortlistModal(true);


            setTimeout(() => {
                setopenShortlistModal(false);
            }, 900);


            dispatch(CreateLikeUser({ userId: user?.id, status: true }));
            setTimeout(() => {
                dispatch(Getlikeduserdata());
                if (from == "GridProfile") {
                    dispatch(FetchGriduserdata(currentPage))
                } else { dispatch(GetrecentuserprofileData()) }

            }, 3000);
            setIsUserDisliked(false);
        } else {

        }

    }


    const handleDislikeUser = () => {
        if (!isDisliked) {

            setIsLiked(false)
            setIsDisliked(true)

            // const res = data.results.find((item) => item.likedUserId === user?.id)

            socket?.emit('updateUserLike', {
                "userId": userLikeDetails?.user,
                "likedUserId": userLikeDetails?.likedUserId,
                "isLike": false
            })

            setshortlistText(`You disliked ${theUserName}'s profile.`);
            setopenShortlistModal(true);


            setTimeout(() => {
                setopenShortlistModal(false);
            }, 900);
            setTimeout(() => {
                dispatch(Getlikeduserdata());
                if (from == "GridProfile") {
                    dispatch(FetchGriduserdata(currentPage))
                } else { dispatch(GetrecentuserprofileData()) }

            }, 3000);
            setIsUserLiked(false);
            setIsUserDisliked(true);


        }
    };

    const HandleShortlist = () => {
        dispatch(addToShortlist(user?._id));

        setshortlistText("Profile has been shortlisted");
        setopenShortlistModal(true);
        setTimeout(() => {
            setopenShortlistModal(false);
        }, 800);

    }

    const [OnHover, SetOnHover] = useState({
        LikeHover: false,
        DislikeHover: false,
        SentRequestHover: false
    })


    if (from == "UserProfile") {
        return (
            <div className='mt-[20px] pb-[10px]'>
                <div className='flex space-x-[15px] justify-center'>
                    <div><Image onClick={handleDislikeUser} onMouseEnter={() => SetOnHover({ DislikeHover: true })} onMouseLeave={() => SetOnHover({ DislikeHover: false })} loading='lazy' alt='ignore' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                        src={
                            !isDisliked ?
                                '/assests/gridSection/afterDislikeUser.svg'
                                : OnHover.DislikeHover ?
                                    '/assests/gridSection/afterDislikeUser.svg'
                                    : '/assests/dashboard/icon/ignore-icon-2.svg'
                        } /></div>
                    <div>
                        <Image onClick={handleLikeClick} onMouseEnter={() => SetOnHover({ LikeHover: true })} onMouseLeave={() => SetOnHover({ LikeHover: false })} loading='lazy' alt='like' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                            src={isLiked
                                ? "/assests/animation/After-Like.svg"
                                : OnHover.LikeHover ?
                                    "/assests/animation/After-Like.svg"
                                    : '/assests/dashboard/icon/heart-icon-2.svg'} />
                    </div>
                    <div>
                        <Image
                            onClick={HandleShortlist}
                            // onClick={() => toggleDrawer('right', true)}
                            onMouseEnter={() => SetOnHover({ shortlisthover: true })} onMouseLeave={() => SetOnHover({ shortlisthover: false })} loading='lazy' alt='like' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                            src={isUsershortlist
                                ? "/assests/dashboard/icon/shortlist-after-icon.svg"
                                : OnHover.shortlisthover ?
                                    "/assests/dashboard/icon/shortlist-after-icon.svg"
                                    : '/assests/dashboard/icon/shortlist-before-icon.svg'} />
                    </div>
                    <div><Image onClick={HandleRequestModal} onMouseEnter={() => SetOnHover({ SentRequestHover: true })} onMouseLeave={() => SetOnHover({ SentRequestHover: false })} loading='lazy' alt='send' width={40} height={40} className='cursor-pointer w-[40px] h-[40px]'
                        src={RequestId
                            // Pending--v2 || isRequestSent 
                            ?
                            '/assests/dashboard/icon/send-icon-2.svg'
                            : OnHover.SentRequestHover ?
                                '/assests/dashboard/icon/send-icon-2.svg'
                                : '/assests/gridSection/Grid-before-sent.svg'} /></div>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className='flex space-x-[15px] justify-center'>


                <div>
                    {/* Dislike Button */}
                    <Image
                        onMouseEnter={() => SetOnHover({ DislikeHover: true })}
                        onMouseLeave={() => SetOnHover({ DislikeHover: false })}
                        loading='lazy'
                        quality={45}
                        onClick={handleDislikeUser}
                        alt='ignore'
                        width={40}
                        height={40}
                        className='cursor-pointer w-[40px] h-[40px]'
                        src={
                            userLikeDetails
                                ? (!userLikeDetails.isLike
                                    ? '/assests/gridSection/afterDislikeUser.svg'  // Show 'after dislike' if isLike is false
                                    : (OnHover.DislikeHover
                                        ? '/assests/gridSection/afterDislikeUser.svg'  // Show hover effect if no data exists
                                        : '/assests/dashboard/icon/ignore-icon-2.svg')) // Show the default icon if isLike is true
                                : (OnHover.DislikeHover
                                    ? '/assests/gridSection/afterDislikeUser.svg'  // Show hover effect if no data exists
                                    : '/assests/dashboard/icon/ignore-icon-2.svg') // Default icon
                        }
                    />
                </div>

                <div>
                    {/* Like Button */}
                    <Image
                        onMouseEnter={() => SetOnHover({ LikeHover: true })}
                        onMouseLeave={() => SetOnHover({ LikeHover: false })}
                        loading='lazy'
                        quality={45}
                        onClick={handleLikeClick}
                        alt='like'
                        width={40}
                        height={40}
                        className='cursor-pointer w-[40px] h-[40px]'
                        src={
                            userLikeDetails
                                ? (userLikeDetails.isLike
                                    ? "/assests/animation/After-Like.svg"  // Show 'after like' if isLike is true
                                    : '/assests/dashboard/icon/heart-icon-2.svg') // Show default heart icon if isLike is false
                                : (OnHover.LikeHover
                                    ? "/assests/animation/After-Like.svg"  // Show hover effect if no data exists
                                    : '/assests/dashboard/icon/heart-icon-2.svg') // Default heart icon
                        }
                    />
                </div>


                <div>
                    <Image
                        onMouseEnter={() => SetOnHover({ SentRequestHover: true })}
                        onMouseLeave={() => SetOnHover({ SentRequestHover: false })}
                        quality={45}
                        loading='lazy'
                        onClick={HandleRequestModal}
                        alt='send'
                        width={40}
                        height={40}
                        className='cursor-pointer w-[40px] h-[40px]'
                        src={
                            RequestedStatus?.status === 'accepted' || RequestedStatus?.status === 'requested' || RequestedStatus?.status === 'sent'
                                ? '/assests/dashboard/icon/send-icon-2.svg' // Show sent image if status is accepted

                                : RequestedStatus?.status === 'rejected'
                                    ?
                                    (OnHover.SentRequestHover
                                        ? '/assests/dashboard/icon/send-icon-2.svg'  // Show hover icon when no status exists
                                        : '/assests/gridSection/Grid-before-sent.svg') // Show sent image if status is rejected

                                    : (!RequestedStatus && OnHover.SentRequestHover
                                        ? '/assests/dashboard/icon/send-icon-2.svg'  // Show hover icon when no status exists
                                        : '/assests/gridSection/Grid-before-sent.svg') // Default image when no status exists and no hover
                        }
                    />
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


        </>


    )
}

export default GridLikeUser