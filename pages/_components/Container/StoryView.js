import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  FetchSuccessStories,
  readStory
} from '../../../store/actions/UserStoryAction'
import { motion } from 'framer-motion'

function StoryView () {
  const router = useRouter()
  const Text2 = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const [isHover, SetisHover] = useState(false)

  const { loading, data, error } = useSelector(
    state => state.storyviews.storydata
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(FetchSuccessStories())
  }, [])

  const HandleViewStory = res => {
    router.push(`/successstories/${res?._id}`)
    dispatch(readStory(res?._id))
  }

  const Text = {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <>
      <div className='relative 2xl:w-[715px] xl:w-[635px]  xl:w-[615px] m-[10px] flex justify-between'>
        <h1 className='p-[5px] relative 2xl:left-[40px] xl:left-[55px]'>
          <span
            style={Text2}
            className='text-[16px] text-[#000] dark:text-[#FFF]'
          >
            Success Stories
          </span>
        </h1>
        <div className='flex space-x-[10px] relative right-[50px]'>
          <div
            onMouseEnter={() => SetisHover(true)}
            onMouseLeave={() => SetisHover(false)}
            onClick={() => router.push('/successstories')}
            className='flex items-center space-x-[16px]'
          >
            <h1
              style={Text2}
              className={`cursor-pointer text-[16px] dark:text-[#FFF]  ${
                isHover ? 'text-[#000]' : 'text-[#BABABA]'
              }`}
            >
              More Stories
            </h1>
            <svg
              className='cursor-pointer'
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='14'
              viewBox='0 0 8 14'
              fill='none'
            >
              <path
                d='M6.2565 7.01264L0 0.730859L0.730859 0L7.71822 7.01264L0.730859 14L0 13.2691L6.2565 7.01264Z'
                fill={isHover ? '#000' : '#E1E1E1'}
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='relative 2xl:left-[0px] xl:left-[53px] left-[40px] top-[20px]'>
        <div className='flex flex-wrap space-x-5 relative left-[50px]'>
          {data?.results?.slice(0, 3).map((res, index) => {
            return (
              <motion.div
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{
                  delay: index * 0.25,
                  ease: 'easeInOut',
                  duration: 0.5
                }}
                viewport={{ amount: 0 }}
                key={index}
                onClick={() => HandleViewStory(res)}
                className='group cursor-pointer 
                  2xl:w-[195px] 2xl:h-[235px] 
                  xl:w-[195px] xl:h-[235px] 
                  lg:w-[250px] lg:h-[308px] 
                  md:w-[240px] md:h-[298px] 
                  w-[230px] h-[288px] 
                  
                  rounded-[18px] overflow-hidden relative'
                style={{
                  background: `linear-gradient(180deg, rgba(0, 0, 0, 0.20) 72.64%, #000 100%)`
                }}
              >
                <Image
                  src={res?.images?.[0]}
                  alt='Happy couple in the mountains'
                  layout='fill'
                  objectFit='cover'
                  className='-z-10 group-hover:opacity-90 duration-200'
                />

                <div className='absolute bottom-3 w-full text-center  p-2 text-white'>
                  <ul className=''>
                    <li style={Text} className='text-[10px]'>
                      Read Story of
                    </li>
                    <li
                      style={Text}
                      className='
                      2xl:text-[16px]
                      xl:text-[16px]
                      lg:text-[14px]
                      md:text-[14px]
                      text-[14px]
                      '
                    >
                      {res?.title}{' '}
                    </li>
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default StoryView
