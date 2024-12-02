import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchshortlistUsers } from '../../../../../store/matrimoney-services/slices/getShortlistUsersSlice'
import Pagination from '../../../../../components/common/Features/Pagination'
import Avatar from 'react-avatar'
import Link from 'next/link'
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import ProfileSkeletonLoader from '../../../../../components/common/animation/GridSkeleton'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import { RemoveShortlist } from '../../../../../store/actions/GetingAlluser'
import GridLikeButton from '../../../../_components/common/Buttons/LikeSections/GridLikeButton'
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound'
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal'

function GridUserProfile () {
  const profileStyles = useMemo(
    () => ({
      ProfileName: {
        color: '#000',
        fontFamily: 'Poppins',
        fontWeight: '600',
        lineHeight: 'normal'
      },
      ListText: {
        color: '#000',
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: '24px'
      },
      Text4: {
        color: '#000',
        fontFamily: 'Poppins',
        fontWeight: '400',
        lineHeight: '12px'
      },
      ProfileCard: {
        borderRadius: '10px',
        background: '#FFF',
        boxShadow: '0px 0px 14px 0px rgba(0, 0, 0, 0.07)'
      }
    }),
    []
  )

  const dispatch = useDispatch()

  const Urlmodaltext = {
    color: '#000',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const { userData, totalPages, status } = useSelector(
    state => state.shortlistusers
  )

  const [currentPage, setCurrentPage] = useState(1)

  const [openShortlistModal, setopenShortlistModal] = React.useState(false)

  const [shortlistText, setshortlistText] = useState()

  const Pages = {
    currentPage: currentPage,
    viewType: 'Gridview'
  }

  useEffect(() => {
    dispatch(fetchshortlistUsers(Pages))
  }, [currentPage, dispatch])

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const HandleRemoveShortlist = res => {
    dispatch(RemoveShortlist(res?.id || res?._id))
    setshortlistText('Shortlisted has been removed')
    setopenShortlistModal(true)
    setTimeout(() => {
      setopenShortlistModal(false)
      dispatch(fetchshortlistUsers(Pages))
    }, 800)
  }

  return (
    <>
      <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
        <div className=' w-full space-x-[10px]   relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
          <div className=''></div>

          {status === 'loading' ? (
            <ProfileSkeletonLoader ViewType={6} />
          ) : (
            <>
              {userData?.[0]?.paginatedResults?.map((res, index) => {
                return (
                  <div
                    key={index}
                    style={profileStyles?.ProfileCard}
                    className='inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'
                  >
                    <div className='mt-2 flex justify-between pt-[10px]'>
                      <ul className='pl-[10px] flex space-x-[10px]'>
                        <li
                          className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`}
                        >
                          <MatchScoreModal user={res} />
                        </li>
                      </ul>
                      <ul className='pr-[10px] flex space-x-[30px]'>
                        <li>
                          <li>
                            <div className='mr-[6px]'>
                              <Image
                                loading='lazy'
                                onClick={() => HandleRemoveShortlist(res)}
                                alt='star-icon'
                                className='absolute'
                                width={15}
                                height={14}
                                src={'/assests/Black/filled-star.svg'}
                              />
                            </div>
                          </li>
                        </li>
                        <li>
                          <ProfileMenu res={res?.user} Section={'Shortlist'} />
                        </li>
                      </ul>
                    </div>
                    {/* <div className='flex justify-between pt-[10px]'>
                      <ul className='pl-[10px] flex space-x-[10px]'>
                        <li>
                          <Image
                            alt='icon-1'
                            width={17}
                            height={14}
                            src='/assests/Black/Couple2.svg'
                          />
                        </li>
                        <li
                          className='text-[10px]'
                          style={profileStyles?.Text4}
                        >
                          You & Her{' '}
                        </li>
                      </ul>
                      <ul className='pr-[10px] flex space-x-[30px]'>
                        <li
                          className='cursor-pointer'
                          onClick={() => HandleRemoveShortlist(res)}
                        >
                          <div className='cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]'>
                            <Image
                              loading='lazy'
                              width={15}
                              height={14}
                              alt='star'
                              src={'/assests/Black/filled-star.svg'}
                            />
                          </div>
                        </li>
                        <li>
                          <ProfileMenu res={res?.user} Section={'Shortlist'} />
                        </li>
                      </ul>
                    </div> */}

                    <div className='flex justify-center'>
                      <Link
                        className='w-[100px] h-[100px] rounded-[50%]'
                        href={`/longterm/dashboard/${res?.user?._id}`}
                      >
                        <div className='w-[100px] h-[100px] rounded-[50%] flex justify-center hover:opacity-80'>
                          {res?.user?.profilePic ? (
                            <>
                              {/* <Image quality={45} loading='lazy' alt='profile-pic' width={100} height={100} style={{ objectFit: "cover" }} className='w-[100px] h-[100px] rounded-[50%]' src={res?.user?.profilePic} /> */}
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
                                />
                              </Link>
                            </>
                          )}
                        </div>
                      </Link>
                    </div>
                    <div className='text-center'>
                      <Link href={`/longterm/dashboard/${res?.user?._id}`}>
                        <h1
                          style={profileStyles?.ProfileName}
                          className='text-[18px]'
                        >
                          {capitalizeFirstLetter(res?.user?.name)}
                        </h1>
                      </Link>
                      <p
                        style={profileStyles?.ListText}
                        className='text-[14px]'
                      >{`32, ${res?.user?.height || 'NA'}`}</p>
                      <p
                        style={profileStyles?.ListText}
                        className='text-[14px]'
                      >
                        {`${
                          capitalizeFirstLetter(res?.user?.religion) || 'NA'
                        } , ${capitalizeFirstLetter(res?.user?.caste) || 'NA'}`}
                      </p>
                      <p
                        style={profileStyles?.ListText}
                        className='text-[14px]'
                      >
                        {capitalizeFirstLetter(res?.user?.maritalStatus) ||
                          'NA'}
                      </p>
                    </div>

                    <GridLikeButton
                      userId={res?.user?.id || res?.user?._id}
                      TheUsername={res?.user?.name}
                      userdata={res?.user}
                    />
                  </div>
                )
              })}{' '}
            </>
          )}
        </div>
        {/* {userData[0]?.paginatedResults?.length > 0 ? ( */}
        {/* <> */}
        <Pagination
          currentPage={currentPage}
          totalPages={userData[0]?.totalPages}
          onPageChange={handlePageChange}
          darkMode={false}
        />
        {/* </>
        ) : (
          ''
        )} */}
      </div>

      <ProfileDataNotFound ProfileData={userData[0]?.paginatedResults} />
    </>
  )
}

export default GridUserProfile
