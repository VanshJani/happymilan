import React, { useState } from 'react'
import Image from 'next/image'
import { Dialog, Popover } from '@mui/material'
import ShareModal from '../../../../pages/_components/Model/Models/ShareModal'
import { useDarkMode } from '../../../../ContextProvider/DarkModeContext'
import ReportModal from '../../../../pages/_components/Model/Models/ReportModal'
import { updateSpamUserdata } from '../../../../store/reducers/SpamReportReducer'
import { useDispatch, useSelector } from 'react-redux'

function UserPopover ({ Privacy, res }) {
  const { darkMode } = useDarkMode()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const Text3 = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const Urlmodaltext = {
    color: '#000',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const [UserData, SetUserData] = useState('')
  const [CurrURL, SetCurURL] = useState('')

  const handleClick = (event, res) => {
    SetUserData(res)
    setAnchorEl(event.currentTarget)

    const userId = res?.id || res?._id || ''
    const currentUrl = window.location.href

    // Remove "/sent" from the URL if it exists
    const newUrl = currentUrl.replace(
      /\/(sent|accepted|cancelled|deleted|newrequest|recentlyviewed|profile)/g,
      ''
    )

    // Append userId to the modified URL
    // const urlWithUserId = `${newUrl}/${userId}`
    let urlWithUserId
    if (!Privacy) {
      urlWithUserId = `${newUrl}`
    } else {
      urlWithUserId = `${newUrl}/${userId}`
    }
    SetCurURL(urlWithUserId)
  }

  const [openURLModal, setOpenURLModal] = React.useState(false)

  const HandleOpenShareModal = () => {
    openModal()
    handleClose()
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = e => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleCopyURL = () => {
    setOpenURLModal(true)
    navigator.clipboard.writeText(CurrURL)
    handleClose()
    setTimeout(() => {
      setOpenURLModal(false)
    }, 1000)
  }

  // Report Modal Section - Start
  // Manages the opening and closing of the report modal, and updates spam user data upon reporting

  // State to manage the visibility of the report modal
  const [isReportModalOpen, setisReportModalOpen] = useState(false)

  // Redux dispatch hook and spam user data from the store
  const dispatch = useDispatch()
  const spamUserData = useSelector(state => state.Spamuser.SpamUserdata)

  // Function to open the report modal
  const OpenReportModal = () => {
    setisReportModalOpen(true)
  }

  // Function to close the report modal
  const CloseReportModal = () => {
    setisReportModalOpen(false)
  }

  // Function to handle report action
  // This closes the current modal, opens the report modal, and updates spam user data in the Redux store
  const ReportModalHandle = () => {
    handleClose() // Close the current modal
    OpenReportModal() // Open the report modal
    // Dispatch updated spam user data to the store
    dispatch(
      updateSpamUserdata({
        ...spamUserData,
        spamUserId: res?.id,
        UserName: res?.firstName + ' ' + res?.lastName
      })
    )
  }

  // Report Modal Section - End\

  const RenderOptions = () => {
    if (!Privacy) {
      return (
        <>
          <li
            style={Text3}
            // onClick={HandleOpenShareModal}
            className='w-full p-[5px]  hover:bg-[#F2F7FF]  cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[12px]'
          >
            <div className=' ml-[20px] flex space-x-[24px]'>
              <Image
                loading='lazy'
                alt='block-icon'
                width={14}
                height={14}
                src='/assests/dashboard/icon/block-icon.svg'
              />
              <p>Block Profile</p>
            </div>
          </li>

          <li
            style={Text3}
            // onClick={HandleOpenShareModal}
            onClick={ReportModalHandle}
            className='w-full p-[5px]  hover:bg-[#F2F7FF]  cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[12px]'
          >
            <div className=' ml-[20px] flex space-x-[24px]'>
              <Image
                loading='lazy'
                alt='report-icon'
                width={14}
                height={14}
                src='/assests/dashboard/icon/report-icon.svg'
              />
              <p>Report this profile</p>
            </div>
          </li>
          <li
            style={Text3}
            // onClick={HandleOpenShareModal}
            className='w-full p-[5px]  hover:bg-[#F2F7FF]  cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[12px]'
          >
            <div className=' ml-[20px] flex space-x-[24px]'>
              <Image
                loading='lazy'
                alt='copy'
                width={14}
                height={14}
                src='/assests/Black/UnfriendUser.svg'
              />{' '}
              <p>Unfriend</p>
            </div>
          </li>
        </>
      )
    }
  }

  return (
    <>
      <div>
        <div className='absolute right-[-5px] pt-[10px]'>
          <ul className='flex space-x-[20px] items-center'>
            <li>
              <div className='relative left-4 top-[-8px]'>
                <span
                  onClick={event => handleClick(event, res)}
                  aria-describedby={id}
                  variant='contained'
                  className='cursor-pointer rounded-full w-7 h-7  flex items-center justify-center 
                    hover:bg-[#F3F8FF] transition-all duration-200 ease-in-out'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='3'
                    height='16'
                    viewBox='0 0 3 16'
                    fill='none'
                  >
                    <path
                      d='M1.22353 16C0.887057 16 0.599018 15.8802 0.359411 15.6406C0.119804 15.401 0 15.1129 0 14.7765C0 14.44 0.119804 14.1519 0.359411 13.9123C0.599018 13.6727 0.887057 13.5529 1.22353 13.5529C1.56 13.5529 1.84804 13.6727 2.08764 13.9123C2.32725 14.1519 2.44705 14.44 2.44705 14.7765C2.44705 15.1129 2.32725 15.401 2.08764 15.6406C1.84804 15.8802 1.56 16 1.22353 16ZM1.22353 9.22353C0.887057 9.22353 0.599018 9.10372 0.359411 8.86412C0.119804 8.62451 0 8.33647 0 8C0 7.66353 0.119804 7.37549 0.359411 7.13588C0.599018 6.89628 0.887057 6.77647 1.22353 6.77647C1.56 6.77647 1.84804 6.89628 2.08764 7.13588C2.32725 7.37549 2.44705 7.66353 2.44705 8C2.44705 8.33647 2.32725 8.62451 2.08764 8.86412C1.84804 9.10372 1.56 9.22353 1.22353 9.22353ZM1.22353 2.44708C0.887057 2.44708 0.599018 2.32728 0.359411 2.08767C0.119804 1.84807 0 1.56002 0 1.22353C0 0.887057 0.119804 0.599018 0.359411 0.359411C0.599018 0.119804 0.887057 0 1.22353 0C1.56 0 1.84804 0.119804 2.08764 0.359411C2.32725 0.599018 2.44705 0.887057 2.44705 1.22353C2.44705 1.56002 2.32725 1.84807 2.08764 2.08767C1.84804 2.32728 1.56 2.44708 1.22353 2.44708Z'
                      fill='black'
                    />
                  </svg>
                </span>
              </div>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                PaperProps={{
                  style: {
                    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                    borderRadius: '10px',
                    marginLeft: '-10px'
                  } // Add this to remove the shadow
                }}
              >
                <div
                  className={`flex flex-col items-center bg-[#FFF] rounded-[10px] w-[220px] h-[full] pb-[10px] `}
                >
                  <div className='w-full h-full'>
                    <ul className='w-full flex flex-col justify-center items-center space-y-[0px]'>
                      <li
                        style={Text3}
                        onClick={HandleOpenShareModal}
                        className='w-full p-[5px]  hover:bg-[#F2F7FF]  cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[12px]'
                      >
                        <div className=' ml-[20px] flex space-x-[24px]'>
                          <Image
                            loading='lazy'
                            alt='icon'
                            width={13}
                            height={14}
                            src='/assests/dashboard/icon/share-icon.svg'
                          />
                          <p>Share Profile</p>
                        </div>
                      </li>

                      <li
                        style={Text3}
                        onClick={handleCopyURL}
                        className='w-full p-[5px]  hover:bg-[#F2F7FF]  cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[12px]'
                      >
                        <div className=' ml-[20px] flex space-x-[24px]'>
                          <Image
                            loading='lazy'
                            alt='copy'
                            width={12}
                            height={14}
                            src='/assests/dashboard/icon/copy-icon.svg'
                          />
                          <p>Copy URL</p>
                        </div>
                      </li>
                      <li
                        style={Text3}
                        // onClick={HandleOpenShareModal}
                        className='w-full p-[5px]  hover:bg-[#F2F7FF]  cursor-pointer flex  items-center space-x-[12px] text-[14px] mt-[12px]'
                      >
                        <div className=' ml-[20px] flex space-x-[24px]'>
                          <Image
                            loading='lazy'
                            alt='Download'
                            width={14}
                            height={14}
                            src='/assests/Black/Download3.svg'
                          />
                          <p>Download Profile</p>
                        </div>
                      </li>
                      {RenderOptions()}
                    </ul>
                  </div>
                </div>
              </Popover>
            </li>
          </ul>
        </div>
      </div>

      <ShareModal isOpen={isModalOpen} onClose={closeModal} data={CurrURL} />

      <ReportModal
        title={'helo'}
        isOpen={isReportModalOpen}
        onClose={CloseReportModal}
        ReportData={CurrURL}
      />

      <React.Fragment>
        <Dialog
          open={openURLModal}
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
              <spa className='text-[#fff]'> URL has been copied</spa>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
    </>
  )
}

export default UserPopover
