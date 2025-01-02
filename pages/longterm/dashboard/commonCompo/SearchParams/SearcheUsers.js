import React from 'react'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import GridprofileLayout from '../../../../../components/ui/dashboard/Profile/GridProfile/GridprofileLayout'
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal'

function SearchUsers ({ searchResults }) {
  return (
    <>
      <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
        <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
          <div className=''></div>

          {
            // UserGridProfile
            searchResults?.map((user, index) => {
              return (
                <GridprofileLayout
                  user={user}
                  index={index}
                  showButton={true}
                  children={{
                    ProfileMenu: () => (
                      <>
                        <ProfileMenu
                          res={user}
                          Section={'Grid'}
                          accepteddata={user}
                        />
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
        </div>
      </div>
    </>
  )
}

export default SearchUsers
