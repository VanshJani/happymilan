import React from 'react'
import { useSelector } from 'react-redux'
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import GridprofileLayout from '../../../../../components/ui/dashboard/Profile/GridProfile/GridprofileLayout'

function GridUser () {
  const { data } = useSelector(state => state.usersact.recentusersdata)

  return (
    <>
      <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
        <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
          <div className=''></div>

          {data?.map((user, index) => {
            return (
              <GridprofileLayout
                user={user?.viewerId}
                index={index}
                showButton={true}
                children={{
                  ProfileMenu: () => (
                    <>
                      <ProfileMenu
                        res={user?.viewerId}
                        Section={'recentview'}
                        accepteddata={user?.viewerId}
                      />
                    </>
                  ),
                  MatchScoreModal: () => (
                    <>
                      <MatchScoreModal user={user?.viewerId} />
                    </>
                  )
                }}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GridUser
