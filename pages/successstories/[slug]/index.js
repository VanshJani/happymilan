import React, { useEffect, useState } from 'react'
import AuthNavbar from '../../_components/layout/AuthNavbar'
import Footer from '../../_components/layout/Footer'
import { useRouter } from 'next/router'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import GlobalFooter from '../../_components/layout/GlobalFooter'
import ViewStorySec from '../addstories/comp/ViewStorySec'
import { useDispatch } from 'react-redux'
import {
  FetchIsLike,
  FetchSuccessStoriesByID,
  getTotalLikes,
  getTotalReadCounts
} from '../../../store/actions/UserStoryAction'

const ShareModal = dynamic(() =>
  import('../../_components/Model/Models/ShareModal')
)

function index () {
  const router = useRouter()

  const { slug } = router.query

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchSuccessStoriesByID(slug))
    dispatch(getTotalReadCounts(slug))
    dispatch(getTotalLikes(slug))
    dispatch(FetchIsLike(slug))
  }, [])

  return (
    <>
      <AuthNavbar />
      <div className='w-full h-full grid place-items-center'>
        {/* {renderTabContent()} */}
        <ViewStorySec />
        <div
          id='footer-section'
          className='bg-[#FFF] z-10 border-t-[1px] border-t-[#DEDEDE] w-full mt-[150px]'
        >
          <GlobalFooter />
        </div>
      </div>
    </>
  )
}

export default index
