import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";
import { Getlikeduserdata } from "../../../../store/actions/UsersAction";
import { CreateLikeUser, UnlikeTheUser } from "../../../../store/actions/GetingAlluser";
import { useSocket } from "../../../../ContextProvider/SocketContext";
import { Dialog } from "@mui/material";

const LikeUser = ({ setActiveLike, userId, TheUsername }) => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.usersact.LikedUsersData);

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


  const [isAnimated, setIsAnimated] = useState(false);

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

      setIsAnimated(true);
      setTimeout(() => {
        setIsAnimated(false);
      }, 500);
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

  const [HoverAnimation, SetHoverAnimation] = useState(false)
  const [DislikeHover, SetDislikeHover] = useState(false)

  return (
    <>
      <div className="">
        <div className="hidden">
          {isUserDisliked ?


            <div className="Like-button w-[63px] h-[40px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px]">
              <svg class="the-like-icon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1914 17.8002L8.80064 16.5341C3.86113 12.055 0.600098 9.1009 0.600098 5.4754C0.600098 2.52129 2.92119 0.200195 5.8753 0.200195C7.54418 0.200195 9.14593 0.977089 10.1914 2.20477C11.2368 0.977089 12.8386 0.200195 14.5075 0.200195C17.4616 0.200195 19.7827 2.52129 19.7827 5.4754C19.7827 9.1009 16.5216 12.055 11.5821 16.5437L10.1914 17.8002Z" />
              </svg>

            </div>

            : DislikeHover ?
              <Image onMouseEnter={() => SetDislikeHover(true)} onMouseLeave={() => SetDislikeHover(false)} loading="lazy" width={50} height={50} alt="dislike" onClick={handleDislikeUser} src="/assests/animation/filled-dislike.svg" />
              :
              <svg
                onMouseEnter={() => SetDislikeHover(true)} onMouseLeave={() => SetDislikeHover(false)}
                width="50"
                height="50"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleDislikeUser}
              >
                <g id="Group 1509">
                  <circle
                    id="Ellipse 53"
                    cx="20"
                    cy="20"
                    r="19.5"
                    stroke="url(#paint0_linear_4122_346)"
                  />
                  <path
                    id="Vector"
                    d="M22.6134 11.3336H14.9334C14.2251 11.3336 13.6193 11.7603 13.3633 12.3747L10.7862 18.3907C10.7094 18.587 10.6667 18.7918 10.6667 19.0136V20.7203C10.6667 21.659 11.4347 22.427 12.3734 22.427H17.7579L16.9473 26.3267L16.9217 26.5998C16.9217 26.9496 17.0667 27.2739 17.2971 27.5043L18.2017 28.4003L23.8251 22.7768C24.1323 22.4696 24.3201 22.043 24.3201 21.5736V13.0403C24.3201 12.1016 23.5521 11.3336 22.6134 11.3336ZM22.6134 21.5736L18.9099 25.2771L20.0534 20.7203H12.3734V19.0136L14.9334 13.0403H22.6134V21.5736ZM26.0267 11.3336H29.4401V21.5736H26.0267V11.3336Z"
                    fill="url(#paint1_linear_4122_346)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_4122_346"
                    x1="2.5"
                    y1="-3.5"
                    x2="40"
                    y2="43.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0F52BA" />
                    <stop offset="0.979167" stopColor="#8225AF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_4122_346"
                    x1="12"
                    y1="9"
                    x2="26"
                    y2="31.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0F52BA" />
                    <stop offset="1" stopColor="#8126AF" />
                  </linearGradient>
                </defs>

              </svg>
          }
        </div>
        <div>
          {/* <Image
            onMouseEnter={() => SetHoverAnimation(true)}
            onMouseLeave={() => SetHoverAnimation(false)}
            width={51}
            height={50}
            alt="like"
            className={`heart  cursor-pointer ${isAnimated ? 'animated' : ''} `}
            loading="lazy"
            onClick={isUserLiked ? () => setActiveLike(false) : handleLikeUser}
            src={
              isUserLiked
                ? "/assests/animation/After-Like.svg"
                : HoverAnimation
                  ? "/assests/animation/After-Like.svg"
                  : "/assests/animation/before-Like.svg"
            }
          /> */}

          <div onClick={isUserLiked ? handleDislikeUser : handleLikeUser}
            className={
              isUserLiked ?
                "Liked-button w-[63px] h-[40px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px] bg-[#9E28D7] "
                :
                "Like-button w-[63px] h-[40px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px]"}>
            {/* <Image width={19} height={17} alt="like" src={"/assests/dashboard/icon/Like-button.svg"} /> */}
            <svg class={isUserLiked ? "after-like-icon" : "the-like-icon"} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.1914 17.8002L8.80064 16.5341C3.86113 12.055 0.600098 9.1009 0.600098 5.4754C0.600098 2.52129 2.92119 0.200195 5.8753 0.200195C7.54418 0.200195 9.14593 0.977089 10.1914 2.20477C11.2368 0.977089 12.8386 0.200195 14.5075 0.200195C17.4616 0.200195 19.7827 2.52129 19.7827 5.4754C19.7827 9.1009 16.5216 12.055 11.5821 16.5437L10.1914 17.8002Z" />
            </svg>
          </div>
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
  );
};

export default LikeUser;
