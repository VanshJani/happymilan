import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetrecentuserprofileData } from '../../../store/actions/UsersAction'
import shuffledata from 'lodash/shuffle';
import calculateAge from '../../../utils/helpers/CalculateAge'
import Link from 'next/link'
import Avatar from 'react-avatar'
import ProfileMenu from '../../../components/long-term/common/Model/ProfileMenu'
import MatchScoreModal from '../Model/Models/MatchScoreModal'
import ShortlistUser from '../common/Buttons/ShortlistUser'
import GridLikeButton from '../common/Buttons/LikeSections/GridLikeButton'
import { capitalizeFirstLetter } from '../../../utils/form/Captitelize'
import ProfileSkeletonLoader from '../../../components/common/animation/GridSkeleton'

function RecentlyView() {



  const ProfileName = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal"
  }

  const Text3 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
  }

  const ListText = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px" /* 171.429% */
  }

  const Text4 = {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "12px"
  }



  const ProfileCard = {
    borderRadius: "10px",
    boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
  }

  const ImagenotFound = {
    color: "#B3CBF1",
    textAlign: "center",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal"
  }

  const dispatch = useDispatch();

  // Fetch user profile data on component mount
  useEffect(() => {
    dispatch(GetrecentuserprofileData());
  }, [dispatch]); // Add dispatch to the dependency array as it's a stable function

  // Get the data and loading state from the store
  const { data, loading } = useSelector((state) => state.usersact.recentusersdata);

  // State for shuffled data
  const [shuffleData, setShuffleData] = useState([]);

  // Shuffle data whenever the `data` changes
  useEffect(() => {
    if (data) {
      setShuffleData(shuffledata(data)); // Assuming shuffledata is a function that processes the data
    }
  }, [data]); // Depend on `data`, not `dispatch`



  return (
    <>


      <div className='relative 2xl:left-[45px] '>


        {data?.length > 0 ? <h1 style={Text3} className='dark:text-[#FFF] relative 2xl:left-[10px] xl:left-[65px] lg:left-[20px] text-[16px]'>Recently Viewed</h1> : <>
        </>
        }
      </div>
      <div className=' inline-block space-y-[10px] relative 2xl:left-[-15px] left-[5px] pt-[10px] lg:flex flex-wrap xl:justify-center 2xl:justify-center space-x-[10px] 2xl:space-x-[25px] xl:space-x-[15px]'>
        <div></div>
        {loading ?
          <>
            <ProfileSkeletonLoader ViewType={3} />
          </>


          : <>
            {
              shuffleData?.slice(0, 3).map((item, index) => {
                return (
                  <div key={index} style={ProfileCard} className='inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                    <div className='mt-2 flex justify-between pt-[10px]'>
                      <ul className='pl-[10px] flex space-x-[10px]'>
                        <li className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`}>

                          <MatchScoreModal user={item?.viewerId} />

                        </li>
                      </ul>
                      <ul className='pr-[10px] flex space-x-[30px]'>
                        <li>
                          <li>
                            <ShortlistUser UserId={item?.viewerId?.id || item?.viewerId?._id} />
                          </li>
                        </li>
                        <li>
                          <ProfileMenu res={item?.viewerId} />
                        </li>
                      </ul>
                    </div>
                    <div onClick={() => HandleVisitProfile(user)} className='flex justify-center '>
                      {item?.viewerId?.profilePic ? <>
                        <Link href={`/longterm/dashboard/${item?.viewerId?.id || item?.viewerId?._id}`}>
                          <Image quality={45} loading='lazy' alt='profile-pic' width={100} height={100} style={{ objectFit: "cover" }} className='hover:opacity-70 duration-150 w-[100px] h-[100px] rounded-[50%]' src={item?.viewerId?.profilePic} />
                        </Link>
                      </>
                        :
                        <>
                          <Link href={`/longterm/dashboard/${item?.viewerId?.id || item?.viewerId?._id}`}>
                            <Avatar name={item?.viewerId?.name} round size='100' className='hover:opacity-70 duration-150'/>
                          </Link>
                        </>
                      }
                    </div>
                    <div className='text-center'>

                      <h1 style={ProfileName} className=' text-[#000] dark:text-[#FFF] text-[18px]'>{capitalizeFirstLetter(item?.viewerId?.name)}</h1>
                      <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{calculateAge(item?.viewerId?.dateOfBirth)}, 5’3”</p>
                      <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{capitalizeFirstLetter(item?.viewerId?.caste) || "NA"}</p>
                      <p style={ListText} className=' text-[#000] dark:text-[#FFF] text-[14px]'>{capitalizeFirstLetter(item?.viewerId?.maritalStatus) || "NA"}</p>

                    </div>
                    {/* <GridLikeButton userId={user._id}
                      TheUsername={user?.name}
                      userdata={user} /> */}
                    <GridLikeButton userdata={item?.viewerId} userId={item?.viewerId?.id || item?.viewerId?._id} TheUsername={item?.viewerId?.name} />
                  </div>
                )

              })
            }
          </>}
      </div >

    </>
  )
}

export default RecentlyView