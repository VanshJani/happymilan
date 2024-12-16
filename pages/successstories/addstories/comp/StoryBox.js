import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readStory } from '../../../../store/actions/UserStoryAction'

function StoryBox () {

    const { loading, data, error } = useSelector(
        state => state.storyviews.storydata
      )
  const router = useRouter()

  const Text = {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }
  const Text2 = {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal'
  }

  const TitleText = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700'
    // lineHeight: '70px'
  }

  const dispatch = useDispatch()

  const HandleViewStory = res => {
    router.push(`/successstories/${res?._id}`)
    dispatch(readStory(res?._id))
  }

  return (
    <>
      <div className='mt-28 grid place-items-center w-full'>
        <div className='2xl:w-[1200px] 2xl:p-0 2xl:pr-0 pl-5 pr-5 lg:pl-32 lg:pr-32 w-full'>
          <div className='w-full '>
            <ul className='w-full grid place-items-center md:flex md:justify-between'>
              <li className='w-full md:text-left text-center'>
                <h1
                  style={TitleText}
                  className='text-[20px] lg:text-[30px] lg:leading-[70px]'
                >
                  Recent Success Stories
                </h1>
              </li>
              <li>
                <button
                  className='w-[188px] h-[44px] rounded-[100px]'
                  id='grad-button'
                  onClick={() => router.push('/successstories/addstories')}
                >
                  Share Your Story
                </button>
              </li>
            </ul>
          </div>

          <div className='place-items-center grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-5 xl:gap-5 lg:gap-5 md:gap-5 gap-5 mt-11'>
            {data?.results.map((res, index) => {
              return (
                <div
                  key={index}
                  onClick={() => HandleViewStory(res)}
                  className='group cursor-pointer 
                  2xl:w-[270px] 2xl:h-[328px] 
                  xl:w-[280px] xl:h-[338px] 
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
                      <li style={Text} className='text-[16px]'>
                        Read Story of
                      </li>
                      <li
                        style={Text}
                        className='
                      2xl:text-[24px]
                      xl:text-[24px]
                      lg:text-[20px]
                      md:text-[20px]
                      text-[20px]
                      '
                      >
                        {res?.title}{' '}
                      </li>
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          <div className=' w-full mt-11'>
            <div
              className='cursor-pointer w-full h-[338px] rounded-[18px]  overflow-hidden relative'
              style={{
                background: `linear-gradient(270deg, rgba(0, 0, 0, 0.00) 48.51%, #000 100%)`
              }}
            >
              <div className='absolute'>
                <ul className='m-16 space-y-5'>
                  <li className='w-[80%]'>
                    <h1 style={Text2} className='text-[34px]'>
                      Share Your Journey, Receive Personalized Gifts!
                    </h1>
                  </li>
                  <li>
                    <button
                      className='w-[202px] h-[55px] rounded-[100px] font-[Poppins] text-[16px]'
                      id='grad-button'
                    >
                      Share Your Story
                    </button>
                  </li>
                </ul>
              </div>
              <Image
                src='/assests/stories/young-couple-love-standing-grassy-hill-mountains.svg'
                alt='Happy couple in the mountains'
                layout='fill'
                objectFit='cover'
                className='-z-10'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StoryBox
