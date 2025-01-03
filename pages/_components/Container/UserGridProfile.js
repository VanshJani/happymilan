import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import Pagination from '../../../components/common/Features/Pagination'
import ProfileSkeletonLoader from '../../../components/common/animation/GridSkeleton'
import { userDatas } from '../../../store/actions/GetingAlluser'
import MatchScoreModal from '../Model/Models/MatchScoreModal'
import GridprofileLayout from '../../../components/ui/dashboard/Profile/GridProfile/GridprofileLayout'

// Dynamically imported components
const ProfileMenu = dynamic(
  () => import('../../../components/long-term/common/Model/ProfileMenu'),
  {
    ssr: false
  }
)

function UserGridProfile () {
  const { data, loading } = useSelector(state => state?.alluser?.Ifinit)
  const dispatch = useDispatch()

  const [page, setpage] = useState(1)

  const NextPage = page => {
    setpage(page)
  }

  useEffect(() => {
    dispatch(userDatas({ page }))
  }, [page])

  return (
    <>
      <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
        <div className=' w-[90%] xl:w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[10px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
          <div className=''></div>

          {loading ? (
            <>
              <ProfileSkeletonLoader ViewType={6} />
            </>
          ) : (
            <>
              {
                // UserGridProfile
                data?.data?.[0]?.paginatedResults?.map((user, index) => {
                  return (
                    <GridprofileLayout
                      user={user}
                      index={index}
                      showButton={true}
                      children={{
                        ProfileMenu: () => (
                          <>
                          
                            <ProfileMenu res={user} Section={'Grid'} accepteddata={user}/>
                          </>
                        ),
                        MatchScoreModal: () => (
                          <>
                            <MatchScoreModal user={user} />
                          </>
                        )
                      }}
                    />
                  )
                })
              }
            </>
          )}
        </div>
        <Pagination
          currentPage={data?.data?.[0]?.currentPage}
          totalPages={data?.data?.[0]?.totalPages}
          onPageChange={NextPage}
          darkMode={false}
          URL={'/longterm/dashboard/'}
        />
      </div>
    </>
  )
}

export default UserGridProfile
