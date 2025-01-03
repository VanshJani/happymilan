'use client'

import React, { useEffect, useState } from 'react'
import { IconButton } from '@material-tailwind/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { getCookie } from 'cookies-next'
import ProfileImage from '../common/profile/ProfileImage'
import {
  AppBar,
  Box,
  Collapse,
  Dialog,
  DialogContent,
  Drawer,
  Modal,
  Typography
} from '@mui/material'
import { useDarkMode } from '../../../ContextProvider/DarkModeContext'
import icons from '../../../utils/icons/icons'
import { useDispatch, useSelector } from 'react-redux'
import { logoutuser } from '../../../store/actions/UsersAction'

function CommonNavbar ({ background }) {
  const router = useRouter()
  const isBlogActive = router.pathname.startsWith('/blog')
  const isSuccessActive = router.pathname.startsWith('/successstories')
  const isLoginActive = router.pathname.startsWith('/login')

  const { darkMode, toggleDarkMode } = useDarkMode()

  const myProfile = useSelector(state => state.myprofile?.data)

  //For Message Notification input profile id

  const [notification, setNotification] = React.useState({
    right: false // Initialize only the 'right' anchor to be closed
  })

  const toggleNotification = (anchor, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setNotification({ ...notification, [anchor]: open })
  }

  const handleNotificationOpen = () => {
    toggleNotification('right', true)()
    // setNotificationCount(0)
  }

  const handleNotificationClose = () => {
    toggleNotification('right', false)()
    // setNotificationCount(0)
  }

  const befText = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }
  const aftText = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal'
  }

  const MenuNameText = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '22px' /* 122.222% */
  }

  const MenuIDText = {
    color: '#50545A',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px' /* 122.222% */
  }

  const MenuLinkText = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal' /* 122.222% */
  }

  const LogoutModalText = {
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '30px'
  }

  const Text4 = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const [openLogoutModal, setOpenLogoutModal] = React.useState(false)

  const dispatch = useDispatch()

  const handleClickOpenLogout = () => {
    setOpenLogoutModal(true)
  }

  const handleCloseLogout = () => {
    setOpenLogoutModal(false)
  }

  const HandleLogout = e => {
    if (e.target.name === 'stay') {
      setOpenLogoutModal(false)
    } else {
      dispatch(logoutuser())
      router.push('/login')
    }
  }

  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])
  const [token, settoken] = useState()

  useEffect(() => {
    settoken(getCookie('jwtToken'))
  }, [])

  const [OpenProfileModal, setOpenProfileModal] = useState(false)
  const HandleOpenMenu = () => {
    setOpenProfileModal(true)
  }
  const handleClose = () => {
    setOpenProfileModal(false)
  }

  const BoxSdow2 = {
    borderRadius: '10px',
    background: darkMode ? '#242526' : '#FFF',
    boxShadow: '0px 0px 5px 5px rgba(0, 0, 0, 0.03)'
  }

  const FollowsUsText = {
    color: '#333',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }
  const CopyrightText = {
    color: '#333',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  //   color: #333;
  // font-family: Poppins;
  // font-size: 12px;
  // font-style: normal;
  // font-weight: 400;
  // line-height: normal;

  const MobileNavList = () => {
    return (
      <>
        <div className='w-full grid place-items-end py-3 px-3'>
          <svg
            onClick={handleNotificationClose}
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
          >
            <path
              d='M0.727818 14L0 13.2547L6.23755 7L0 0.745273L0.727818 0L6.98254 6.25501L13.2373 0L13.9651 0.745273L7.72754 7L13.9651 13.2547L13.2373 14L6.98254 7.74499L0.727818 14Z'
              fill='#5F6368'
            />
          </svg>
        </div>
        <br />
        <div className=''>
          <div className='w-full grid place-items-center space-y-2'>
            <button
              id='grad-button'
              className='w-[90%] rounded-[20px] h-[40px]'
            >
              Login
            </button>
          </div>
        </div>

        <div className='w-full grid place-items-center space-y-2 mt-5'>
          <div className='w-full px-2 flex justify-center'>
            <div className='w-[90%] bg-[#E2E2E2] h-[1px]'></div>
          </div>
          <div className='px-2'>
            <ul className='space-y-2'>
              <Typography
                id='nav-links'
                as='li'
                variant='small'
                color='blue-gray'
                className={` ${
                  router.pathname == '/aboutus'
                    ? 'bg-[#F2F7FF]'
                    : 'hover:bg-[#F2F7FF] '
                } p-1 lg:w-[151px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[17px]`}
              >
                <Link
                  style={router.pathname == '/aboutus' ? aftText : befText}
                  href='/aboutus'
                  className='flex items-center'
                >
                  About Happy Milan
                </Link>
              </Typography>
              <Typography
                id='nav-links'
                as='li'
                variant='small'
                className='hover:bg-[#F2F7FF] p-1 lg:w-[55px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[17px]'
              >
                <Link
                  style={isBlogActive ? aftText : befText}
                  href='/blog'
                  className='flex items-center'
                >
                  Blogs
                </Link>
              </Typography>
              <Typography
                id='nav-links'
                as='li'
                variant='small'
                color='blue-gray'
                className={` ${
                  isSuccessActive ? 'bg-[#F2F7FF]' : 'hover:bg-[#F2F7FF]'
                }  p-1 lg:grid place-items-center font-normal poppins lg:h-[30px] rounded-[17px]`}
              >
                <Link
                  style={isSuccessActive ? aftText : befText}
                  href='/successstories'
                  className='flex items-center pl-[5px] pr-[5px]'
                >
                  Success Stories
                </Link>
              </Typography>
            </ul>
          </div>

          <div className='w-full absolute bottom-10 space-y-8'>
            <div>
              <p style={FollowsUsText} className='text-center'>
                Follow Us
              </p>
            </div>
            <div className='grid place-items-center'>
              <ul className='flex justify-between w-[131.551px]'>
                <li>
                  <Image
                    width={20}
                    height={20}
                    alt='instgarm'
                    loading='lazy'
                    src={'/heroSec/icon/instagram-icon.svg'}
                  />
                </li>
                <li>
                  <Image
                    width={11}
                    height={24}
                    alt='facebook'
                    loading='lazy'
                    src={'/heroSec/icon/facebook-icon.svg'}
                  />
                </li>
                <li>
                  <Image
                    width={24}
                    height={24}
                    alt='yotube'
                    loading='lazy'
                    src={'/heroSec/icon/youtube-icon.svg'}
                  />
                </li>
              </ul>
            </div>
            <div className='w-full grid place-items-center space-y-2'>
              <div className='w-[90%] bg-[#E2E2E2] h-[1px] '></div>

              <div>
                <p style={CopyrightText} className='text-center'>
                  Copyrights 2024. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  const NotificationList = anchor => (
    <Box
      id='sidebarScroll'
      className='dark:bg-[#242526] bg-[#FFF] '
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
    >
      <MobileNavList />
    </Box>
  )

  const LoginText = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const navList = (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        id='nav-links'
        as='li'
        variant='small'
        color='blue-gray'
        className={` ${
          router.pathname == '/aboutus' ? 'bg-[#F2F7FF]' : 'hover:bg-[#F2F7FF] '
        } p-1 lg:w-[151px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[17px]`}
      >
        <Link
          style={router.pathname == '/aboutus' ? aftText : befText}
          href='/aboutus'
          className='flex items-center'
        >
          About Happy Milan
        </Link>
      </Typography>
      <Typography
        id='nav-links'
        as='li'
        variant='small'
        className='hover:bg-[#F2F7FF] p-1 lg:w-[55px] lg:grid place-items-center lg:h-[30px]  font-normal poppins rounded-[17px]'
      >
        <Link
          style={isBlogActive ? aftText : befText}
          href='/blog'
          className='flex items-center'
        >
          Blogs
        </Link>
      </Typography>
      <Typography
        id='nav-links'
        as='li'
        variant='small'
        color='blue-gray'
        className={` ${
          isSuccessActive ? 'bg-[#F2F7FF]' : 'hover:bg-[#F2F7FF]'
        }  p-1 lg:grid place-items-center font-normal poppins lg:h-[30px] rounded-[17px]`}
      >
        <Link
          style={isSuccessActive ? aftText : befText}
          href='/successstories'
          className='flex items-center pl-[5px] pr-[5px]'
        >
          Success Stories
        </Link>
      </Typography>

      {!token ? (
        <>
          <Typography
            id='nav-links'
            as='li'
            variant='small'
            color='blue-gray'
            className={`p-1 font-normal rounded-[10px] p-[7px] ${
              isLoginActive ? 'bg-[rgba(15,82,186,0.05)] text-[#0F52BA]' : ''
            }`}
            style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal'
            }}
          >
            <Link href='/login'>
              <button
                id='grad-button'
                className='flex items-center justify-evenly rounded-full w-[92px] h-[39px]'
                style={LoginText}
              >
                Login
                <Image
                  loading='lazy'
                  width={18}
                  height={18}
                  alt='icon'
                  src='/assests/Black/Vector-2.svg'
                />
              </button>
            </Link>
          </Typography>
        </>
      ) : (
        <>
          <div onClick={HandleOpenMenu} className='cursor-pointer h-full'>
            <ProfileImage size={30} />
          </div>

          <Modal
            id='fade-menu'
            MenuListProps={{
              'aria-labelledby': 'fade-button'
            }}
            BackdropProps={{ style: { opacity: 0 } }}
            open={OpenProfileModal}
            onClose={handleClose}
            sx={{ outline: 'none' }}
            style={{
              outline: 'none',
              position: 'absolute',
              right: '50px',
              top: '70px'
            }}
          >
            <Box sx={{ outline: 'none' }} className='absolute right-0'>
              <div className='pt-[20px] w-[278px] h-[296px]' style={BoxSdow2}>
                <div className='flex flex-col justify-evenly h-full pl-[24px] pr-[24px]'>
                  <div className='mt-[-10px] space-y-[10px]'>
                    <div
                      className='w-[60px] h-[60px] rounded-full hover:opacity-80 duration-200 cursor-pointer'
                      onClick={() => router.push('/longterm/dashboard/profile')}
                    >
                      <ProfileImage size={60} />
                    </div>
                    <ul className='relative left-[5px] space-y-[5px]'>
                      <li>
                        {' '}
                        <h1 style={MenuNameText}>{myProfile?.name}</h1>
                      </li>
                      <li>
                        {' '}
                        <p style={MenuIDText}>
                          ID: {myProfile?.userUniqueId?.toUpperCase()}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className='h-[1px] w-[90%] bg-[#EBEBEB]'></div>
                  <div>
                    <ul
                      onClick={() => router.push('/longterm/dashboard')}
                      className='hover:bg-[#F3F8FF] dark:hover:bg-[#18191a] rounded-[100px] p-[10px] cursor-pointer flex space-x-[15px]'
                    >
                      <li>
                        {darkMode
                          ? icons.myprofile.dark
                          : icons.myprofile.light}
                      </li>
                      <li>
                        <h1 style={MenuLinkText}>Dashboard</h1>
                      </li>
                    </ul>
                  </div>
                  <div
                    onClick={handleClickOpenLogout}
                    className=' flex justify-center'
                  >
                    <button
                      id={darkMode ? 'Gradient-logout-btn-2' : ''}
                      className='w-[230px] h-[44px] border-[1px] border-[#EBEBEB] text-[black] dark:text-[#FFF] dark:bg-[#141516] dark:border-[1px] dark:border-[#FFF] bg-[#FFF] hover:bg-[#F3F8FF] rounded-[22px]'
                      style={Text4}
                    >
                      Log Out
                    </button>
                  </div>

                  <Dialog
                    open={openLogoutModal}
                    onClose={handleCloseLogout}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby='alert-dialog-description'
                    className=''
                    sx={{ '& .MuiDialog-paper': { borderRadius: '18px' } }}
                  >
                    <DialogContent className='text-center w-[400px] mt-[20px]'>
                      <div id='alert-dialog-description'>
                        <p style={LogoutModalText}>
                          {' '}
                          Are you sure you want to exit?
                        </p>
                      </div>
                    </DialogContent>
                    <div className='flex justify-evenly p-[20px] mb-[20px]'>
                      <div>
                        <button
                          onClick={HandleLogout}
                          name='stay'
                          id='grad-button'
                          className='rounded-[23px] w-[122px] h-[50px]'
                        >
                          Stay
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={HandleLogout}
                          name='exit'
                          className='border-[#8225AF] hover:bg-[#F3F8FF] border-[1px] rounded-[23px] w-[122px] h-[50px]'
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  </Dialog>
                </div>
              </div>
            </Box>
          </Modal>
        </>
      )}
    </ul>
  )
  return (
    <>
      <AppBar
        sx={{ boxShadow: 'none' }}
        className={`z-10 border-none fixed top-0 left-0 top-0 h-max shadow-none  max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 p-4 text-white `}
        style={{ backgroundColor: background ? background : '#FFF' }}
      >
        <div className='flex items-center justify-between'>
          <Typography className='mr-4 cursor-pointer py-1.5 lg:ml-[50px] font-medium'>
            <Link href='/'>
              {' '}
              <Image
                loading='lazy'
                width={148}
                height={36}
                alt='logo'
                src='/heroSec/Happy-milan2.svg'
              />
            </Link>
          </Typography>
          <div className='flex items-center gap-4'>
            {/* <div className={` w-[600px] hidden lg:block `}>{navList}</div> */}
            <div
              className={`${token ? 'w-[100%]' : 'w-[100%]'} hidden lg:block `}
            >
              {navList}
            </div>

            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              // onClick={() => setOpenNav(!openNav)}
              onClick={handleNotificationOpen}
            >
              {notification?.right ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  style={{ color: 'black' }}
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  style={{ color: 'black' }}
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        {/* <Collapse open={openNav}>{MobileNavList}</Collapse> */}
        <Drawer
          anchor='right'
          BackdropProps={{ style: { opacity: 0 } }}
          open={notification['right']}
          onClose={toggleNotification('right', false)}
        >
          {NotificationList('right')}
        </Drawer>
      </AppBar>
    </>
  )
}

export default CommonNavbar
