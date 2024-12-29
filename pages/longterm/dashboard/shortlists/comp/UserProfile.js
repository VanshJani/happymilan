import React, { useEffect, useMemo, useState } from 'react'

// Next.js imports
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'

//Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css'
import { Pagination } from 'swiper'

// Utility imports
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'

//MUI imports
import { Dialog } from '@mui/material'

//Redux Imports
import { useDispatch, useSelector } from 'react-redux'
import { RemoveShortlist } from '../../../../../store/actions/GetingAlluser'
import { sendRequest } from '../../../../../store/actions/UsersAction'
import { fetchshortlistUsers } from '../../../../../store/matrimoney-services/slices/getShortlistUsersSlice'

// Component imports
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal'
import LikeUser from '../../../../_components/common/Buttons/LikeUser'
import UserprofileSkeleton from '../../../../../components/common/shader/UserprofileSkeleton'
import ShowMore from '../../../../_components/common/profile/UserBio'

// Dynamic imports
const SendRequestBtn = dynamic(
  () => import('../../../../_components/common/Buttons/SendRequestBtn'),
  { ssr: false }
)

function UserProfile () {
  const [sentrequest, setsentRequest] = useState({})

  const profileStyles = useMemo(() => ({
    ProfileName: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal'
    },
    statusText: {
      fontFamily: 'Poppins',
      fontSize: '8px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '12px'
    },
    Text3: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal'
    },

    ListText: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px' /* 171.429% */
    },

    Box: {
      borderRadius: '18px',
      background: '#FFF',
      boxShadow: '0px 0px 14px 0px rgba(0, 0, 0, 0.07)'
    },

    Urlmodaltext: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal'
    },

    ImageNotFoundText: {
      color: '#B3CBF1',
      textAlign: 'center',
      fontFamily: 'Poppins',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal'
    }
  }))

  const [openShortlistModal, setopenShortlistModal] = React.useState(false)

  const [shortlistText, setshortlistText] = useState()

  const dispatch = useDispatch()

  const { userData, status } = useSelector(state => state.shortlistusers)

  const [currentPage, setCurrentPage] = useState(1)

  const Pages = {
    currentPage: currentPage,
    viewType: 'ListView'
  }

  useEffect(() => {
    dispatch(fetchshortlistUsers(Pages))
  }, [currentPage])

  const HandleRemoveShortlist = res => {
    dispatch(RemoveShortlist(res?.id || res?._id))
    setshortlistText('Shortlisted has been removed')
    setopenShortlistModal(true)
    setTimeout(() => {
      setopenShortlistModal(false)
      dispatch(fetchshortlistUsers(Pages))
    }, 800)
  }

  const HandleRequestModal = res => {
    dispatch(sendRequest('long-term', res?.id))

    setsentRequest(prevState => ({
      ...prevState,
      [res.id]: !prevState[res.id] // Update the sentRequests state for the specific user ID
    }))

    if (!sentrequest[res.id]) {
      setshortlistText('Request Sent..')
      setopenShortlistModal(true)
    } else {
      setshortlistText('Request Removed..')
      setopenShortlistModal(true)
    }

    setTimeout(() => {
      setopenShortlistModal(false)
    }, 800)
  }

  const [ActiveLike, setActiveLike] = useState(false)

  if (status == 'loading') {
    return <UserprofileSkeleton />
  }

  return (
    <>
      <div>
        <div className='flex flex-col'>
          {userData?.[0]?.paginatedResults?.map((res, index) => {
            return (
              <>
                <div
                  key={index}
                  className='relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]'
                >
                  <div
                    style={profileStyles?.Box}
                    className={` dark:bg-[#242526] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] lg:w-[590px]  2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}
                  >
                    <div className='w-[350px]'>
                      <div className='p-[15px] w-full '>
                        {res?.user?.userProfilePic &&
                        res?.user?.userProfilePic.length > 0 ? (
                          <Swiper
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            className='mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]'
                          >
                            {res?.user?.userProfilePic
                              .slice(0, 3)
                              .map((Imageres, theindex) => (
                                <SwiperSlide key={theindex}>
                                  <Image
                                    placeholder='blur'
                                    blurDataURL='data:...'
                                    alt={`img${theindex + 1}`}
                                    width={197}
                                    height={258}
                                    style={{
                                      width: '197px',
                                      height: '258px',
                                      borderRadius: '10px',
                                      objectFit: 'cover'
                                    }}
                                    className='w-[197px] h-[258px]'
                                    src={Imageres.url}
                                    loading='lazy'
                                  />
                                </SwiperSlide>
                              ))}
                          </Swiper>
                        ) : (
                          <div>
                            <div
                              style={{
                                backgroundColor: '#F8FBFF',
                                width: '197px',
                                height: '258px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px'
                              }}
                            >
                              <div className='grid place-items-center space-y-[5px]'>
                                <Image
                                  loading='lazy'
                                  alt='not-Found'
                                  width={34}
                                  height={34}
                                  src={
                                    '/assests/dashboard/icon/NotFound-img.svg'
                                  }
                                />
                                <h1
                                  className='inline'
                                  style={profileStyles?.ImageNotFoundText}
                                >
                                  No Image
                                </h1>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                      <div className='flex justify-between  h-[50px]'>
                        <div>
                          <Link
                            href={`/longterm/dashboard/${
                              res?.user?.id || res?.user?._id
                            }`}
                          >
                            <h1
                              className='2xl:text-[20px] xl:text-[15px] text-[15px] cursor-pointer text-[#000] dark:text-[#FFF]'
                              style={profileStyles?.ProfileName}
                            >
                              {res?.user?.name}
                            </h1>
                          </Link>
                          <h1
                            style={profileStyles?.statusText}
                            className='text-[#17C270] break-words'
                          >
                            {res?.user?.isUserActive ? (
                              <span className='text-[9px] text-[#0091FF]'>
                                Online now
                              </span>
                            ) : (
                              <span className='text-[9px] text-[#a6a6a6]'>
                                Offline
                              </span>
                            )}
                          </h1>
                        </div>

                        <div className='pr-[8px]'>
                          <ul className='flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]'>
                            <li
                              className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] flex space-x-[10px] top-[-8px] p-[5px] relative left-[5px]`}
                            >
                              <MatchScoreModal user={res} />
                            </li>
                            <li
                              onClick={() => HandleRemoveShortlist(res)}
                              className='cursor-pointer'
                            >
                              <Image
                                loading='lazy'
                                width={15}
                                height={14}
                                alt='star'
                                src={'/assests/Black/filled-star.svg'}
                              />
                            </li>
                            <li>
                              <ProfileMenu
                                res={res?.user}
                                Section={'shortlist'}
                                accepteddata={res?.user}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                        <div id='user-card'>
                          <ul id='user-card-grid'>
                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
                              style={profileStyles?.ListText}
                            >
                              <Image
                                loading='lazy'
                                alt='mark'
                                width={15}
                                height={14}
                                src={'/assests/Black/RightTick.svg'}
                                className='inline pr-[5px]'
                              />
                              {`'32,5'3`}
                            </li>
                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
                              style={profileStyles?.ListText}
                            >
                              <Image
                                loading='lazy'
                                alt='mark'
                                width={15}
                                height={14}
                                src={'/assests/Black/RightTick.svg'}
                                className='inline pr-[5px]'
                              />
                              {capitalizeFirstLetter(
                                res?.user?.maritalStatus
                              ) || 'NA'}
                            </li>
                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
                              style={profileStyles?.ListText}
                            >
                              <Image
                                loading='lazy'
                                alt='mark'
                                width={15}
                                height={14}
                                src={'/assests/Black/RightTick.svg'}
                                className='inline pr-[5px]'
                              />
                              {`${
                                capitalizeFirstLetter(res?.user?.religion) ||
                                'NA'
                              }, ${
                                capitalizeFirstLetter(res?.user?.cast) || 'NA'
                              }`}
                            </li>
                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
                              style={profileStyles?.ListText}
                            >
                              <Image
                                loading='lazy'
                                alt='mark'
                                width={15}
                                height={14}
                                src={'/assests/Black/RightTick.svg'}
                                className='inline pr-[5px]'
                              />
                              {`${
                                capitalizeFirstLetter(
                                  res?.address?.currentCity
                                ) || 'NA'
                              } , ${
                                capitalizeFirstLetter(
                                  res?.address?.currentCountry
                                ) || 'NA'
                              }`}
                            </li>
                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
                              style={profileStyles?.ListText}
                            >
                              <Image
                                loading='lazy'
                                alt='mark'
                                width={15}
                                height={14}
                                src={'/assests/Black/RightTick.svg'}
                                className='inline pr-[5px]'
                              />
                              {`${
                                capitalizeFirstLetter(
                                  res?.user?.motherTongue
                                ) || 'NA'
                              }  `}
                            </li>

                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
                              style={profileStyles?.ListText}
                            >
                              <Image
                                loading='lazy'
                                alt='mark'
                                width={15}
                                height={14}
                                src={'/assests/Black/RightTick.svg'}
                                className='inline pr-[5px]'
                              />
                              {capitalizeFirstLetter(
                                res?.userProfessional?.jobTitle
                              ) || 'NA'}
                            </li>
                          </ul>
                        </div>
                        <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]'>
                          <p
                            style={profileStyles?.Text3}
                            className='text-[#979797] text-[14px] 2xl:text-[12px] xl:text-[12px] pr-[10px]'
                          >
                            <ShowMore
                              userid={res?.user?.id || res?.user?._id}
                              text={
                                res?.user?.writeBoutYourSelf
                                  ? res?.user?.writeBoutYourSelf
                                  : 'NA'
                              }
                              maxLength={100}
                            />
                          </p>
                        </div>
                      </div>

                      <div className='absolute right-6 bottom-[18px]'>
                        <div className='flex items-center justify-center'>
                          <div>
                            <SendRequestBtn
                              userdata={res?.user?.name}
                              RequestId={
                                sentrequest[res?.user?._id || res?.user?.id]
                              }
                              Requeststatus={res?.friendsDetails}
                              HandleRequestModal={() =>
                                HandleRequestModal(res?.user)
                              }
                            />
                          </div>
                          <div className='relative top-[10px]'>
                            <LikeUser
                              ActiveLike={ActiveLike}
                              setActiveLike={setActiveLike}
                              userId={res?.user?._id || res?.user?.id}
                              TheUsername={res?.user?.name}
                              userdata={res?.user}
                            />
                            {/* </>} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <ProfileDataNotFound ProfileData={userData} />
      <React.Fragment>
        <Dialog
          open={openShortlistModal}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          PaperProps={{
            style: {
              backgroundColor: 'transparent', // or 'none' if you prefer
              boxShadow: 'none'
            }
          }}
          BackdropProps={{
            style: { opacity: 0, backgroundColor: 'none', boxShadow: 'none' }
          }}
        >
          <div
            style={{ padding: '17px 19px 17px 20px' }}
            className='bg-[#333333] w-[249px] rounded-[100px] text-center grid place-items-center'
          >
            <div className='text-[14px]' style={profileStyles?.Urlmodaltext}>
              <span className='text-[#fff]'> {shortlistText}</span>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
    </>
  )
}

export default UserProfile
