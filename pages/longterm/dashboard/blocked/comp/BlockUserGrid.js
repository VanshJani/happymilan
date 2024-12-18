import Image from 'next/image'
import React, { useMemo } from 'react'
import ProfileDataNotFound from '../../../../../components/common/Error/ProfileDataNotFound'

function BlockUserGrid () {
  const ProfileStyle = useMemo(() => ({
    ProfileName: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal'
    },

    ListText: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px' /* 171.429% */
    },

    Text4: {
      color: '#000',
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '12px'
    },

    ProfileCard: {
      borderRadius: '10px',
      background: '#FFF',
      boxShadow: '0px 0px 14px 0px rgba(0, 0, 0, 0.07)'
    }
  }))

  const usersdatas = []

  return (
    <>
      <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
        <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
          <div className=''></div>

          {usersdatas?.map(item => {
            return (
              <>
                <div
                  style={ProfileStyle?.ProfileCard}
                  className='inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'
                >
                  <div className='flex justify-between pt-[10px]'>
                    <ul className='pl-[10px] flex space-x-[10px]'>
                      <li>
                        <Image
                          loading='lazy'
                          alt='couple-icon'
                          width={17}
                          height={14}
                          src='/assests/Black/Couple2.svg'
                        />
                      </li>
                      <li className='text-[10px]' style={ProfileStyle?.Text4}>
                        You & Her{' '}
                      </li>
                    </ul>
                    <ul className='pr-[10px] flex space-x-[30px]'>
                      <li>
                        <Image
                          loading='lazy'
                          alt='star-icon'
                          width={15}
                          height={14}
                          src='/assests/Black/Stars-2.svg'
                        />
                      </li>
                      <li>
                        <Image
                          loading='lazy'
                          alt='more'
                          width={3}
                          height={14}
                          src='/assests/Black/3Dots.svg'
                        />
                      </li>
                    </ul>
                  </div>
                  <div className='flex justify-center '>
                    <Image
                      loading='lazy'
                      alt='profile-pic'
                      width={102}
                      height={102}
                      className='w-[102px] h-[102px] rounded-[50%]'
                      src={item.profilePic}
                    />
                  </div>
                  <div className='text-center'>
                    <h1
                      style={ProfileStyle?.ProfileName}
                      className='text-[18px]'
                    >
                      Rohan Patel
                    </h1>
                    <p style={ProfileStyle?.ListText} className='text-[14px]'>
                      32, 5’3”
                    </p>
                    <p style={ProfileStyle?.ListText} className='text-[14px]'>
                      Hindu, Patel
                    </p>
                    <p style={ProfileStyle?.ListText} className='text-[14px]'>
                      Never Married
                    </p>
                  </div>

                  <div className='flex space-x-[15px] justify-center'>
                    <div>
                      <Image
                        loading='lazy'
                        alt='ignore'
                        width={40}
                        height={40}
                        className='w-[40px] h-[40px]'
                        src='/assests/dashboard/icon/ignore-icon-2.svg'
                      />
                    </div>
                    <div>
                      <Image
                        loading='lazy'
                        alt='heart-icon'
                        width={40}
                        height={40}
                        className='w-[40px] h-[40px]'
                        src='/assests/dashboard/icon/heart-icon-2.svg'
                      />
                    </div>
                    <div>
                      <Image
                        loading='lazy'
                        alt='send-icon'
                        width={40}
                        height={40}
                        className='w-[40px] h-[40px]'
                        src='/assests/dashboard/icon/send-icon-2.svg'
                      />
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>

        <ProfileDataNotFound ProfileData={usersdatas} />

        <div className='flex pt-[50px] space-x-[40px] justify-center items-center w-auto 2xl:w-full xl:w-full'>
          <div
            id='active-no'
            className=' cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'
          >
            1
          </div>
          <div
            id='pagination-count'
            className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'
          >
            2
          </div>
          <div
            id='pagination-count'
            className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'
          >
            3
          </div>
          <div
            id='pagination-count'
            className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'
          >
            4
          </div>
        </div>
      </div>
    </>
  )
}

export default BlockUserGrid
