import React, { useEffect } from 'react'
import AuthNavbar from '../_components/layout/AuthNavbar'
import GlobalFooter from '../_components/layout/GlobalFooter'
import { useDispatch } from 'react-redux'
import { FetchSuccessStories } from '../../store/actions/UserStoryAction'
import StoryBox from './addstories/comp/StoryBox'

function index () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchSuccessStories())
  }, [])

  return (
    <>
      <AuthNavbar />

      <StoryBox />

      <div
        id='footer-section'
        className='border-t-[1px] border-t-[#DEDEDE] w-full mt-[100px]'
      >
        <GlobalFooter />
      </div>
    </>
  )
}

export default index
