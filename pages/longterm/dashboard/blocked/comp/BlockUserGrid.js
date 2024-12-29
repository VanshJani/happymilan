import React, { useEffect } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getblockuserdata } from '../../../../../store/actions/UsersAction'

// Components
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound'
import GridprofileLayout from '../../../../../components/ui/dashboard/Profile/GridProfile/GridprofileLayout'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import ProfileSkeletonLoader from '../../../../../components/common/animation/GridSkeleton'

// Dynamic Imports
import dynamic from 'next/dynamic'
const MatchScoreModal = dynamic(
  () => import('../../../../_components/Model/Models/MatchScoreModal'),
  {
    ssr: false // Disable server-side rendering for this component
  }
)

function BlockUserGrid () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getblockuserdata())
  }, [])

  const { data, loading } = useSelector(state => state.usersact.blockuserdata)

  return (
    <>
      <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
        <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
          <div className=''></div>
          {loading ? (
            <>
              <ProfileSkeletonLoader ViewType={6} />
            </>
          ) : (
            data?.data?.results?.map((user, index) => {
              return (
                <GridprofileLayout
                  user={user?.friend}
                  index={index}
                  showButton={false}
                  children={{
                    ProfileMenu: () => (
                      <>
                        <ProfileMenu
                          res={user?.friend}
                          Section={'blocked'}
                          Blockdata={user}
                          blockprofile={true}
                        />
                      </>
                    ),
                    MatchScoreModal: () => (
                      <>
                        <MatchScoreModal user={user?.friend} />
                      </>
                    ),
                    ButtonUI: () => (
                      <>
                        <div className='grid place-items-center space-y-[14px]'>
                          <div>
                            <div className='w-[148px] bg-[#EEEEEE] h-[1px]'></div>
                          </div>

                          <ul className='flex space-x-[10px]'>
                            <li>
                              <p>Blocked</p>
                            </li>
                            <li>
                              <Image
                                loading='lazy'
                                alt='block'
                                width={20}
                                height={20}
                                src='/assests/Black/block-2.svg'
                              />
                            </li>
                          </ul>
                        </div>
                      </>
                    )
                  }}
                />
              )
            })
          )}
        </div>
      </div>

      <ProfileDataNotFound ProfileData={data?.data?.results} />
    </>
  )
}

export default BlockUserGrid
