import React, { useEffect, useMemo } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useDispatch, useSelector } from 'react-redux'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

// Actions
import { getblockuserdata } from '../../../../../store/actions/UsersAction'

// Context
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext'

// Utilities and Components
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import UserprofileSkeleton from '../../../../../components/common/shader/UserprofileSkeleton'
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import ShowMore from '../../../../_components/common/profile/UserBio'
import ShortlistUser from '../../../../_components/common/Buttons/ShortlistUser'

// Dynamic imports
const MatchScoreModal = dynamic(
  () => import('../../../../_components/Model/Models/MatchScoreModal'),
  { ssr: false }
)

function BlockedUser () {
  const { darkMode } = useDarkMode()

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
    }
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getblockuserdata())
  }, [])

  const { data, loading } = useSelector(state => state.usersact.blockuserdata)

  if (loading) {
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
                          className='mySwiper relative 2xl:w-[197px] xl:w-[187px] w-[185px] h-[260px]'
                        >
                          <SwiperSlide>
                            <Image
                              placeholder='blur'
                              blurDataURL='data:...'
                              alt={`img`}
                              width={197}
                              height={258}
                              style={{
                                width: '197px',
                                height: '258px',
                                borderRadius: '10px',
                                objectFit: 'cover'
                              }}
                              className='w-[197px] h-[258px]'
                              src={res?.friend?.profilePic}
                              loading='lazy'
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
                            {capitalizeFirstLetter(res?.friend?.name)}
                          </h1>
                          <h1
                            style={ProfileStyle?.statusText}
                            className={
                              res?.friend?.isUserActive
                                ? `text-[#17C270]`
                                : `text-[#7A7A7A]`
                            }
                          >
                            {res?.friend?.isUserActive
                              ? 'Online now'
                              : 'Offline'}
                          </h1>
                        </div>
                        <div className='pr-[8px]'>
                          <ul className='flex justify-evenly space-x-[26px] pr-[10px] pt-[10px]'>
                            <li
                              className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] flex space-x-[10px] top-[-8px] p-[5px] relative left-[5px]`}
                            >
                              <MatchScoreModal user={res?.friend} />
                            </li>
                            <li className='cursor-pointer'>
                              <ShortlistUser
                                UserId={res?.friend?.id || res?.friend?._id}
                              />
                            </li>
                            <li>
                              <ProfileMenu
                                accepteddata={res?.friend}
                                res={res?.friend}
                                Blockdata={res}
                                Section={'blocked'}
                                View={'ListView'}
                                blockprofile={true}
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
                              32, {res?.friend?.height}
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
                              {capitalizeFirstLetter(res?.friend?.religion) ||
                                'NA'}
                              ,{' '}
                              {capitalizeFirstLetter(res?.friend?.caste) ||
                                'NA'}
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
                              {capitalizeFirstLetter(
                                res?.friend?.motherTounge
                              ) || 'NA, NA'}
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
                              {capitalizeFirstLetter(
                                res?.friend?.maritalStatus
                              ) || 'NA, NA'}
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
                              {capitalizeFirstLetter(
                                res?.friend?.address?.currentCity
                              ) || 'NA'}
                              ,{' '}
                              {capitalizeFirstLetter(
                                res?.friend?.address?.currentCountry
                              ) || 'NA'}
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
                              {capitalizeFirstLetter(
                                res?.friend?.userProfessional?.jobTitle
                              ) || 'NA, NA'}
                            </li>
                          </ul>
                        </div>
                        <div className='mt-[20px] 2xl:mt-[20px] xl:mt-[15px]'>
                          <ShowMore
                            userid={res?.friend.id}
                            text={res?.friend?.writeBoutYourSelf || 'NA'}
                            maxLength={100}
                          />
                        </div>
                      </div>
                      <div className='flex justify-end items-center mt-[20px] lg:mt-0 2xl:mt-[20px] xl:mt-[20px] mr-[20px] space-x-[10px]'>
                        <ul className='flex space-x-[10px]'>
                          <li>
                            <h1
                              className='text-[16px] 2xl:text-[16px] xl:text-[14px]'
                              style={ProfileStyle?.BoldText}
                            >
                              Blocked by You
                            </h1>
                          </li>
                          <li>
                            <Image
                              loading='lazy'
                              alt='block'
                              width={23}
                              height={23}
                              src='/assests/Black/block-2.svg'
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

export default BlockedUser
