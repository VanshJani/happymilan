import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper'
import Image from 'next/image'
import { Dialog } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToShortlist,
  RemoveShortlist,
  setCurrentSlideIndex,
  userDatas
} from '../../../store/actions/GetingAlluser'
import {
  Cancelfriendrequest,
  Postrecentuserprofile,
  sendRequest
} from '../../../store/actions/UsersAction'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useDarkMode } from '../../../ContextProvider/DarkModeContext'
import { capitalizeFirstLetter } from '../../../utils/form/Captitelize'

// Dynamically imported components to improve initial load
const RegisterAlertModal = dynamic(
  () => import('../Model/Models/RegisterAlertModal'),
  { ssr: false }
)

const LikeUser = dynamic(() => import('../common/Buttons/LikeUser'), {
  ssr: false
})

const SendRequestBtn = dynamic(
  () => import('../common/Buttons/SendRequestBtn'),
  { ssr: false }
)

const UserprofileSkeleton = dynamic(
  () => import('../../../components/common/shader/UserprofileSkeleton'),
  { ssr: false }
)

const ProfileMenu = dynamic(
  () => import('../../../components/long-term/common/Model/ProfileMenu'),
  { ssr: false }
)
const MatchScoreModal = dynamic(
  () => import('../Model/Models/MatchScoreModal'),
  { ssr: false }
)
const ShowMore = dynamic(() => import('../common/profile/UserBio'), {
  ssr: false
})

function SampleUserProfile () {
  // Profile styles (memoized for performance)
  const ProfileStyle = useMemo(
    () => ({
      UserName: {
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 'normal'
      },
      statusText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: '12px'
      },
      ListText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: '24px'
      },
      Box: {
        borderRadius: '18px',
        boxShadow: '0px 0px 14px 0px rgba(0, 0, 0, 0.07)'
      },
      Urlmodaltext: {
        color: '#000',
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: 'normal',
        fontStyle: 'normal'
      }
    }),
    []
  )
  const dispatch = useDispatch()
  const router = useRouter()
  const swiperRef = useRef(null) // Reference to Swiper instance

  // State selectors
  const { data = {}, loading } = useSelector(
    state => state?.alluser?.Ifinit || {}
  )
  const { CurrentSlide } = useSelector(
    state => state?.alluser?.CurrentSlide || {}
  )
  const { darkMode } = useDarkMode()
  const likeloading = useSelector(
    state => state?.usersact?.LikedUsersData?.likeloading
  )
  const thedata = useSelector(state => state?.myprofile)

  // Local state
  const [currentPage, setCurrentPage] = useState(1)
  const [users, setUsers] = useState([])
  const [loadingMore, setLoadingMore] = useState(false)
  const [ActiveLike, setActiveLike] = useState(false)
  const [sentrequest, setsentRequest] = useState({})
  const [isRegisterModalOpen, setisRegisterModalOpen] = useState(false)
  const [Data, setData] = useState('')
  const [openShortlistModal, setopenShortlistModal] = useState(false)
  const [shortlistText, setshortlistText] = useState('')

  const totalPages = data?.data?.[0]?.totalPages || 1

  // Load initial data
  useEffect(() => {
    dispatch(userDatas({ page: 1 }))
  }, [dispatch])

  // Update users list when `data` changes
  useEffect(() => {
    if (data?.data?.[0]?.paginatedResults) {
      setUsers(prevUsers =>
        currentPage === 1
          ? data.data[0].paginatedResults
          : [...prevUsers, ...data.data[0].paginatedResults]
      )
      setLoadingMore(false)
    }
  }, [data, currentPage])

  // Handle slide change to load more data
  const handleSlideChange = () => {
    const swiperInstance = swiperRef.current?.swiper
    const activeIndex = swiperInstance?.realIndex || 0

    dispatch(setCurrentSlideIndex(activeIndex))

    if (activeIndex === users.length - 2) {
      loadMoreData()
    }
  }

  // Load more data
  const loadMoreData = () => {
    if (currentPage < totalPages && !loadingMore) {
      setLoadingMore(true)
      const nextPage = currentPage + 1
      setCurrentPage(nextPage)
      dispatch(userDatas({ page: nextPage }))
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 37) swiperRef.current?.swiper.slidePrev()
      if (event.keyCode === 39) swiperRef.current?.swiper.slideNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Handle modal open/close
  const OpenRegisterModal = res => {
    setData(res)
    setisRegisterModalOpen(true)
  }

  const CloseRegisterModal = () => {
    setisRegisterModalOpen(false)
  }

  // Handle shortlist
  const HandleShortlist = obj => {
    // { data: res, id: res?._id }

    // if (obj?.userShortListDetails?.shortlistId) {
    //   dispatch(RemoveShortlist(obj?.id))

    //   setshortlistText('shortliste has been removed')
    //   setopenShortlistModal(true)

    //   setTimeout(() => {
    //     setopenShortlistModal(false)
    //     dispatch(userDatas({ page: 1 }))
    //   }, 900)

    //   setTimeout(() => setopenShortlistModal(false), 800)
    // } else {
    //   dispatch(addToShortlist(obj?.id))
    //   setshortlistText('Profile has been shortlisted')
    //   setopenShortlistModal(true)

    //   setTimeout(() => {
    //     setopenShortlistModal(false)
    //     dispatch(userDatas({ page: 1 }))
    //   }, 900)

    const { data, id } = obj
    console.log('🚀 ~ HandleShortlist ~ userShortListDetails:', data)

    if (data?.userShortListDetails) {
      // Remove from shortlist
      dispatch(
        RemoveShortlist(
          data?.userShortListDetails?.id || data?.userShortListDetails?._id
        )
      )
      setshortlistText('Shortlist has been removed')
    } else {
      // Add to shortlist
      dispatch(addToShortlist(id))
      setshortlistText('Profile has been shortlisted')
    }

    setopenShortlistModal(true)

    setTimeout(() => {
      setopenShortlistModal(false)
      dispatch(userDatas({ page: 1 }))
    }, 900)

    setTimeout(() => setopenShortlistModal(false), 800)
    // swiperRef.current?.swiper.slideNext()
  }

  // Handle send request
  const HandleRequestModal = res => {
    if (thedata?.data?.userProfileCompleted) {
      if (res?.friendsDetails) {
        const { status } = res.friendsDetails
        const userId = res?._id || res?.id

        // Define the statuses for which `sendRequest` should be called
        const sendRequestStatuses = [
          'requested',
          // 'received',
          // 'accepted',
          // 'rejected',
          'removed'
          // 'blocked'
        ]

        if (sendRequestStatuses.includes(status)) {
          // Call `Cancelfriendrequest` for existing friend details
          const data = {
            currUser: res?.friendsDetails?._id || res?.friendsDetails?.id,
            OtherUser: userId,
            status: 'rejected'
          }

          dispatch(
            Cancelfriendrequest(data.currUser, data.OtherUser, data.status)
          )

          setTimeout(() => {
            setopenShortlistModal(false)
            dispatch(userDatas({ page: 1 }))
          }, 900)
        } else {
          // Call `sendRequest` for non-matching statuses
          dispatch(sendRequest('long-term', userId))

          setsentRequest(prev => ({
            ...prev,
            [userId]: !prev[userId]
          }))

          setshortlistText(
            !sentrequest[userId]
              ? `You sent a request to ${res?.name}`
              : 'Request Removed..'
          )
          setopenShortlistModal(true)

          setTimeout(() => {
            setopenShortlistModal(false)
            dispatch(userDatas({ page: 1 }))
          }, 900)
        }
      } else {
        // Case where `friendsDetails` does not exist
        const userId = res?._id || res?.id
        dispatch(sendRequest('long-term', userId))

        setsentRequest(prev => ({
          ...prev,
          [userId]: !prev[userId]
        }))

        setshortlistText(
          !sentrequest[userId]
            ? `You sent a request to ${res?.name}`
            : 'Request Removed..'
        )
        setopenShortlistModal(true)

        setTimeout(() => {
          setopenShortlistModal(false)
          dispatch(userDatas({ page: 1 }))
        }, 900)
      }
    } else {
      OpenRegisterModal()
    }
  }

  // Handle push to user dashboard
  const HandlePushUser = res => {
    router.push(`/longterm/dashboard/${res}`)
    dispatch(Postrecentuserprofile(res))
  }

  // Loading skeleton
  if (currentPage === 1 && loading && users.length === 0) {
    return <UserprofileSkeleton />
  }

  return (
    <>
      <div className=''>
        <div className='flex'>
          <div className=' grid place-items-center w-[10px] lg:w-[40px] 2xl:w-[40px] xl:w-[40px] h-[294px]'>
            <div
              id='custom-prev-button'
              className='Prevbtn relative left-[20px] md:left-[10px]  2xl:left-0 xl:left-[20px] rounded-l-full grid place-items-center cursor-pointer hover:bg-[#F1F6FF]'
              style={{ width: '35px', height: '70.993px' }}
            >
              <Image
                width={7}
                height={14}
                className=''
                alt='next-light'
                src='/assests/gridSection/Prev-Data.svg'
              />
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            className=' w-[600px] relative lg:left-[-10px] 2xl:left-[0px] xl:left-[10px] 2xl:w-[650px] 2xl:h-full xl:w-[560px] lg:w-[560px]  xl:h-full'
            navigation={{
              prevEl: '#custom-prev-button',
              nextEl: '#custom-next-button'
            }}
            onSlideChange={handleSlideChange}
            initialSlide={CurrentSlide}
          >
            {users?.map((res, index) => {
              return (
                <SwiperSlide key={index} className=''>
                  <div className=''>
                    <div
                      style={ProfileStyle?.Box}
                      className={`dark:bg-[#242526] relative left-[-4px]  xl:left-[-3px] 2xl:left-[-3px]  flex m-[10px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] lg:h-[270px] lg:w-[530px] md:w-[400px] bg-[#FFF]`}
                    >
                      <div className='w-[350px] 2xl:w-[350px] xl:w-[350px] lg:w-[250px] md:w-[300px]'>
                        <div className='p-[15px] w-full '>
                          {res?.userProfilePic &&
                          res?.userProfilePic.length > 0 ? (
                            <Swiper
                              pagination={{ clickable: true }}
                              modules={[Pagination]}
                              className='mySwiper relative 2xl:w-[197px] xl:w-[187px] lg:w-[170px] w-[185px] h-[260px]'
                            >
                              {res?.userProfilePic
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
                                        borderRadius: '10px',
                                        objectFit: 'cover'
                                      }}
                                      className='2xl:w-[197px] 2xl:h-[258px] xl:w-[197px] xl:h-[258px] lg:w-[180px] lg:h-[240px] w-[180px] h-[240px]'
                                      src={Imageres?.url}
                                      loading='lazy'
                                      quality={45}
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
                                    alt='not-Found'
                                    width={34}
                                    height={34}
                                    loading='lazy'
                                    quality={25}
                                    src={
                                      '/assests/dashboard/icon/NotFound-img.svg'
                                    }
                                  />
                                  <h1
                                    className='inline'
                                    style={ProfileStyle?.imageFoundText}
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
                        <div className='flex justify-between'>
                          <div className='w-[50%] '>
                            <h1
                              onClick={() => HandlePushUser(res?._id)}
                              className='2xl:text-[18px] xl:text-[15px] text-[10px] cursor-pointer text-[#000] dark:text-[#EDEDED] hover:opacity-75 duration-100 break-words'
                              style={ProfileStyle?.UserName}
                            >
                              {capitalizeFirstLetter(res?.name)}
                            </h1>
                            <h1
                              style={ProfileStyle?.statusText}
                              className='text-[#17C270] break-words'
                            >
                              {res?.isUserActive ? (
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
                            <ul className='flex justify-evenly space-x-[15px] pr-[10px] pt-[10px]'>
                              <li
                                className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] flex space-x-[10px] top-[-8px] p-[5px] relative left-[5px]`}
                              >
                                <MatchScoreModal user={res} />
                              </li>

                              <li
                                className='cursor-pointer'
                                onClick={() =>
                                  HandleShortlist({ data: res, id: res?._id })
                                }
                              >
                                <div className='cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838] p-[5px] rounded-[50%] relative top-[-5px]'>
                                  <Image
                                    loading='lazy'
                                    width={15}
                                    height={14}
                                    alt='star'
                                    src={
                                      res?.userShortListDetails?.shortlistId
                                        ? '/assests/Black/filled-star.svg'
                                        : '/assests/Black/Stars-2.svg'
                                    }
                                  />
                                </div>
                              </li>
                              <li>
                                <ProfileMenu
                                  res={res}
                                  blockprofile={false}
                                  accepteddata={res}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='mt-[10px] 2xl:mt-[10px] xl:mt-[5px] pl-[2px]'>
                          <div id='user-card'>
                            <ul id='user-card-grid'>
                              <li
                                className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#EDEDED]'
                                style={ProfileStyle?.ListText}
                              >
                                <Image
                                  loading='lazy'
                                  alt='mark'
                                  width={15}
                                  height={14}
                                  src={
                                    darkMode
                                      ? '/assests/Black/RightTickWhite.svg'
                                      : '/assests/Black/RightTick.svg'
                                  }
                                  className='inline pr-[5px]'
                                />
                                {`${res?.age},${res?.height}`}
                              </li>

                              <li
                                className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#EDEDED]'
                                style={ProfileStyle?.ListText}
                              >
                                {res?.maritalStatus ? (
                                  <>
                                    <Image
                                      loading='lazy'
                                      alt='mark'
                                      width={15}
                                      height={14}
                                      src={
                                        darkMode
                                          ? '/assests/Black/RightTickWhite.svg'
                                          : '/assests/Black/RightTick.svg'
                                      }
                                      className='inline pr-[5px]'
                                    />
                                    {capitalizeFirstLetter(
                                      res?.maritalStatus
                                    ) || 'NA , NA'}
                                  </>
                                ) : (
                                  ''
                                )}
                              </li>

                              <li
                                className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#EDEDED]'
                                style={ProfileStyle?.ListText}
                              >
                                {res?.religion ? (
                                  <>
                                    <Image
                                      loading='lazy'
                                      alt='mark'
                                      width={15}
                                      height={14}
                                      src={
                                        darkMode
                                          ? '/assests/Black/RightTickWhite.svg'
                                          : '/assests/Black/RightTick.svg'
                                      }
                                      className='inline pr-[5px]'
                                    />
                                    {`${
                                      capitalizeFirstLetter(res?.religion) ||
                                      'NA'
                                    }, ${
                                      capitalizeFirstLetter(res?.caste) || 'NA'
                                    }`}
                                  </>
                                ) : (
                                  ''
                                )}
                              </li>

                              <li
                                className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#EDEDED]'
                                style={ProfileStyle?.ListText}
                              >
                                {res?.address ? (
                                  <>
                                    <Image
                                      loading='lazy'
                                      alt='mark'
                                      width={15}
                                      height={14}
                                      src={
                                        darkMode
                                          ? '/assests/Black/RightTickWhite.svg'
                                          : '/assests/Black/RightTick.svg'
                                      }
                                      className='inline pr-[5px]'
                                    />
                                    {capitalizeFirstLetter(
                                      res?.address?.currentCity || 'NA'
                                    )}
                                    ,{' '}
                                    {capitalizeFirstLetter(
                                      res?.address?.currentCountry || 'NA'
                                    )}
                                  </>
                                ) : null}
                              </li>

                              <li
                                className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#EDEDED]'
                                style={ProfileStyle?.ListText}
                              >
                                {res?.motherTongue ? (
                                  <>
                                    <Image
                                      loading='lazy'
                                      alt='mark'
                                      width={15}
                                      height={14}
                                      src={
                                        darkMode
                                          ? '/assests/Black/RightTickWhite.svg'
                                          : '/assests/Black/RightTick.svg'
                                      }
                                      className='inline pr-[5px]'
                                    />
                                    {capitalizeFirstLetter(res?.motherTongue) ||
                                      'NA , NA'}
                                  </>
                                ) : null}
                              </li>

                              <li
                                className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#EDEDED]'
                                style={ProfileStyle?.ListText}
                              >
                                {res?.userProfessional ? (
                                  <>
                                    <Image
                                      loading='lazy'
                                      alt='mark'
                                      width={15}
                                      height={14}
                                      src={
                                        darkMode
                                          ? '/assests/Black/RightTickWhite.svg'
                                          : '/assests/Black/RightTick.svg'
                                      }
                                      className='inline pr-[5px]'
                                    />
                                    {capitalizeFirstLetter(
                                      res?.userProfessional.jobTitle
                                    ) || 'NA , NA'}
                                  </>
                                ) : null}
                              </li>
                            </ul>
                          </div>
                          <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px] h-[45px]'>
                            <ShowMore
                              userid={res?._id}
                              text={res?.writeBoutYourSelf}
                              maxLength={100}
                            />
                          </div>
                        </div>

                        <div className='absolute right-6 bottom-[18px]'>
                          <div className='flex items-center justify-center'>
                            <div>
                              <SendRequestBtn
                                userdata={res?.name}
                                Requeststatus={res?.friendsDetails}
                                // RequestId={sentrequest[res?._id]}
                                HandleRequestModal={() =>
                                  HandleRequestModal(res)
                                }
                              />
                            </div>
                            <div className='relative top-[10px]'>
                              {likeloading ? (
                                <>
                                  <div className='animate-pulse w-[63px] h-[40px] bg-gray-200 rounded-[22px]'></div>
                                </>
                              ) : (
                                <>
                                  <LikeUser
                                    ActiveLike={ActiveLike}
                                    setActiveLike={setActiveLike}
                                    userId={res?._id}
                                    TheUsername={res?.name}
                                    userdata={res}
                                  />
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>

          <div className='z-8 relative  right-[20px] xl:right-[10px] 2xl:right-[10px]  grid place-items-center w-[10px] lg:w-[40px] h-[294px]'>
            <div
              id='custom-next-button'
              className='Prevbtn rounded-r-full grid place-items-center cursor-pointer  hover:bg-[#F1F6FF]'
              style={{ width: '35px', height: '70.993px' }}
            >
              <Image
                width={7}
                height={14}
                className='transform scale-x-[-1]'
                alt='next-light'
                src='/assests/gridSection/Prev-Data.svg'
              />
            </div>
          </div>
        </div>
      </div>

      <RegisterAlertModal
        title={Data}
        isOpen={isRegisterModalOpen}
        onClose={CloseRegisterModal}
      />

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
            className='bg-[#333333] w-[full] rounded-[100px] text-center grid place-items-center'
          >
            <div className='text-[14px]' style={ProfileStyle?.Urlmodaltext}>
              <span className='text-[#fff]'> {shortlistText}</span>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
    </>
  )
}

export default SampleUserProfile
