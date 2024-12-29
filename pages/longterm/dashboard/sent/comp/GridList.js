import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import Pagination from '../../../../../components/common/Features/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFriends } from '../../../../../store/matrimoney-services/slices/UserSentRequestPagination'
import ProfileSkeletonLoader from '../../../../../components/common/animation/GridSkeleton'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal'
import styles from '../../../../../styles/styles.module.css'
import GridprofileLayout from '../../../../../components/ui/dashboard/Profile/GridProfile/GridprofileLayout'

function GridList () {
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
    }),
    []
  )

  const dispatch = useDispatch()

  const { userData, totalPages, status } = useSelector(
    state => state.getsentrequestdata
  )

  const [currentPage, setCurrentPage] = useState(1)

  const Pages = {
    currentPage: currentPage
  }

  useEffect(() => {
    dispatch(fetchFriends('Gridview', Pages))
  }, [currentPage, setCurrentPage])

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <>
      <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
        <div className=' w-[90%] xl:w-full space-x-[10px] relative 2xl:left-0 xl:left-[10px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
          <div className=''></div>
          {status === 'loading' ? (
            <ProfileSkeletonLoader ViewType={6} />
          ) : (
            <>
              {userData?.map((res, index) => {
                return (
                  <GridprofileLayout
                    user={res?.friend}
                    index={index}
                    showButton={false}
                    children={{
                      ProfileMenu: () => (
                        <>
                          <ProfileMenu res={res?.friend} Section={'sent'} accepteddata={res?.friend} />
                        </>
                      ),
                      MatchScoreModal: () => (
                        <>
                          <MatchScoreModal user={res?.friend} />
                        </>
                      ),
                      ButtonUI: () => (
                        <div className='grid place-items-center space-y-[14px]'>
                          <div>
                            <div className='w-[148px] bg-[#EEEEEE] h-[1px]'></div>
                          </div>

                          <ul className='flex space-x-[10px]'>
                            <li>
                              <h1
                                className={`${styles.BoldText} text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]`}
                              >
                                Sent
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
                      )
                    }}
                  />
                )
              })}{' '}
            </>
          )}
        </div>
        {userData.length > 0 ? (
          <>
            {' '}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              darkMode={false}
            />{' '}
          </>
        ) : (
          ''
        )}
      </div>

      {userData.length === 0 && (
        <div className='h-[500px] grid place-items-center'>
          <div className='grid place-items-center space-y-[5px]'>
            <Image
              loading='lazy'
              alt='not-found'
              width={34}
              height={34}
              src={'/assests/dashboard/icon/NotFound-img.svg'}
            />
            <h1 className='inline' style={profileStyles?.ImageNotFoundText}>
              No Profiles Found
            </h1>
          </div>
        </div>
      )}
    </>
  )
}

export default GridList
