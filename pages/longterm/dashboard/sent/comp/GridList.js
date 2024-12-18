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
                  //   <motion.div
                  //     variants={variants}
                  //     initial='hidden'
                  //     animate='visible'
                  //     transition={{
                  //       delay: index * 0.25,
                  //       ease: 'easeInOut',
                  //       duration: 0.5
                  //     }}
                  //     viewport={{ amount: 0 }}
                  //     key={index}
                  //     style={profileStyles?.ProfileCard}
                  //     className='inline-block lg:flex flex-col space-y-[8px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'
                  //   >
                  //     <div className='mt-2 flex justify-between pt-[10px]'>
                  //       <ul className='pl-[10px] flex space-x-[10px]'>
                  //         <li
                  //           className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`}
                  //         >
                  //           <MatchScoreModal user={res?.friend} />
                  //         </li>
                  //       </ul>
                  //       <ul className='pr-[10px] flex space-x-[30px]'>
                  //         <li>
                  //           <ShortlistUser
                  //             UserId={res?.friend?.id || res?.friend?._id}
                  //           />
                  //         </li>
                  //         <li>
                  //           <ProfileMenu res={res?.friend} Section={'sent'} />
                  //         </li>
                  //       </ul>
                  //     </div>
                  //     <div className='flex justify-center'>
                  //       <Link
                  //         className='w-[100px] h-[100px] rounded-[50%]'
                  //         href={`/longterm/dashboard/${res?.friend?._id}`}
                  //       >
                  //         <div className='w-[100px] h-[100px] rounded-[50%] flex justify-center hover:opacity-80'>
                  //           {res?.friend?.profilePic ? (
                  //             <>
                  //               <Link
                  //                 href={`/longterm/dashboard/${
                  //                   res?.friend?.id || res?.friend?._id
                  //                 }`}
                  //               >
                  //                 <Image
                  //                   quality={45}
                  //                   loading='lazy'
                  //                   alt='profile-pic'
                  //                   width={100}
                  //                   height={100}
                  //                   style={{ objectFit: 'cover' }}
                  //                   className='hover:opacity-70 duration-150 w-[100px] h-[100px] rounded-[50%]'
                  //                   src={res?.friend?.profilePic}
                  //                 />
                  //               </Link>
                  //             </>
                  //           ) : (
                  //             <>
                  //               <Link
                  //                 href={`/longterm/dashboard/${
                  //                   res?.friend?.id || res?.friend?._id
                  //                 }`}
                  //               >
                  //                 <Avatar
                  //                   name={res?.friend?.name}
                  //                   round
                  //                   size='100'
                  //                   className='hover:opacity-70 duration-150'
                  //                 />
                  //               </Link>
                  //             </>
                  //           )}
                  //         </div>
                  //       </Link>
                  //     </div>
                  //     <div className='text-center'>
                  //       <h1
                  //         style={profileStyles?.ProfileName}
                  //         className='text-[18px]'
                  //       >
                  //         {capitalizeFirstLetter(res?.friend?.name)}
                  //       </h1>
                  //       <p
                  //         style={profileStyles?.ListText}
                  //         className='text-[14px]'
                  //       >
                  //         32, 5’3”
                  //       </p>
                  //       <p
                  //         style={profileStyles?.ListText}
                  //         className='text-[14px]'
                  //       >
                  //         {' '}
                  //         {capitalizeFirstLetter(res?.friend?.religion) ||
                  //           'NA'},{' '}
                  //         {capitalizeFirstLetter(res?.friend?.caste) || 'NA'}
                  //       </p>
                  //       <p
                  //         style={profileStyles?.ListText}
                  //         className='text-[14px]'
                  //       >
                  //         {capitalizeFirstLetter(res?.friend?.maritalStatus) ||
                  //           'NA'}
                  //       </p>
                  //     </div>

                  //   <div className='grid place-items-center space-y-[14px]'>
                  //     <div>
                  //       <div className='w-[148px] bg-[#EEEEEE] h-[1px]'></div>
                  //     </div>

                  //     <ul className='flex space-x-[10px]'>
                  //       <li>
                  //         <h1
                  //           className={`${styles.BoldText} text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]`}
                  //         >
                  //           Sent
                  //         </h1>
                  //       </li>
                  //       <li>
                  //         <Image
                  //           loading='lazy'
                  //           alt='accepted'
                  //           width={23}
                  //           height={23}
                  //           src='/assests/dashboard/icon/accepted-right.svg'
                  //         />
                  //       </li>
                  //     </ul>
                  //   </div>
                  //   </motion.div>

                  <GridprofileLayout
                    user={res?.friend}
                    index={index}
                    showButton={false}
                    children={{
                      ProfileMenu: () => (
                        <>
                          <ProfileMenu res={res?.friend} Section={'sent'} />
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
