import { Box, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import EmailSection from './comp/EmailSection'
import OtpSection from './comp/OtpSection'
import PasswordSection from './comp/PasswordSection'
import SuccessSection from './comp/SuccessSection'
import { useFormik } from 'formik'
import { PasswordSchema } from '../../../../utils/Schema/SignupSchema'
import toast, { Toaster } from 'react-hot-toast'
import { RESET_USER_CRED } from '../../../../store/type'
import { UpdateUserPassword } from '../../../../store/actions/UserSettingAction'

function PasswordUpdateModal ({
  handleCloseModal,
  openModal,
  SetAnotherWay,
  AnotherWay
}) {
  const dispatch = useDispatch()

  const { loading, step } = useSelector(state => state.signUp.ResetPassword)

  const {
    loading: passwordLoading,
    step: passwordStep,
    success,
    error
  } = useSelector(state => state.userseting.UpdateUserPassword)

  useEffect(() => {
    if (success) {
      toast.success(success)
      setTimeout(() => {
        dispatch({
          type: RESET_USER_CRED
        })
      }, 1000)
    } else if (error) {
      toast.error(error)
      setTimeout(() => {
        dispatch({
          type: RESET_USER_CRED
        })
      }, 1000)
    }
  }, [success, error])

  const [allCred, SetallCred] = useState({
    email: '',
    password: '',
    otp: ''
  })

  const renderAnotherWay = () => {
    //For Password

    switch (step) {
      case 0:
        return (
          <>
            <EmailSection
              handleCloseModal={handleCloseModal}
              SetallCred={SetallCred}
              allCred={allCred}
            />
          </>
        )
      case 1:
        return (
          <>
            <OtpSection
              SetallCred={SetallCred}
              allCred={allCred}
              setallCred={SetallCred}
            />
          </>
        )
      case 2:
        return (
          <>
            <PasswordSection
              handleCloseModal={handleCloseModal}
              allCred={allCred}
            />
          </>
        )
      case 3:
        return (
          <>
            <SuccessSection handleCloseModal={handleCloseModal} />
          </>
        )
    }
  }

  const renderTabContent2 = () => {
    const ErrorsText = {
      color: 'red',
      textAlign: 'center',
      fontFamily: 'Poppins',
      fontSize: '9px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal'
    }

    const initialState = {
      currentPassword: '',
      password: '',
      confirmPassword: ''
    }

    const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
      useFormik({
        initialValues: initialState,
        validationSchema: PasswordSchema,
        onSubmit: values => {
          dispatch(UpdateUserPassword(values))
        }
      })

    const [ShowPass, SetShowPass] = useState({
      currentPassword: false,
      password: false,
      confirmPassword: false
    })

    return (
      <>
        {AnotherWay ? (
          renderAnotherWay()
        ) : (
          <>
            {passwordStep != 1 ? (
              <>
                <div>
                  <h1 className='text-[13px] lg:text-[16px] xl:text-[20px]  text-center'>
                    Update Password
                  </h1>
                </div>
                <h1 className='text-[10px] xl:text-[12px] mt-[20px] lg:mt-[25px] xl:mt-[30px] font-medium'>
                  Enter Current Password
                </h1>
                <div className='flex place-items-center w-[100%]  h-[37px] lg:h-[43px] xl:h-[50px] mt-[1%]  border-[1px] border-[#E6E6E6] rounded-[8px] px-[15px] '>
                  <input
                    onChange={handleChange}
                    value={values?.currentPassword}
                    name='currentPassword'
                    type={ShowPass?.currentPassword ? 'text' : 'password'}
                    className=' w-full h-full outline-none text-[12px] lg:text-[14px]  xl:text-[16px] '
                  />
                  <Image
                    name='inptut1'
                    alt='show-password'
                    width={18}
                    height={14}
                    className='absolute right-[60px] mt-[-0px]'
                    onClick={() =>
                      SetShowPass(prev => ({
                        ...prev,
                        currentPassword: !prev.currentPassword
                      }))
                    }
                    src={
                      ShowPass?.currentPassword
                        ? '/assests/Blue/pass-view.png'
                        : '/assests/Blue/pass-hide.png'
                    }
                  />
                </div>

                <h1 className='text-[10px] xl:text-[12px] mt-[10px] lg:mt-[15px] xl:mt-[20px] font-medium'>
                  New Password
                </h1>
                <div className='flex place-items-center w-[100%]  h-[37px] lg:h-[43px] xl:h-[50px] mt-[1%]  border-[1px] border-[#E6E6E6] rounded-[8px] px-[15px] '>
                  <input
                    value={values?.password}
                    onChange={handleChange}
                    name='password'
                    type={ShowPass?.password ? 'text' : 'password'}
                    className=' w-full h-full outline-none text-[12px] lg:text-[14px]  xl:text-[16px] '
                  />
                  <Image
                    name='input2'
                    alt='show-password'
                    onClick={() =>
                      SetShowPass(prev => ({
                        ...prev,
                        password: !prev.password
                      }))
                    }
                    width={18}
                    height={14}
                    className='absolute right-[60px] mt-[-0px]'
                    src={
                      ShowPass?.password
                        ? '/assests/Blue/pass-view.png'
                        : '/assests/Blue/pass-hide.png'
                    }
                  />
                </div>
                {errors.password && touched.password ? (
                  <span style={ErrorsText}>{errors.password}</span>
                ) : null}
                <h1 className='text-[10px] xl:text-[12px] mt-[10px] lg:mt-[15px] xl:mt-[20px] font-medium'>
                  Confirm Password
                </h1>
                <div className='flex place-items-center w-[100%]  h-[37px] lg:h-[43px] xl:h-[50px] mt-[1%]  border-[1px] border-[#E6E6E6] rounded-[8px] px-[15px] '>
                  <input
                    value={values?.confirmPassword}
                    onChange={handleChange}
                    name='confirmPassword'
                    type={ShowPass?.confirmPassword ? 'text' : 'password'}
                    className=' w-full h-full outline-none text-[12px] lg:text-[14px]  xl:text-[16px] '
                  />
                  <Image
                    name='inptut3'
                    alt='show-password'
                    onClick={() =>
                      SetShowPass(prev => ({
                        ...prev,
                        confirmPassword: !prev.confirmPassword
                      }))
                    }
                    src={
                      ShowPass?.confirmPassword
                        ? '/assests/Blue/pass-view.png'
                        : '/assests/Blue/pass-hide.png'
                    }
                    width={18}
                    height={14}
                    className='absolute right-[60px] mt-[-0px]'
                  />
                </div>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <span style={ErrorsText}>{errors.confirmPassword}</span>
                ) : null}

                <div className='text-center pt-5'>
                  <p
                    className='text-[16px] text-[#0F52BA] cursor-pointer'
                    onClick={() => SetAnotherWay(true)}
                  >
                    Try another way
                  </p>
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
                    {!passwordLoading ? (
                      <h1 className='text-[12px] lg:text-[14px] xl:text-[16px] text-[white]'>
                        Update
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
            ) : (
              <SuccessSection handleCloseModal={handleCloseModal} />
            )}
          </>
        )}
      </>
    )
  }

  return (
    <>
      <Modal
        className='focus:outline-none '
        BackdropProps={{ style: { opacity: 1 } }}
        open={openModal}
        onClose={handleCloseModal}
      >
        <Box>
          <Typography
            id='boxshadow'
            className='bg-[white] py-[1%] xl:py-[2%] px-[1%] xl:px-[2.5%] 2xl:px-[3%] w-[80%] md:w-[30%]  rounded-[18px] absolute right-[10%] md:right-[33%] top-[45%] md:top-[22%] lg:top-[22%]'
          >
            {renderTabContent2()}
          </Typography>
        </Box>
      </Modal>

      <Toaster position='top-center' reverseOrder={false} />
    </>
  )
}

export default PasswordUpdateModal
