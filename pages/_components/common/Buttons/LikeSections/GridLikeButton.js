import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";
import { Getlikeduserdata, sendRequest } from "../../../../../store/actions/UsersAction";
import { CreateLikeUser, UnlikeTheUser } from "../../../../../store/actions/GetingAlluser";
import { useSocket } from "../../../../../ContextProvider/SocketContext";
import { Dialog } from "@mui/material";
import GridRequestsentbtn from "./GridRequestsentbtn";

function GridLikeButton({ userdata, userId, TheUsername }) {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.usersact.LikedUsersData);

    const [isUserLiked, setIsUserLiked] = useState(false);
    const [isUserDisliked, setIsUserDisliked] = useState(false);

    useEffect(() => {
        if (data?.results) {
            const liked = data.results.some(item => item.likedUserId === userId && item.isLike);
            const disliked = data.results.some(item => item.likedUserId === userId && !item.isLike);
            setIsUserLiked(liked);
            setIsUserDisliked(disliked);
        }
    }, [data, userId]);

    const currentUserId = getCookie("userid")
    const socket = useSocket()

    const [openShortlistModal, setopenShortlistModal] = React.useState(false);

    const [shortlistText, setshortlistText] = useState();

    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
    };

    const handleLikeUser = () => {
        if (!isUserLiked) {
            socket?.emit('createUserLike', {
                "userId": currentUserId,
                "likedUserId": userId
            })
            dispatch(CreateLikeUser({ userId: userId, status: true }));

            setshortlistText(`You liked ${TheUsername}'s profile.`);
            setopenShortlistModal(true);


            setTimeout(() => {
                setopenShortlistModal(false);
            }, 900);

            setIsUserLiked(true);
            setIsUserDisliked(false);
            setTimeout(() => {
                dispatch(Getlikeduserdata());
            }, 3000);

        }


    };

    const handleDislikeUser = () => {
        if (!isUserDisliked) {

            const res = data.results.find((item) => item?.likedUserId === userId)
            console.log("🚀 ~ handleDislikeUser ~ res:", res)

            socket?.emit('updateUserLike', {
                "userId": currentUserId,
                "likedUserId": res?.likedUserId,
                "isLike": false
            })

            setshortlistText(`You disliked ${TheUsername}'s profile.`);
            setopenShortlistModal(true);


            setTimeout(() => {
                setopenShortlistModal(false);
            }, 900);

            dispatch(UnlikeTheUser(res))
            setIsUserLiked(false);
            setIsUserDisliked(true);


        }
    };



    //For Sent Request 

    const thedata = useSelector((state) => state.myprofile);


    const [sentrequest, setsentRequest] = useState({});


    const HandleRequestModal = (res) => {
        if (thedata?.data?.userProfileCompleted) {
            dispatch(sendRequest("long-term", res?._id || res?.id));

            setsentRequest((prevState) => ({
                ...prevState,
                [res?._id]: !prevState[res?._id], // Update the sentRequests state for the specific user ID
            }));

            if (!sentrequest[res?._id]) {

                setshortlistText(`You sent a request to ${res?.name}`);
                setopenShortlistModal(true);
            } else {
                setshortlistText("Request Removed..");
                setopenShortlistModal(true);
            }

            setTimeout(() => {
                setopenShortlistModal(false);
            }, 900);
        } else {
            OpenRegisterModal();
        }
    };

    return (
        <>
            <div className="flex justify-center space-x-4">
                <div>
                    <div onClick={isUserLiked ? handleDislikeUser : handleLikeUser}
                        className={
                            isUserLiked ?
                                "Liked-button w-[63px] h-[40px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px] bg-[#9E28D7] "
                                :
                                "Like-button w-[63px] h-[40px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px]"}>
                        <svg class={isUserLiked ? "after-like-icon" : "the-like-icon"} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.1914 17.8002L8.80064 16.5341C3.86113 12.055 0.600098 9.1009 0.600098 5.4754C0.600098 2.52129 2.92119 0.200195 5.8753 0.200195C7.54418 0.200195 9.14593 0.977089 10.1914 2.20477C11.2368 0.977089 12.8386 0.200195 14.5075 0.200195C17.4616 0.200195 19.7827 2.52129 19.7827 5.4754C19.7827 9.1009 16.5216 12.055 11.5821 16.5437L10.1914 17.8002Z" />
                        </svg>
                    </div>
                </div>
                <div>
                    <GridRequestsentbtn
                        userdata={userdata?.name}
                        Requeststatus={userdata?.friendsDetails}
                        RequestId={sentrequest[userdata?._id || userdata?.id]}
                        HandleRequestModal={() => HandleRequestModal(userdata)}
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

export default GridLikeButton