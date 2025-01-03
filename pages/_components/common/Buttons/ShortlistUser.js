import Image from 'next/image'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Dialog } from '@mui/material'
import {
  addToShortlist,
  RemoveShortlist
} from '../../../../store/actions/GetingAlluser'
import { GetrecentuserprofileData } from '../../../../store/actions/UsersAction'
import { fetchFriends } from '../../../../store/matrimoney-services/slices/UserSentRequestPagination'

function ShortlistUser ({ UserId, UserDetail, Section }) {
  const [shortlistedUser, SetshortlistedUser] = useState(false)

  const dispatch = useDispatch()
  const [openShortlistModal, setopenShortlistModal] = React.useState(false)

  const [shortlistText, setshortlistText] = useState()

  const HandleShortlist = () => {
    if (UserDetail?.userShortListDetails) {
      // Remove from shortlist
      dispatch(
        RemoveShortlist(
          UserDetail?.userShortListDetails?.id ||
            UserDetail?.userShortListDetails?._id
        )
      )
      setshortlistText('Shortlist has been removed')
      setopenShortlistModal(true)
      setTimeout(() => {
        setopenShortlistModal(false)
        if (Section == 'RecentlyView') {
          dispatch(GetrecentuserprofileData())
        } else if (Section == 'Sent') {
          dispatch(fetchFriends('ListView', { currentPage: 1 }))
        }
      }, 800)
    } else {
      // Add to shortlist
      dispatch(addToShortlist(UserId)) // Dispatch the action with the shortlist ID

      setshortlistText('Profile has been shortlisted')
      setopenShortlistModal(true)
      setTimeout(() => {
        setopenShortlistModal(false)
        if (Section == 'RecentlyView') {
          dispatch(GetrecentuserprofileData())
        } else if (Section == 'Sent') {
          dispatch(fetchFriends('ListView', { currentPage: 1 }))
        }
      }, 800)
    }

    // if (data?.userShortListDetails) {
    //   dispatch(RemoveShortlist(alreadyshortlist?.id || alreadyshortlist?._id))
    //   SetshortlistedUser(!shortlistedUser)
    //   setshortlistText('Profile has been unshortlisted')
    //   setopenShortlistModal(true)
    //   setTimeout(() => {
    //     setopenShortlistModal(false)
    //   }, 800)
    // } else {
    //   SetshortlistedUser(!shortlistedUser)
    //   dispatch(addToShortlist(UserId)) // Dispatch the action with the shortlist ID

    //   setshortlistText('Profile has been shortlisted')
    //   setopenShortlistModal(true)
    //   setTimeout(() => {
    //     setopenShortlistModal(false)
    //   }, 800)
    // }
  }

  const Urlmodaltext = {
    color: '#000',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const [hovericon, sethovericon] = useState(false)

  return (
    <>
      <div
        className='mr-[6px] '
        onMouseEnter={() => sethovericon(true)}
        onMouseLeave={() => sethovericon(false)}
      >
        {/* <div className='w-[25px] h-[25px] border-[1px] border-[black] grid place-items-center rounded-full  hover:bg-[#F2F7FF] dark:hover:bg-[#383838]'> */}
        <div>
          <Image
            loading='lazy'
            onClick={HandleShortlist}
            alt='star-icon'
            className='absolute'
            width={15}
            height={14}
            src={
              UserDetail?.userShortListDetails || hovericon
                ? // || alreadyshortlist !== null
                  '/assests/Black/filled-star.svg'
                : '/assests/Black/Stars-2.svg'
            }
          />
        </div>
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
            <div className='text-[14px]' style={Urlmodaltext}>
              <span className='text-[#fff]'> {shortlistText}</span>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
    </>
  )
}

export default ShortlistUser
