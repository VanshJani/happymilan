import Image from 'next/image'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShortlistUser from '../../../../_components/common/Buttons/ShortlistUser'
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal'
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound'
import { Getcancelrequestdata } from '../../../../../store/actions/UsersAction'

function GridUserCancel () {
  const ProfileStyle = useMemo(() => ({
    ProfileName: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal'
    },

    ListText: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px' /* 171.429% */
    },

    ProfileCard: {
      borderRadius: '10px',
      background: '#FFF',
      boxShadow: '0px 0px 14px 0px rgba(0, 0, 0, 0.07)'
    }
  }))

  const { loading, data } = useSelector(state => state.usersact.cancelusersdata)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(Getcancelrequestdata())
  }, [])

  return (
    <>
      <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
        <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
          <div className=''></div>

          {data?.data?.results?.map((res, index) => {
            return (
              <div
                key={user.id}
                style={ProfileStyle?.ProfileCard}
                className='inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'
              >
                <div className='mt-2 flex justify-between pt-[10px]'>
                  <ul className='pl-[10px] flex space-x-[10px]'>
                    <li
                      className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`}
                    >
                      <MatchScoreModal user={res?.user} />
                    </li>
                  </ul>
                  <ul className='pr-[10px] flex space-x-[30px]'>
                    <li>
                      <li>
                        <ShortlistUser UserId={res?.user?.id} />
                      </li>
                    </li>
                    <li>
                      <ProfileMenu
                        Sections={'Grid'}
                        SetCurURL={SetCurURL}
                        openBlockModal={openBlockModal}
                        OpenReportModal={OpenReportModal}
                        openModal={openModal}
                        res={user}
                      />
                    </li>
                  </ul>
                </div>
                <div
                  onClick={() => HandleVisitProfile(user)}
                  className='flex justify-center '
                >
                  {res?.user?.profilePic ? (
                    <>
                      <Image
                        quality={45}
                        loading='lazy'
                        alt='profile-pic'
                        width={100}
                        height={100}
                        style={{ objectFit: 'cover' }}
                        className='hover:opacity-70 duration-150 w-[100px] h-[100px] rounded-[50%]'
                        src={res?.user?.profilePic}
                      />
                    </>
                  ) : (
                    <>
                      <Avatar
                        name={res?.user?.name}
                        round
                        size='100'
                        className='hover:opacity-70 duration-150'
                      />
                    </>
                  )}
                </div>
                <div className='text-center'>
                  <h1
                    style={ProfileStyle?.ProfileName}
                    className=' text-[#000] dark:text-[#FFF] text-[18px]'
                  >
                    {res?.user?.name}
                  </h1>
                  <p
                    style={ProfileStyle?.ListText}
                    className=' text-[#000] dark:text-[#FFF] text-[14px]'
                  >
                    {res?.user?.age || 'NA'}, {res?.user?.heigh || 'NA'}”
                  </p>
                  <p
                    style={ProfileStyle?.ListText}
                    className=' text-[#000] dark:text-[#FFF] text-[14px]'
                  >
                    {res?.user?.religion || 'NA'}, {res?.user?.caste || 'NA'}
                  </p>
                  <p
                    style={ProfileStyle?.ListText}
                    className=' text-[#000] dark:text-[#FFF] text-[14px]'
                  >
                    {res?.user?.maritalStatus || 'NA'}
                  </p>
                </div>
                <div className='absolute right-[140px] bottom-[40px]'>
                  <ul className='flex space-x-[10px] items-center'>
                    <li>
                      <h1
                        className='text-[16px] 2xl:text-[16px] xl:text-[14px]'
                        style={BoldText}
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
            )
          })}
        </div>

        <ProfileDataNotFound ProfileData={data?.data?.results} />
        <div className='flex pt-[50px] space-x-[40px] justify-center items-center w-auto 2xl:w-full xl:w-full'>
          <div
            id='active-no'
            className=' cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'
          >
            1
          </div>
          <div
            id='pagination-count'
            className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'
          >
            2
          </div>
          <div
            id='pagination-count'
            className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'
          >
            3
          </div>
          <div
            id='pagination-count'
            className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'
          >
            4
          </div>
        </div>
      </div>
    </>
  )
}

export default GridUserCancel
