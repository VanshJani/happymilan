import React from 'react'
import { logoutuser } from '../../../../../store/actions/UsersAction'
import { RESET_PASSWORD_STEP } from '../../../../../store/type'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

function SuccessSection ({ handleCloseModal }) {
  const dispatch = useDispatch()
  const router = useRouter()

  const HandleNextStep = () => {
    dispatch({
      type: RESET_PASSWORD_STEP
    })

    dispatch(logoutuser())
    router.push('/login')
    handleCloseModal()
  }

  return (
    <>
      <div className='space-y-14 pt-2 pb-2'>
        <div className=''>
          <h1 className='text-[13px] lg:text-[16px] xl:text-[20px]  text-center'></h1>
          <div className='flex justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='0'
              height='0'
              viewBox='0 0 44 44'
              className='w-[40px] lg:w-[44px] h-[44px]'
              fill='none'
            >
              <path
                d='M18.4838 31.5522L34.1188 15.9171L32.3889 14.1872L18.4838 28.0923L11.5171 21.1256L9.78719 22.8556L18.4838 31.5522ZM22.0082 44C18.966 44 16.1058 43.4227 13.4276 42.2682C10.7494 41.1136 8.41975 39.5466 6.43861 37.5674C4.45751 35.5881 2.88913 33.2607 1.73348 30.585C0.577826 27.9093 0 25.0504 0 22.0082C0 18.966 0.577276 16.1058 1.73183 13.4276C2.88642 10.7494 4.45335 8.41975 6.43262 6.43861C8.41188 4.45751 10.7393 2.88913 13.415 1.73348C16.0907 0.577828 18.9496 0 21.9918 0C25.034 0 27.8942 0.577275 30.5724 1.73183C33.2506 2.88642 35.5803 4.45335 37.5614 6.43262C39.5425 8.41188 41.1109 10.7393 42.2665 13.415C43.4222 16.0907 44 18.9496 44 21.9918C44 25.034 43.4227 27.8942 42.2682 30.5724C41.1136 33.2506 39.5466 35.5803 37.5674 37.5614C35.5881 39.5425 33.2607 41.1109 30.585 42.2665C27.9093 43.4222 25.0504 44 22.0082 44ZM22 41.5556C27.4593 41.5556 32.0833 39.6611 35.8722 35.8722C39.6611 32.0833 41.5556 27.4593 41.5556 22C41.5556 16.5407 39.6611 11.9167 35.8722 8.12778C32.0833 4.33889 27.4593 2.44444 22 2.44444C16.5407 2.44444 11.9167 4.33889 8.12778 8.12778C4.33889 11.9167 2.44444 16.5407 2.44444 22C2.44444 27.4593 4.33889 32.0833 8.12778 35.8722C11.9167 39.6611 16.5407 41.5556 22 41.5556Z'
                fill='#0F52BA'
              />
            </svg>
          </div>
        </div>
        <div>
          <div className='flex justify-center '>
            <h1 className='text-[12px] lg:text-[16px] xl:text-[18px] font-medium'>
              Password has been changed
            </h1>
          </div>
          <div className='flex justify-center '>
            <h1 className='text-[9px] lg:text-[11px] xl:text-[12px] font-medium'>
              please login again to confirm the credentials
            </h1>
          </div>
        </div>
        <div className='flex justify-center'>
          <button
            id='grad-button'
            onClick={HandleNextStep}
            className='w-[50%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px] '
          >
            <h1 className='text-[12px] lg:text-[14px] xl:text-[16px] text-[white]'>
              Login Again
            </h1>
          </button>
        </div>
      </div>
    </>
  )
}

export default SuccessSection
