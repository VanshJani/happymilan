import React, { useCallback, useEffect, useMemo, useState } from 'react'
import CommonNavbar from '../_components/layout/AuthNavbar'
import Image from 'next/image'
import { getCookie } from 'cookies-next'
import GlobalFooter from '../_components/layout/GlobalFooter'
import { useRouter } from 'next/router'

function index () {
  const [token, setToken] = useState('')
  const router = useRouter()

  // Fetch token on mount
  useEffect(() => {
    const jwtToken = getCookie('jwtToken')
    setToken(jwtToken)
  }, [])

  // Memoized function for login redirection
  const GotoLogin = useCallback(() => {
    if (token) {
      router.push('/longterm/dashboard')
    } else {
      router.push('/login')
    }
  }, [token, router])

  // Memoized styles to avoid re-creation on every render
  const styles = useMemo(
    () => ({
      Heading: {
        color: '#000',
        fontFamily: 'Poppins',
        fontWeight: 800,
        lineHeight: 'normal'
      },
      Content: {
        color: '#000',
        fontFamily: 'Poppins',
        fontWeight: 400,
        lineHeight: 'normal'
      },
      Text: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: '34px',
        fontWeight: 800,
        lineHeight: 'normal'
      },
      Text2: {
        color: '#000',
        fontFamily: 'Poppins',
        fontWeight: 400,
        lineHeight: 'normal'
      },
      Text3: {
        fontFamily: 'Poppins',
        fontSize: '28px',
        fontWeight: 800,
        lineHeight: 'normal'
      },
      Text4: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: 'normal'
      },
      TitleText: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '44px',
        fontWeight: 700,
        lineHeight: '70px'
      },
      btnText: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: 'normal'
      }
    }),
    []
  )

  return (
    <>
      <CommonNavbar />
      <div className='pt-[100px] 2xl:pt-[120px] xl:pt-[90px] lg:pt-[90px] space-y-[40px] lg:space-y-[80px] px-[20px] md:px-[40px] lg:px-[0px]'>
        <div className='w-full flex justify-center items-center'>
          <div className='w-[100%] lg:w-[75%] lg:flex justify-evenly lg:space-x-[176px] items-center'>
            <div className='hidden lg:block'>
              <Image
                width={0}
                height={0}
                alt='image-1'
                src={'/assests/about/grid-layout.svg'}
                className='w-[356px] h-[530px]'
              />
            </div>
            <div>
              <ul className='2xl:w-[500px] xl:w-[450px] lg:w-[500px] w-[100%] space-y-[15px]'>
                <li className='lg:w-[443px]'>
                  <h1
                    style={styles?.Heading}
                    className='text-[34px] 2xl:text-[48px] xl:text-[40px] lg:text-[48px] '
                  >
                    Single App, Multiple Choices.
                  </h1>
                </li>
                <li>
                  <p
                    style={styles?.Content}
                    className='text-[24px] 2xl:text-[24px] xl:text-[20px] lg:text-[24px]'
                  >
                    Welcome to HappyMilan your hub for finding a life partner,
                    exploring dating opportunities, and making new friends. Join
                    us to connect with a vibrant community and discover
                    meaningful relationships.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center items-center'>
          <div className='space-y-[20px] lg:space-y-[40px] 2xl:w-[70%] xl:w-[75%] lg:w-[65%] w-[100%]'>
            <div>
              <span style={styles?.Text}>Who we are?</span>
            </div>
            <ul className='space-y-[15px]'>
              <li style={styles?.Text2} className='text-[24px]'>
                Welcome to HappyMilan, where we bring people together to create
                meaningful connections. Our platform is designed to cater to
                those seeking lifelong partnerships, exciting dating
                opportunities, or lasting friendships.
              </li>
              <li style={styles?.Text2} className='text-[16px]'>
                At HappyMilan, we believe that every connection starts with
                understanding and mutual respect. Our mission is to provide a
                safe and engaging environment where users can explore their
                relationship goals and meet like-minded individuals. Whether
                you’re looking for a life partner, new dates, or friends who
                share your interests, our platform is here to support you every
                step of the way.
              </li>
              <li style={styles?.Text2} className='text-[16px]'>
                Join us and become part of a vibrant community where connections
                flourish, and relationships thrive. Together, we’re making the
                journey to meaningful connections easier and more fulfilling
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full grid place-items-center'>
          <div className='bg-[#CACACA] h-[1px] 2xl:w-[70%] xl:w-[75%] lg:w-[65%] w-[100%] grid place-items-center'></div>
        </div>
        <div className='grid place-items-center space-y-[40px]'>
          <div className='2xl:w-[70%] xl:w-[75%] lg:w-[65%]'>
            <ul className='space-y-[20px] lg:space-y-[40px]'>
              <li>
                <h1 style={styles?.Text3} className='text-[#0F52BA]'>
                  Mission
                </h1>
              </li>
              <li>
                <p style={styles?.Text4}>
                  To connect individuals through genuine and meaningful
                  relationships, fostering a supportive community for matrimony,
                  dating, and friendships.
                </p>
              </li>
            </ul>
          </div>
          <div className='2xl:w-[70%] xl:w-[75%] lg:w-[65%]'>
            <ul className='space-y-[20px] lg:space-y-[40px]'>
              <li>
                <h1 style={styles?.Text3} className='text-[#8225AF]'>
                  Vision
                </h1>
              </li>
              <li>
                <p style={styles?.Text4}>
                  To be the leading platform for creating lasting connections,
                  where everyone finds their perfect match and builds a network
                  of meaningful relationships.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full grid place-items-center'>
          <div className='bg-[#CACACA] h-[1px] 2xl:w-[70%] xl:w-[75%] lg:w-[65%] w-[100%] grid place-items-center'></div>
        </div>

        <div className='w-full'>
          <ul className='space-y-[42px] text-center'>
            <li style={styles?.TitleText}>Discover Your Perfect Match Now!</li>
            <li>
              <button
                style={styles?.btnText}
                id='grad-button'
                onClick={GotoLogin}
                className='w-[244px] h-[70px] rounded-[35px]'
              >
                {token ? 'Explore Now' : 'Create Profile'}
              </button>
            </li>
          </ul>
        </div>
        <div className='border-t-[1px] border-t-[#E1E1E1]'>
          <GlobalFooter />
        </div>
      </div>
    </>
  )
}

export default index
