import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShareModal from '../../../_components/Model/Models/ShareModal'
import {
  createLike,
  DislikeStory,
  getTotalLikes
} from '../../../../store/actions/UserStoryAction'

function ViewStorySec () {
  const router = useRouter()

  const { loading, data, error } = useSelector(
    state => state.storyviews.successstoryByID
  )

  const { reads } = useSelector(state => state.storyviews.storyReadcount)
  const { totalLike } = useSelector(state => state.storyviews?.storyLikecount)
  const { isLike, likeID } = useSelector(state => state.storyviews?.IsLike)

  const TitleText = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '44px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '70px' /* 159.091% */
  }

  const ContentText = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal' /* 159.091% */
  }

  const Text = {
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal' /* 159.091% */
  }

  const Text2 = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal' /* 159.091% */
  }

  const Text3 = {
    // color: '#CECECE',
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '70px' /* 291.667% */
  }
  const Text4 = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '70px' /* 291.667% */
  }

  const [Liked, SetLiked] = useState(false)

  const [btnMessage, SetbtnMessage] = useState(isLike ? 'Liked' : 'Give Heart')
  const [showThankYou, setShowThankYou] = useState(false)

  const dispatch = useDispatch()
  //   {Liked ? 'Thank You!' : 'Give Heart'}

  //   const HandleLiked = () => {
  //     SetLiked(true)
  //     if (isLike) {
  //       dispatch(DislikeStory(data?.id, likeID))
  //       SetbtnMessage('Give Heart')
  //     } else {
  //       dispatch(createLike(data?.id))
  //       SetbtnMessage('Thank You!')
  //       SetLiked(true)
  //     }
  //     setTimeout(() => {
  //       SetLiked(false)
  //       if (!Liked) {
  //         SetbtnMessage('Liked')
  //       }
  //     }, 2000)
  //   }

  const HandleLiked = () => {
    if (isLike) {
      // If already liked, call Dislike API
      dispatch(DislikeStory(data?.id, likeID))
      SetbtnMessage('Give Heart')
    } else {
      // If not liked, call Like API
      dispatch(createLike(data?.id))
      setShowThankYou(true) // Show Thank You message

      setTimeout(() => {
        setShowThankYou(false)
        SetbtnMessage('Liked')
      }, 2000)
    }
  }

  const [CurrURL, SetCurURL] = useState('')

  const HandleOpenShareModal = () => {
    openModal()
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = e => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className='w-full mt-[100px]'>
        <div className='grid place-items-center w-full'>
          <div className='w-full 2xl:pl-48 xl:pl-40 2xl:pr-48 xl:pr-40'>
            <ul className='flex justify-between items-center'>
              <li>
                <h1 style={TitleText}>Story of {data?.title}</h1>
              </li>
              <li>
                <div className='space-y-12 relative top-10'>
                  <div className='w-[40px] h-[40px] cursor-pointer hover:bg-[#EFF5FF] grid place-items-center rounded-full'>
                    <Image
                      loading='lazy'
                      alt='img'
                      width={32}
                      height={32}
                      src='/assests/common/arrow-back.svg'
                      onClick={() => router.back()}
                      className='cursor-pointer'
                      style={TitleText}
                    />
                  </div>
                  <div className='w-[40px] h-[40px] cursor-pointer hover:bg-[#EFF5FF] grid place-items-center rounded-full'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      onClick={HandleOpenShareModal}
                      fill='none'
                    >
                      <path
                        d='M6.66732 24.6663V19.9996C6.66732 18.8029 7.09043 17.7816 7.93665 16.9356C8.78265 16.0894 9.80399 15.6663 11.0007 15.6663H23.5033L18.37 20.7996L19.7957 22.2046L27.334 14.6663L19.7957 7.12793L18.37 8.53293L23.5033 13.6663H11.0007C9.25021 13.6663 7.7571 14.2843 6.52132 15.5203C5.28532 16.756 4.66732 18.2492 4.66732 19.9996V24.6663H6.66732Z'
                        fill='black'
                      />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='relative 2xl:pl-48 xl:pl-40 w-full'>
          <div className='lg:w-[901px] w-[78%]'>
            <div className=' mt-8'>
              <p style={ContentText}>{data?.content}</p>
            </div>

            <div className='lg:w-[901px] w-[80%] flex justify-between mt-14'>
              <div>
                <div className='space-y-2'>
                  <p style={Text} className='text-[#000]'>
                    {' '}
                    Posted By
                  </p>
                  <div className='flex space-x-2'>
                    <p>Rahul Shah</p>
                    <p style={Text} className='text-[#787878]'>
                      3d ago
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <ul className='flex space-x-[50px] items-center'>
                  <li>
                    <p style={Text2}>
                      {reads || 0} <span className='text-[#929292]'>Reads</span>
                    </p>
                  </li>
                  <li>
                    <p style={Text2}>
                      {totalLike || 0}{' '}
                      <span className='text-[#929292]'>Hearts</span>
                    </p>
                  </li>
                  <li>
                    <button
                      onClick={HandleLiked}
                      id={!isLike ? 'StoryLikeHover' : ''}
                      className={`w-[150px] h-[40px]  ${
                        isLike
                          ? 'bg-[#EDEAEA] border-[1px] border-[#EDEAEA]'
                          : 'border-[1px] border-[#8225AF] flex justify-evenly items-center '
                      }  rounded-[20px]`}
                    >
                      {showThankYou ? 'Thank You!' : btnMessage}
                      {!isLike ? (
                        <svg
                          width='18'
                          height='16'
                          viewBox='0 0 18 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            id='Vector'
                            d='M8.71935 16L7.45504 14.849C2.96458 10.7771 0 8.09155 0 4.79564C0 2.11008 2.11008 0 4.79564 0C6.31281 0 7.76894 0.706267 8.71935 1.82234C9.66975 0.706267 11.1259 0 12.6431 0C15.3286 0 17.4387 2.11008 17.4387 4.79564C17.4387 8.09155 14.4741 10.7771 9.98365 14.8578L8.71935 16Z'
                            fill='url(#paint0_linear_5246_220)'
                          />
                          <defs>
                            <linearGradient
                              id='paint0_linear_5246_220'
                              x1='-1.30215'
                              y1='-7.42188'
                              x2='19.0104'
                              y2='19.5312'
                              gradientUnits='userSpaceOnUse'
                            >
                              <stop stop-color='#0F52BA' />
                              <stop offset='1' stop-color='#7D27AF' />
                            </linearGradient>
                          </defs>
                        </svg>
                      ) : (
                        ''
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className='grid place-items-center w-full mt-9 space-y-5'>
              <div className='h-[1px] w-full bg-[#E9E9E9]'></div>
              <div className='flex justify-between w-full'>
                <p style={Text4}>More Stories</p>
                <p
                  style={Text3}
                  className='text-[#CECECE] hover:text-[#000] duration-200 cursor-pointer'
                >
                  View All Stories
                </p>
              </div>
              <ul className='flex justify-between w-full'>
                <li>
                  <div
                    className=' cursor-pointer 
                  2xl:w-[279px] 2xl:h-[338px] 
                  xl:w-[279px] xl:h-[338px] 
                  lg:w-[250px] lg:h-[308px] 
                  md:w-[240px] md:h-[298px] 
                  w-[230px] h-[288px] 
                  
                  rounded-[18px] overflow-hidden relative'
                    style={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.20) 72.64%, #000 100%)`
                    }}
                  >
                    <Image
                      src={'/assests/stories/stories-1.svg'}
                      alt='Happy couple in the mountains'
                      layout='fill'
                      objectFit='cover'
                      className='-z-10'
                    />

                    <div className='absolute bottom-3 w-full text-center  p-2 text-white'>
                      <ul className=''>
                        <li className='text-[16px]'>Read Story of</li>
                        <li
                          className='
                      2xl:text-[24px]
                      xl:text-[24px]
                      lg:text-[20px]
                      md:text-[20px]
                      text-[20px]
                      '
                        >
                          Riya & Rohan
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div
                    className=' cursor-pointer 
                  2xl:w-[279px] 2xl:h-[338px] 
                  xl:w-[279px] xl:h-[338px] 
                  lg:w-[250px] lg:h-[308px] 
                  md:w-[240px] md:h-[298px] 
                  w-[230px] h-[288px] 
                  
                  rounded-[18px] overflow-hidden relative'
                    style={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.20) 72.64%, #000 100%)`
                    }}
                  >
                    <Image
                      src={'/assests/stories/stories-2.svg'}
                      alt='Happy couple in the mountains'
                      layout='fill'
                      objectFit='cover'
                      className='-z-10'
                    />

                    <div className='absolute bottom-3 w-full text-center  p-2 text-white'>
                      <ul className=''>
                        <li className='text-[16px]'>Read Story of</li>
                        <li
                          className='
                      2xl:text-[24px]
                      xl:text-[24px]
                      lg:text-[20px]
                      md:text-[20px]
                      text-[20px]
                      '
                        >
                          Riya & Rohan
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div
                    className=' cursor-pointer 
                  2xl:w-[279px] 2xl:h-[338px] 
                  xl:w-[279px] xl:h-[338px] 
                  lg:w-[250px] lg:h-[308px] 
                  md:w-[240px] md:h-[298px] 
                  w-[230px] h-[288px] 
                  
                  rounded-[18px] overflow-hidden relative'
                    style={{
                      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.20) 72.64%, #000 100%)`
                    }}
                  >
                    <Image
                      src={'/assests/stories/stories-3.svg'}
                      alt='Happy couple in the mountains'
                      layout='fill'
                      objectFit='cover'
                      className='-z-10'
                    />

                    <div className='absolute bottom-3 w-full text-center  p-2 text-white'>
                      <ul className=''>
                        <li className='text-[16px]'>Read Story of</li>
                        <li
                          className='
                      2xl:text-[24px]
                      xl:text-[24px]
                      lg:text-[20px]
                      md:text-[20px]
                      text-[20px]
                      '
                        >
                          Riya & Rohan
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ShareModal isOpen={isModalOpen} onClose={closeModal} data={CurrURL} />
    </>
  )
}

export default ViewStorySec
