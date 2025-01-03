import React, { useEffect, useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext'
import ShowMore from '../../../../_components/common/profile/UserBio'
import UserprofileSkeleton from '../../../../../components/common/shader/UserprofileSkeleton'
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound'
import { getCookie } from 'cookies-next'
import { Getcancelrequestdata } from '../../../../../store/actions/UsersAction'

function CanceledProfile () {
  const { darkMode } = useDarkMode()

  const { loading, data } = useSelector(state => state.usersact.cancelusersdata)

  const dispatch = useDispatch()
  const [isauthuserID, setauthuserID] = useState('')

  useEffect(() => {
    dispatch(Getcancelrequestdata())
    setauthuserID(getCookie('userid'))
  }, [])

  const ProfileStyle = useMemo(() => ({
    BoldText: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal'
    },
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

    ListText: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px' /* 171.429% */
    },

    Text4: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '12px'
    },

    Box: {
      borderRadius: '18px',
      background: '#FFF',
      boxShadow: '0px 0px 14px 0px rgba(0, 0, 0, 0.07)'
    }
  }))

  if (loading) {
    return <UserprofileSkeleton />
  }

  return (
    <>
      <div>
        <div className='flex flex-col'>
          {data?.data?.results?.map((res, index) => {
            return (
              <>
                <div
                  key={index}
                  className='relative 2xl:left-[40px] xl:left-[55px] lg:left-[10px] left-[40px]'
                >
                  <div
                    style={ProfileStyle?.Box}
                    className={`flex m-[10px] lg:w-[590px] 2xl:w-[631px] 2xl:h-[294px] xl:w-[540px] xl:h-[284px] bg-[#FFF]`}
                  >
                    <div className='w-[350px]'>
                      <div className='p-[15px] w-full '>
                        <Swiper
                          pagination={{ clickable: true }}
                          modules={[Pagination]}
                          className='mySwiper relative 2xl:w-[197px] xl:w-[185px] w-[185px] h-[260px]'
                        >
                          <SwiperSlide>
                            <Image
                              loading='lazy'
                              alt='img-1'
                              width={197}
                              height={258}
                              className='w-[197px] h-[258px]'
                              style={{
                                objectFit: 'cover',
                                borderRadius: '10px'
                              }}
                              src={
                                res?.user.id == isauthuserID
                                  ? res?.friend.profilePic
                                  : res?.user.profilePic
                              }
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              loading='lazy'
                              alt='img-2'
                              width={197}
                              height={258}
                              className='w-[197px] h-[258px]'
                              src={'/assests/dashboard/ignore/ignore-2.svg'}
                            />
                          </SwiperSlide>
                          <SwiperSlide>
                            <Image
                              loading='lazy'
                              alt='img-3'
                              width={197}
                              height={258}
                              className='w-[197px] h-[258px]'
                              src={'/assests/dashboard/ignore/ignore-3.svg'}
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                    <div className='w-full pt-[15px] 2xl:pt-[15px] xl:pt-[20px]'>
                      <div className='flex justify-between  h-[50px]'>
                        <div>
                          <h1
                            className='2xl:text-[20px] xl:text-[15px] text-[15px]'
                            style={ProfileStyle?.ProfileName}
                          >
                            {res?.user.id == isauthuserID
                              ? res?.friend.name
                              : res?.user.name}
                          </h1>
                          <h1
                            style={ProfileStyle?.statusText}
                            className={`text-[#7A7A7A]`}
                          >
                            {'Offline'}
                          </h1>
                        </div>
                        <div className='pr-[8px]'>
                          <ul className='flex justify-evenly space-x-[20px] pr-[10px] pt-[10px]'>
                            <li className='relative left-[10px]'>
                              <Image
                                loading='lazy'
                                alt='couple-icon'
                                width={17}
                                height={14}
                                src='/assests/Black/Couple2.svg'
                              />
                            </li>
                            <li
                              className='text-[10px]'
                              style={ProfileStyle?.Text4}
                            >
                              You & Her
                            </li>
                            <li>
                              <Image
                                loading='lazy'
                                alt='star-icon'
                                width={15}
                                height={14}
                                src='/assests/Black/Stars-2.svg'
                              />
                            </li>
                            <li>
                              <ProfileMenu
                                res={
                                  res?.user.id == isauthuserID
                                    ? res?.friend
                                    : res?.user
                                }
                                Section={'cancel'}
                                accepteddata={
                                  res?.user.id == isauthuserID
                                    ? res?.friend
                                    : res?.user
                                }
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
                              {`${
                                res?.user?.id === isauthuserID
                                  ? res?.friend?.age ?? 'NA'
                                  : res?.user?.age ?? 'NA'
                              }, ${
                                res?.user?.id === isauthuserID
                                  ? res?.friend?.height ?? 'NA'
                                  : res?.user?.height ?? 'NA'
                              }`}
                            </li>

                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
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
                              {res?.user?.id === isauthuserID
                                ? capitalizeFirstLetter(
                                    res?.friend?.maritalStatus
                                  ) ?? 'NA'
                                : capitalizeFirstLetter(
                                    res?.user?.maritalStatus
                                  ) ?? 'NA'}
                            </li>

                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
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
                              {res?.user?.id === isauthuserID
                                ? `${
                                    res?.friend?.religion
                                      ? capitalizeFirstLetter(
                                          res.friend.religion
                                        )
                                      : 'NA'
                                  }, ${
                                    res?.user?.caste
                                      ? capitalizeFirstLetter(res.user.caste)
                                      : 'NA'
                                  }`
                                : `${
                                    res?.friend?.religion
                                      ? capitalizeFirstLetter(
                                          res.friend.religion
                                        )
                                      : 'NA'
                                  }, ${
                                    res?.user?.caste
                                      ? capitalizeFirstLetter(res.user.caste)
                                      : 'NA'
                                  }`}
                            </li>

                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
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
                              {res?.user?.id === isauthuserID
                                ? `${capitalizeFirstLetter(
                                    res?.friend?.address?.currentCity ?? 'NA'
                                  )}, ${capitalizeFirstLetter(
                                    res?.friend?.address?.currentCountry ?? 'NA'
                                  )}`
                                : `${capitalizeFirstLetter(
                                    res?.user?.address?.currentCity ?? 'NA'
                                  )}, ${capitalizeFirstLetter(
                                    res?.user?.address?.currentCountry ?? 'NA'
                                  )}`}
                            </li>

                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
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
                              {res?.user?.id === isauthuserID
                                ? `${capitalizeFirstLetter(
                                    res?.friend?.motherTongue ?? 'NA'
                                  )}`
                                : `${capitalizeFirstLetter(
                                    res?.user?.motherTongue ?? 'NA'
                                  )}`}
                            </li>
                            <li
                              className='text-[14px] 2xl:text-[14px] xl:text-[13px] text-[#000] dark:text-[#FFF]'
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
                              {res?.user?.id === isauthuserID
                                ? `${capitalizeFirstLetter(
                                    res?.friend?.userProfessional?.jobTitle ??
                                      'NA'
                                  )}`
                                : `${capitalizeFirstLetter(
                                    res?.user?.userProfessional?.jobTitle ??
                                      'NA'
                                  )}`}
                            </li>
                          </ul>
                        </div>
                        <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                          <ShowMore
                            userid={
                              res?.user?.id === isauthuserID
                                ? res?.friend?.id
                                : res?.user?.id
                            }
                            text={
                              res?.user?.id === isauthuserID
                                ? res?.friend?.writeBoutYourSelf
                                : res?.user?.writeBoutYourSelf
                            }
                            maxLength={100}
                          />
                        </div>
                      </div>
                      <div className='flex justify-end items-center mt-[20px] lg:mt-0 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]'>
                        <div className='absolute right-[140px] bottom-[40px]'>
                          <ul className='flex space-x-[10px] items-center'>
                            <li>
                              <h1
                                className='text-[16px] 2xl:text-[16px] xl:text-[14px]'
                                style={ProfileStyle?.BoldText}
                              >
                                Ignored
                              </h1>
                            </li>
                            <li>
                              <Image
                                loading='lazy'
                                alt='dislike-icon'
                                width={24}
                                height={23}
                                src='/assests/Black/dislike-2.svg'
                              />
                            </li>
                          </ul>
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

      <ProfileDataNotFound ProfileData={data?.data?.results} />
    </>
  )
}

export default CanceledProfile
