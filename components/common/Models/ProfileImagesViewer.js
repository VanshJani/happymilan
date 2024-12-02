import { Box, Modal } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import UploadImage from '../../../pages/longterm/dashboard/commonCompo/HandeImageUpload/UploadImage'
import MenuPop from '../../Dating/common/Models/MenuPop'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

function ProfileImagesViewer ({ Privacy, Section, details }) {
  const { loading, error } = useSelector(
    state => state.usersact.deleteimagedata
  )

  useEffect(() => {
    if (Section === 'long-term' && error != null) {
      toast.error(error)

    //   setTimeout(() => {

    // }, timeout);
    }
  }, [error])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    outline: 'none',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4
  }

  const ImageNotFoundText = {
    color: '#B3CBF1',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 500
  }

  const [CurrImage, setCurrImage] = useState(0)
  const [open, setOpen] = useState(false)
  const [openUpload, setOpenUpload] = useState(false)

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    setCurrImage(0)
  }

  const handleClickOpenUpload = () => {
    if (details?.userProfilePic?.length >= 5) {
      alert(
        'You have reached the maximum limit of 5 images. If you want to upload a new image, please delete one of your current images.'
      )
    } else {
      setOpenUpload(true)
      setOpen(false)
    }
  }

  const handleCloseUpload = () => setOpenUpload(false)

  return (
    <>
      <div
        className={`2xl:w-[300px] xl:w-[250px] 2xl:h-[381px] xl:h-[350px] fixed ${
          Section != 'long-term'
            ? '2xl:top-[110px] xl:top-[95px]'
            : '2xl:top-[180px] xl:top-[180px]'
        }  right-10  2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full`}
      >
        {details?.userProfilePic?.length > 0 ? (
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className='mySwiper 2xl:w-[300px] xl:w-[250px] 2xl:h-[381px] xl:h-[350px] rounded-[10px]'
          >
            {details?.userProfilePic?.map((res, index) => (
              <SwiperSlide key={index}>
                <Image
                  loading='lazy'
                  onClick={handleOpen}
                  style={{ objectFit: 'cover' }}
                  width={300}
                  height={381}
                  className='2xl:w-[300px] xl:w-[250px] 2xl:h-[381px] xl:h-[350px]'
                  alt='image'
                  src={res?.url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            style={{ backgroundColor: '#F8FBFF' }}
            className='h-[381px] w-[300px] grid place-items-center'
          >
            <div className='grid place-items-center space-y-[5px]'>
              <Image
                loading='lazy'
                alt='no-found'
                width={34}
                height={34}
                src={'/assests/dashboard/icon/Photo-NotFound.svg'}
              />
              <h1 className='inline' style={ImageNotFoundText}>
                No Photos Found
              </h1>
            </div>
          </div>
        )}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='w-[780px] h-[520px] space-y-[26px]'>
            <ul className='flex justify-evenly items-center'>
              <li className='w-[42px] h-[42px] rounded-full'>
                <Image
                  id='custom-prev-button'
                  className={
                    CurrImage === 0
                      ? 'transform scale-x-[-1] opacity-50'
                      : 'transform scale-x-[-1] hover:opacity-50 duration-150 cursor-pointer'
                  }
                  width={42}
                  height={42}
                  src={'/assests/icons/arrow-btn.svg'}
                />
              </li>
              <li className=''>
                <Swiper
                  spaceBetween={30}
                  effect={'fade'}
                  navigation={{
                    prevEl: '#custom-prev-button',
                    nextEl: '#custom-next-button'
                  }}
                  onSlideChange={swiper => setCurrImage(swiper.activeIndex)}
                  modules={[EffectFade, Navigation, Pagination]}
                  className='mySwiper w-[345px] h-[449px]'
                >
                  {details?.userProfilePic?.map((res, index) => {
                    return (
                      <SwiperSlide key={index}>
                        {!Privacy ? (
                          <MenuPop
                            Section={Section}
                            details={details}
                            data={res}
                          />
                        ) : (
                          ''
                        )}
                        <div>
                          <div>
                            <Image
                              loading='lazy'
                              quality={50}
                              width={300}
                              height={381}
                              className='w-[332px] h-[449px]'
                              style={{
                                objectFit: 'cover',
                                borderRadius: '10px'
                              }}
                              alt='image'
                              src={res?.url}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })}
                </Swiper>
              </li>
              <li className='w-[42px] h-[42px] rounded-full'>
                <Image
                  id='custom-next-button'
                  className={
                    CurrImage == details?.userProfilePic?.length - 1
                      ? 'opacity-50'
                      : 'hover:opacity-50  cursor-pointer duration-150'
                  }
                  width={42}
                  height={42}
                  src={'/assests/icons/arrow-btn.svg'}
                />
              </li>
            </ul>

            <ul className='flex space-x-[27px] justify-center'>
              {details?.userProfilePic?.map((res, index) => {
                return (
                  <li
                    key={index}
                    className={`${
                      CurrImage === index
                        ? 'border-[2px] border-[#8225AF]'
                        : 'border-[2px]'
                    } rounded-[10px]`}
                  >
                    <Image
                      loading='lazy'
                      quality={40}
                      width={50}
                      height={50}
                      style={{
                        objectFit: 'cover',
                        width: '60px',
                        height: '60px',
                        borderRadius: '10px'
                      }}
                      src={res?.url}
                    />
                  </li>
                )
              })}
              {!Privacy
                ? details?.userProfilePic?.length < 6 && (
                    <li
                      onClick={handleClickOpenUpload}
                      className='grid place-items-center w-[60px] h-[60px] rounded-[10px] bg-[#F1F1F1] cursor-pointer duration-150 hover:bg-[#ededed]'
                    >
                      <Image
                        width={20}
                        height={18}
                        alt='camera'
                        src={'/assests/profile/before-imageupload-icon.svg'}
                      />
                    </li>
                  )
                : ''}
            </ul>
          </div>
        </Box>
      </Modal>
      <UploadImage
        openUpload={openUpload}
        handleCloseUpload={handleCloseUpload}
      />

      <Toaster position='top-center' reverseOrder={false} />
    </>
  )
}

export default ProfileImagesViewer
