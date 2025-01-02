import React, { useState } from 'react'
import OtpInput from '../../../../../pages/_components/Container/View/SignUp/OTPInp'
import { ResetEmailPasswordSecondStep } from '../../../../../store/actions/SignupAction'
import { useDispatch, useSelector } from 'react-redux'
import useOtpResend from '../../../../../utils/helpers/ResendCode'
import maskEmail from '../../../../../utils/helpers/MaskedEmail'
import Image from 'next/image'

function OtpSection ({ allCred, SetallCred }) {
  const {
    data: userprofile,
    status,
    totalLikes
  } = useSelector(state => state.myprofile)

  const { loading, step } = useSelector(state => state.signUp.ResetPassword)

  const { countdown, isCounting, startCountdown } = useOtpResend(60)

  const dispatch = useDispatch()

  const MaskEmail = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const ResendText = {
    color: '#A3A3A3',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const ResendCode = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const [CurrentOTP, SetCurrentOTP] = useState(0)
  const HandleSubmit = otp => {
    SetCurrentOTP(otp)
  }

  const SubmitOTP = () => {
    dispatch(
      ResetEmailPasswordSecondStep({
        email: userprofile?.email,
        otp: CurrentOTP //OTP Save in Cookie
      })
    )

    SetallCred(prev => ({
      ...prev,
      otp: CurrentOTP
    })) // store Email Cookie
  }

  return (
    <>
      <div className='space-y-12'>
        <div className=''>
          <h1 className='text-[13px] lg:text-[16px] xl:text-[20px]  text-center'>
            Verification Code
          </h1>
          <div className=' mt-[10px] '>
            <p style={MaskEmail} className='text-[12px] text-center'>
              Verification code sent {''} {maskEmail(userprofile?.email)}
            </p>
          </div>
        </div>

        <div className='grid place-items-center w-full'>
          <OtpInput length={4} onOtpSubmit={HandleSubmit} />
        </div>
        <div>
          {isCounting ? (
            <p style={ResendText}>
              Resend in{' '}
              <span className='text-[#000]'>{countdown}&nbsp;Sec.</span>
            </p>
          ) : (
            <p
              style={ResendCode}
              className='cursor-pointer'
              // onClick={startCountdown}
              onClick={() => startCountdown(allCred.email)}
            >
              Resend Code
            </p>
          )}
        </div>
        <div className='flex justify-center mt-[27px] md:mt-[30px] lg:mt-[45px] xl:mt-[50px] w-full'>
          <button
            onClick={SubmitOTP}
            id='grad-button'
            className='w-[45%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px]  text-[12px] lg:text-[14px] xl:text-[16px] text-[white]'
          >
            {!loading ? (
              'Confirm'
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
      </div>
    </>
  )
}

export default OtpSection
