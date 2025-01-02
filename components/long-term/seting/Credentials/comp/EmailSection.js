import React from 'react'
import { ResetEmailPasswordFirstStep } from '../../../../../store/actions/SignupAction'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

function EmailSection ({ handleCloseModal, SetallCred, allCred }) {
  const {
    data: userprofile,
    status,
    totalLikes
  } = useSelector(state => state.myprofile)

  const { loading, step } = useSelector(state => state.signUp.ResetPassword)

  // For Email

  const dispatch = useDispatch()

  const SendCode = () => {
    dispatch(ResetEmailPasswordFirstStep(userprofile?.email))
    SetallCred(prev => ({
      ...prev,
      email: userprofile?.email
    })) // store Email Cookie
  }

  return (
    <>
      <div>
        <h1 className='text-[13px] lg:text-[16px] xl:text-[20px]  text-center'>
          Enter Email
        </h1>
      </div>
      <h1 className='text-[10px] xl:text-[12px] mt-[20px] lg:mt-[25px] xl:mt-[30px] font-medium'>
        Enter Email
      </h1>
      <div className='flex place-items-center w-[100%]  h-[37px] lg:h-[43px] xl:h-[50px] mt-[1%]  border-[1px] border-[#E6E6E6] rounded-[8px] px-[15px] '>
        <input
          name='email'
          type={'email'}
          value={userprofile?.email}
          className=' w-full h-full outline-none text-[12px] lg:text-[14px]  xl:text-[16px] '
        />
      </div>

      <div className='flex gap-x-[5%] mt-[15px] lg:mt-[20px] xl:mt-[30px] '>
        <button
          onClick={handleCloseModal}
          className='w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px] border-[1px] border-[#8225AF] hover:bg-[#F3F8FF]'
        >
          <h1 className='text-[12px] lg:text-[14px] xl:text-[16px] '>
            Not Now
          </h1>
        </button>
        <button
          onClick={SendCode}
          id='grad-button'
          className='w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px]'
        >
          {!loading ? (
            <h1 className='text-[12px] lg:text-[14px] xl:text-[16px] text-[white]'>
              Continue
            </h1>
          ) : (
            <Image
              loading='lazy'
              alt='loader'
              width={25}
              height={25}
              className='animate-spin inline '
              src='/assests/animation/loaderIcon.svg'
            />
          )}
        </button>
      </div>
    </>
  )
}

export default EmailSection
