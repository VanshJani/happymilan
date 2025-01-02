import { useFormik } from 'formik'
import React, { useState } from 'react'
import { ResetEmailPasswordThirdStep } from '../../../../../store/actions/SignupAction'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { PasswordSchema } from '../../../../../utils/Schema/SignupSchema'

function PasswordSection ({ handleCloseModal, allCred }) {
  const dispatch = useDispatch()

  const {
    data: userprofile,
    status,
    totalLikes
  } = useSelector(state => state.myprofile)

  const initialState = {
    password: '',
    confirmPassword: ''
  }

  const { loading, step } = useSelector(state => state.signUp.ResetPassword)

  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: initialState,
      validationSchema: PasswordSchema,
      onSubmit: values => {
        // dispatch(ResetEmailPasswordThirdStep())
        dispatch(
          ResetEmailPasswordThirdStep({
            email: userprofile?.email,
            password: values?.password,
            otp: allCred.otp
          })
        )
      }
    })

  const ErrorsText = {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '9px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const HintText = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const [ShowPass, SetShowPass] = useState({
    password: false,
    confirmPassword: false
  })

  return (
    <>
      <div>
        <h1 className='text-[13px] lg:text-[16px] xl:text-[20px]  text-center'>
          Choose Password
        </h1>
      </div>

      <div className='mt-5'>
        <ul className='space-y-[17px] grid place-items-center'>
          <li className='text-center'>
            <div className='flex'>
              <Image
                onClick={() =>
                  SetShowPass({
                    ...ShowPass,
                    password: !ShowPass.password
                  })
                }
                width={18}
                height={18}
                alt='password'
                className='absolute left-[auto] ml-[260px] mt-[15px]'
                src={
                  ShowPass.password
                    ? '/assests/login/view-pass.png'
                    : '/assests/login/hide-pass.png'
                }
              />
              <input
                type={ShowPass.password ? 'text' : 'password'}
                name='password'
                onChange={handleChange}
                value={values.password}
                placeholder='Choose Password'
                className='inline w-[300px] h-[50px] outline-none border-[1px] border-[#E6E6E6] hover:border-[#000] focus:border-[#000] pl-[23px] rounded-[8px] pr-[50px]'
              />
            </div>
            {errors.password && touched.password ? (
              <span style={ErrorsText}>{errors.password}</span>
            ) : null}
          </li>
          <li className='text-center'>
            <div className='flex'>
              <Image
                onClick={() =>
                  SetShowPass({
                    ...ShowPass,
                    confirmPassword: !ShowPass.confirmPassword
                  })
                }
                width={18}
                height={18}
                alt='password'
                className='absolute left-[auto] ml-[260px] mt-[15px]'
                src={
                  ShowPass.confirmPassword
                    ? '/assests/login/view-pass.png'
                    : '/assests/login/hide-pass.png'
                }
              />
              <input
                type={ShowPass.confirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                onChange={handleChange}
                value={values.confirmPassword}
                placeholder='Confirm Password'
                className='w-[300px] h-[50px] outline-none border-[1px] border-[#E6E6E6] hover:border-[#000] focus:border-[#000] pl-[23px] rounded-[8px] pr-[50px]'
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword ? (
              <span style={ErrorsText}>{errors.confirmPassword}</span>
            ) : null}
          </li>
        </ul>
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
          onClick={handleSubmit}
          id='grad-button'
          className='w-[100%] h-[37px] lg:h-[43px] xl:h-[50px] rounded-[23px]'
        >
          <h1 className='text-[12px] lg:text-[14px] xl:text-[16px] text-[white]'>
            {!loading ? (
              'Submit'
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
          </h1>
        </button>
      </div>
    </>
  )
}

export default PasswordSection
