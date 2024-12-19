import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetrecentuserprofileData } from '../../../store/actions/UsersAction'
import shuffledata from 'lodash/shuffle'
import ProfileMenu from '../../../components/long-term/common/Model/ProfileMenu'
import MatchScoreModal from '../Model/Models/MatchScoreModal'
import ProfileSkeletonLoader from '../../../components/common/animation/GridSkeleton'
import GridprofileLayout from '../../../components/ui/dashboard/Profile/GridProfile/GridprofileLayout'

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

  // Shuffle data whenever the `data` changes
  useEffect(() => {
    if (data) {
      setShuffleData(shuffledata(data)) // Assuming shuffledata is a function that processes the data
    }
  }, [data]) // Depend on `data`, not `dispatch`

  return (
    <>
      <div className='grid place-items-start translate-x-10'>
        <div className='relative '>
          {data?.length > 0 ? (
            <h1
              style={Text3}
              className='dark:text-[#FFF] relative 2xl:left-[10px] xl:left-[65px] lg:left-[20px] text-[16px]'
            >
              Recently Viewed
            </h1>
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
                          <ProfileMenu res={item?.viewerId} />
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
