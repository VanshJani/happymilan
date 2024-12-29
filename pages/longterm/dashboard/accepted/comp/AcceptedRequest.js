import React, { useEffect, useMemo } from 'react'
import styles from '../../../../../styles/styles.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { getAcceptedRequestData } from '../../../../../store/actions/UsersAction'
import index from '../../profile'
import UserprofileSkeleton from '../../../../../components/common/shader/UserprofileSkeleton'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import ShortlistUser from '../../../../_components/common/Buttons/ShortlistUser'
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound'

const ShowMore = dynamic(
  () => import('../../../../_components/common/profile/UserBio'),
  { ssr: false }
)
const MatchScoreModal = dynamic(
  () => import('../../../../_components/Model/Models/MatchScoreModal'),
  { ssr: false }
)

function AcceptedRequest () {
  const { darkMode } = useDarkMode()

  const profileStyles = useMemo(() => ({
    statusText: {
      fontFamily: 'Poppins',
      fontSize: '8px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '12px'
    },
    ListText: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px' /* 171.429% */
    },
    Box: {
      borderRadius: '18px',
      background: darkMode ? '#242526' : '#FFF',
      boxShadow: '0px 0px 14px 0px rgba(0, 0, 0, 0.07)'
    }
  }))

  const dispatch = useDispatch()
  const data = useSelector(state => state.usersact?.acceptedrequestdata)

  useEffect(() => {
    dispatch(getAcceptedRequestData('listview', 1))
  }, [])

  if (data?.data?.loading == true) {
    return (
      <>
        <UserprofileSkeleton />
      </>
    )
  }

  return (
    <>
      <div>
        <div className='flex flex-col'>
          {data?.data?.results?.map(res => {
            return (
              <>
                <div
                  key={index}
                  className='relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]'
                >
                  <div
                    style={profileStyles?.Box}
                    className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}
                  >
                    <div className='w-[350px]'>
                      <div className='p-[15px] w-full '>
                        <Swiper
                          pagination={{ clickable: true }}
                          modules={[Pagination]}
                          className='mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]'
                        >
                          <SwiperSlide>
                            <Image
                              alt={`profile`}
                              width={197}
                              height={258}
                              style={{
                                width: '197px',
                                height: '258px',
                                borderRadius: '10px',
                                objectFit: 'cover'
                              }}
                              className='w-[197px] h-[258px]'
                              src={
                                res?.friendList?.profilePic
                                  ? res?.friendList?.profilePic
                                  : ''
                              }
                              loading='lazy'
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                    <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                      <div className='flex justify-between  h-[50px]'>
                        <div>
                          <Link
                            href={`/longterm/dashboard/${
                              res?.friendList?.id || res?.friendList?._id
                            }`}
                          >
                            <h1
                              className={`${styles.ProfileName} text-[#000] dark:text-[#FFF] 2xl:text-[20px] xl:text-[15px] text-[15px]`}
                            >
                              {res?.friendList?.name}
                            </h1>
                          </Link>
                          <h1
                            style={profileStyles?.statusText}
                            className='text-[#17C270] break-words'
                          >
                            {res?.friendList?.isUserActive ? (
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
                          <ul className='flex justify-evenly space-x-[16px] pr-[10px] pt-[10px]'>
                            <li
                              className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] flex space-x-[10px] top-[-8px] p-[5px] relative left-[5px]`}
                            >
                              <MatchScoreModal user={res?.friendList} />
                            </li>
                            <li className='cursor-pointer'>
                              <ShortlistUser
                                UserId={
                                  res?.friendList?.id || res?.friendList?._id
                                }
                              />
                            </li>
                            <li>
                              <ProfileMenu
                                accepteddata={res}
                                res={res?.friendList}
                                Section={'accepted'}
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
                                src={
                                  darkMode
                                    ? '/assests/Black/RightTickWhite.svg'
                                    : '/assests/Black/RightTick.svg'
                                }
                                className='inline pr-[5px]'
                              />
                              32, 5'3
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
                                src={
                                  darkMode
                                    ? '/assests/Black/RightTickWhite.svg'
                                    : '/assests/Black/RightTick.svg'
                                }
                                className='inline pr-[5px]'
                              />
                              {capitalizeFirstLetter(
                                res?.friendList?.religion
                              ) || 'NA'}
                              ,{' '}
                              {capitalizeFirstLetter(res?.friendList?.caste) ||
                                'NA'}
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
                                src={
                                  darkMode
                                    ? '/assests/Black/RightTickWhite.svg'
                                    : '/assests/Black/RightTick.svg'
                                }
                                className='inline pr-[5px]'
                              />
                              {capitalizeFirstLetter(
                                res?.friendList?.motherTongue
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
                                src={
                                  darkMode
                                    ? '/assests/Black/RightTickWhite.svg'
                                    : '/assests/Black/RightTick.svg'
                                }
                                className='inline pr-[5px]'
                              />
                              {capitalizeFirstLetter(
                                res?.friendList?.maritalStatus
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
                                src={
                                  darkMode
                                    ? '/assests/Black/RightTickWhite.svg'
                                    : '/assests/Black/RightTick.svg'
                                }
                                className='inline pr-[5px]'
                              />
                              {capitalizeFirstLetter(
                                res?.friendList?.address?.currentCity
                              ) || 'NA'}
                              ,{' '}
                              {capitalizeFirstLetter(
                                res?.friendList?.address?.currentCountry
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
                                src={
                                  darkMode
                                    ? '/assests/Black/RightTickWhite.svg'
                                    : '/assests/Black/RightTick.svg'
                                }
                                className='inline pr-[5px]'
                              />
                              {capitalizeFirstLetter(
                                res?.friendList?.userProfessional?.jobTitle
                              ) || 'NA'}
                            </li>
                          </ul>
                        </div>
                        <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                          <ShowMore
                            userid={res?.friendList?.id || res?.friendList?._id}
                            text={
                              res?.friendList?.writeBoutYourSelf
                                ? res?.friendList?.writeBoutYourSelf
                                : 'NA'
                            }
                            maxLength={100}
                          />
                        </div>
                      </div>
                      <div className='flex justify-end items-center mt-[20px] 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]'>
                        <ul className='flex space-x-[10px]'>
                          <li>
                            <h1
                              className={`${styles.BoldText} text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]`}
                            >
                              Accepted
                            </h1>
                          </li>
                          <li>
                            <Image
                              loading='lazy'
                              alt='accepted'
                              width={23}
                              height={23}
                              src='/assests/dashboard/icon/accepted-right.svg'
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <ProfileDataNotFound ProfileData={data?.data?.results} />
    </>
  )
}

export default AcceptedRequest
