import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetrecentuserprofileData } from '../../../store/actions/UsersAction'
import shuffledata from 'lodash/shuffle'
import ProfileMenu from '../../../components/long-term/common/Model/ProfileMenu'
import MatchScoreModal from '../Model/Models/MatchScoreModal'
import ProfileSkeletonLoader from '../../../components/common/animation/GridSkeleton'
import GridprofileLayout from '../../../components/ui/dashboard/Profile/GridProfile/GridprofileLayout'
import { useRouter } from 'next/router'

function RecentlyView () {
  const dispatch = useDispatch()

  const Text3 = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  useEffect(() => {
    dispatch(GetrecentuserprofileData())
  }, [])

  // Get the data and loading state from the store
  const { data, loading } = useSelector(state => state.usersact.recentusersdata)

  // State for shuffled data
  const [shuffleData, setShuffleData] = useState([])

  const [isHover, SetisHover] = useState(false)
  const router = useRouter()

  // Shuffle data whenever the `data` changes
  useEffect(() => {
    if (data) {
      setShuffleData(shuffledata(data)) // Assuming shuffledata is a function that processes the data
    }
  }, [data]) // Depend on `data`, not `dispatch`

  return (
    <>
      <div className='w-full grid place-items-start translate-x-10'>
        <div className='relative w-full'>
          {data?.length > 0 ? (
            <ul className='flex justify-between w-[620px] relative 2xl:left-[10px] xl:left-[65px] lg:left-[20px]'>
              <li>
                <h1 style={Text3} className='dark:text-[#FFF]  text-[16px]'>
                  Recently Viewed
                </h1>
              </li>
              <li>
                <div
                  onMouseEnter={() => SetisHover(true)}
                  onMouseLeave={() => SetisHover(false)}
                  onClick={() =>
                    router.push('/longterm/dashboard/recentlyviewed')
                  }
                  className='flex items-center space-x-[16px]'
                >
                  <h1
                    style={Text3}
                    className={`cursor-pointer text-[16px] dark:text-[#FFF]  ${
                      isHover ? 'text-[#000]' : 'text-[#BABABA]'
                    }`}
                  >
                    More Profiles
                  </h1>
                  <svg
                    className='cursor-pointer'
                    xmlns='http://www.w3.org/2000/svg'
                    width='8'
                    height='14'
                    viewBox='0 0 8 14'
                    fill='none'
                  >
                    <path
                      d='M6.2565 7.01264L0 0.730859L0.730859 0L7.71822 7.01264L0.730859 14L0 13.2691L6.2565 7.01264Z'
                      fill={isHover ? '#000' : '#E1E1E1'}
                    />
                  </svg>
                </div>
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
        <div className=' inline-block space-y-[10px] relative 2xl:left-[-15px] left-[5px] pt-[10px] lg:flex flex-wrap xl:justify-center 2xl:justify-center space-x-[10px] 2xl:space-x-[25px] xl:space-x-[15px]'>
          <div></div>
          {loading ? (
            <>
              <ProfileSkeletonLoader ViewType={3} />
            </>
          ) : (
            <>
              {shuffleData?.slice(0, 3).map((item, index) => {
                return (
                  <GridprofileLayout
                    user={item.viewerId}
                    index={index}
                    showButton={true}
                    children={{
                      ProfileMenu: () => (
                        <>
                          <ProfileMenu res={item?.viewerId} accepteddata={item?.viewerId} />
                        </>
                      ),
                      MatchScoreModal: () => (
                        <>
                          <MatchScoreModal user={item?.viewerId} />
                        </>
                      )
                    }}
                  />
                )
              })}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default RecentlyView
