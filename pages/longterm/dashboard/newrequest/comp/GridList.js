import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal'
import ShortlistUser from '../../../../_components/common/Buttons/ShortlistUser'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import Link from 'next/link'
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import { Dialog } from '@mui/material'
import {
  acceptRequest,
  getFriendsList,
  rejectRequest
} from '../../../../../store/actions/UsersAction'
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound'
import Pagination from '../../../../../components/common/Features/Pagination'

function GridList () {
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
    },

    Urlmodaltext: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal'
    }
  }))

  const { data, loading } = useSelector(state => state.usersact.requestdata)

  const [openShortlistModal, setopenShortlistModal] = React.useState(false)

  const [shortlistText, setshortlistText] = useState()

  const dispatch = useDispatch()
  const HanldeAccept = res => {
    dispatch(acceptRequest('long-term', res))
    setshortlistText('Request accepted')
    setopenShortlistModal(true)
    setTimeout(() => {
      setopenShortlistModal(false)
      dispatch(getFriendsList())
    }, 800)
  }

  const HanldeReject = res => {
    dispatch(rejectRequest('long-term', res))

    setshortlistText('Request cancelled')
    setopenShortlistModal(true)
    setTimeout(() => {
      setopenShortlistModal(false)
      dispatch(getFriendsList())
    }, 800)
  }

  return (
    <>
      <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
        <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
          <div className=''></div>

          {data &&
            data.data &&
            data.data?.results.map((res, index) => {
              return (
                <>
                  <div
                    key={index}
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
                            <ShortlistUser
                              UserId={res?.user?.id || res?.user?._id}
                            />
                          </li>
                        </li>
                        <li>
                          <ProfileMenu res={res?.user} Section={'recentview'} />
                        </li>
                      </ul>
                    </div>
                    <div className='flex justify-center '>
                      {res?.user?.profilePic ? (
                        <>
                          <Link
                            href={`/longterm/dashboard/${
                              res?.user?.id || res?.user?._id
                            }`}
                          >
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
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            href={`/longterm/dashboard/${
                              res?.user?.id || res?.user?._id
                            }`}
                          >
                            <Avatar
                              name={res?.user?.name}
                              round
                              size='100'
                              className='hover:opacity-70 duration-150'
                            />
                          </Link>
                        </>
                      )}
                    </div>
                    <div className='text-center'>
                      <h1
                        style={ProfileStyle?.ProfileName}
                        className=' text-[#000] dark:text-[#FFF] text-[18px]'
                      >
                        {capitalizeFirstLetter(res?.user?.name)}
                      </h1>
                      <p
                        style={ProfileStyle?.ListText}
                        className=' text-[#000] dark:text-[#FFF] text-[14px]'
                      >
                        {res?.user?.age || 'NA'}, {res?.user?.height || 'NA'}”
                      </p>
                      <p
                        style={ProfileStyle?.ListText}
                        className=' text-[#000] dark:text-[#FFF] text-[14px]'
                      >
                        {capitalizeFirstLetter(res?.user?.religion) || 'NA'},{' '}
                        {capitalizeFirstLetter(res?.user?.caste) || 'NA'}
                      </p>
                      <p
                        style={ProfileStyle?.ListText}
                        className=' text-[#000] dark:text-[#FFF] text-[14px]'
                      >
                        {capitalizeFirstLetter(res?.user?.maritalStatus) ||
                          'NA'}
                      </p>
                    </div>
                    <div>
                      <div className='flex justify-center space-x-[21px]'>
                        <div
                          onClick={() => HanldeAccept(res)}
                          id='accept-request'
                          className='rounded-full border-[1px] border-[#17C270] w-[63px] h-[44px] grid place-items-center'
                        >
                          <svg
                            className='accept-icon-dt'
                            width='18'
                            height='14'
                            viewBox='0 0 18 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M6.15225 13.4522L0 7.29998L1.8915 5.40873L6.15225 9.66948L15.313 0.508728L17.2045 2.39998L6.15225 13.4522Z' />
                          </svg>
                        </div>

                        <div
                          onClick={() => HanldeReject(res)}
                          className='w-[63px] h-[44px] grid place-items-center'
                          id='cancel-dating'
                        >
                          <svg
                            className='cancel-icon-dt'
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              id='Vector'
                              d='M1.85225 14.9045L0 13.0523L5.6 7.45225L0 1.85225L1.85225 0L7.45225 5.6L13.0522 0L14.9045 1.85225L9.3045 7.45225L14.9045 13.0523L13.0522 14.9045L7.45225 9.3045L1.85225 14.9045Z'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
        </div>
        <Pagination
          currentPage={data?.data?.results}
          totalPages={data?.data?.results.totalPages}
          darkMode={false}
          URL={'/longterm/dashboard/newrequest'}
        />
      </div>

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
            <div className='text-[14px]' style={ProfileStyle?.Urlmodaltext}>
              <span className='text-[#fff]'> {shortlistText}</span>
            </div>
          </div>
        </Dialog>
      </React.Fragment>

      <ProfileDataNotFound ProfileData={data?.data?.results} />
    </>
  )
}

export default GridList
