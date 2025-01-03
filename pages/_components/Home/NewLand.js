import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Counter from '../../../components/common/animation/Counter'
import Slider from '../../../components/common/animation/Slider'
import { getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import Accordion from '../../../components/common/Features/Accordion'
import GlobalFooter from '../layout/GlobalFooter'
import styled from 'styled-components'
import Link from 'next/link'
import { motion } from 'framer-motion'

function NewLand () {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button when page is scrolled up to a certain height
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const GradientTextLi = styled.li`
     fontFamily: "Poppins",
        fontSize: "44px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "70px", /* 159.091% */
        background: 'linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent', // Ensure text color is transparent
    `

  const GradientText = {
    fontFamily: 'Poppins',

    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '70px' /* 159.091% */,
    background: 'linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    color: 'transparent' // Ensure text color is transparent
  }

  const GradientText2 = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '70px' /* 129.63% */,
    background: 'linear-gradient(98deg, #0F52BA -6.94%, #8225AF 63.93%)',
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent'
  }

  const ContentText = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const Bgcolor = {
    background: 'linear-gradient(285deg, #8225AF -2.3%, #0F52BA 106.84%)'
  }

  const List = {
    color: '#FFF',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }

  const Text1 = {
    color: '#FFF',
    fontFamily: 'Poppins',

    fontStyle: 'normal',
    fontWeight: '700',
    lineWeight: '70px' /* 129.63% */
  }

  const Text3 = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }
  const TitleText3 = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700'
  }

  const MonthPlan = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }
  const Price = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '34px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal'
  }
  const PaymentList = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const ProductName = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal' /* 87.5% */
  }
  const ProductList = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14px' /* 87.5% */
  }

  const AccordingBodyList = styled.ul`
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `

  const profilesData = [
    {
      id: 1,
      name: 'long-term',
      title: 'Long Term',
      content:
        'By creating this profile, you can find compatible partners for marriage and lifelong companionship',
      image: '/heroSec/longTerm-img.jpg'
    },
    {
      id: 2,
      name: 'dating',
      title: 'Dating',
      content:
        'By creating this profile, you can discover profiles for casual relationships',
      image: '/heroSec/profiles/dating-img.jpg'
    },
    {
      id: 3,
      name: 'friendship',
      title: 'Friendship',
      content:
        'By creating this profile, you can find friends and connect with groups for trips and activities.',
      image: '/heroSec/profiles/friendship-img.jpg'
    }
  ]

  const [activeProfile, setActiveProfile] = useState(profilesData[0]) // Start with the first profile
  const [currentIndex, setCurrentIndex] = useState(0)

  // Handle manual change
  const handleProfileChange = index => {
    if (index >= 0 && index < profilesData.length) {
      setCurrentIndex(index)
      setActiveProfile(profilesData[index])
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % profilesData.length
        setActiveProfile(profilesData[nextIndex])
        return nextIndex
      })
    }, 4000) // Change every 5 seconds

    return () => clearInterval(interval) // Clear interval on component unmount
  }, [])

  const [token, setToken] = useState('')
  const [ProfileType, SetProfileType] = useState('')

  useEffect(() => {
    setToken(getCookie('jwtToken'))
    SetProfileType(getCookie('UserProfile'))
  }, [])

  const router = useRouter()

  const GotoLogin = () => {
    if (!token) {
      router.push('/login')
    } else {
      if (ProfileType == 'dating') {
        router.push('/dating/dashboard')
      } else {
        router.push('/longterm/dashboard')
      }
    }
  }

  return (
    <>
      <div className={`${isVisible ? 'fixed' : 'hidden'} bottom-10 right-10`}>
        <button
          id='grad-button'
          onClick={scrollToTop}
          className='Scroll-Top-Btn'
        >
          <svg
            height='1.2em'
            className='Scroll-top-arrow'
            viewBox='0 0 512 512'
          >
            <path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z'></path>
          </svg>
          <p className='Scroll-Top-text'>Back to Top</p>
        </button>
      </div>
      <div className='mt-[100px] w-full h-full bg-[#FFF]'>
        <div className='space-y-[40px] 2xl:space-y-[40px] xl:space-y-[20px]'>
          <div className='2xl:space-y-[55px] sm:space-y-[45px] space-y-[30px]'>
            <h1 className='text-black text-center font-poppins font-bold leading-[50px] 2xl:text-[54px] sm:text-[40px] text-[34px] '>
              Single App, Multiple Choices.
            </h1>
            <div>
              <ul className='flex justify-center space-x-[15px] sm:space-x-[20px]'>
                {profilesData.map((profile, index) => {
                  return (
                    <li>
                      <button
                        onClick={() => handleProfileChange(index)}
                        name={profile?.name}
                        className={`text-center font-poppins font-normal leading-normal 2xl:w-[134px] 2xl:h-[50px] xl:w-[120px] xl:h-[40px] sm:w-[134px] sm:h-[50px] w-[100px] h-[37px] 2xl:text-[16px] xl:text-[14px] sm:text-[16px] text-[14px] rounded-[32px]  border-[1px] border-[#000] ${
                          index == currentIndex
                            ? 'bg-[#000] text-[#FFF]'
                            : ' text-[#000] bg-[#FFF] hover:bg-[#EFF5FF] hover:text-[#000]'
                        }`}
                      >
                        {profile?.title}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className=''>
            <div className='flex justify-center lg:justify-between pr-[0px] 2xl:pl-[200px] xl:pl-[160px] sm:pl-[50px] pl-[0px]'>
              <div className='mt-[5px] sm:mt-[20px] mb-[30px] lg:mb-[0px]'>
                <ul className='w-full space-y-[23px]'>
                  <li
                    className='text-[34px] sm:text-[44px]'
                    style={GradientText}
                  >
                    {activeProfile?.title}
                  </li>
                  <li className='w-[300px] sm:w-[483px] ' style={ContentText}>
                    {activeProfile?.content}
                  </li>
                  <li className='space-x-[25px]'>
                    <button
                      onClick={GotoLogin}
                      id='grad-button'
                      className='w-[158px] h-[50px] rounded-[32px]'
                    >
                      {token ? 'Explore Now' : 'Create Profile'}
                    </button>
                    <button
                      onClick={() => router.push('/longterm/features')}
                      className='w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]'
                    >
                      Learn More
                    </button>
                  </li>
                </ul>
              </div>

              <div className='hidden lg:block'>
                <Image
                  width={0}
                  height={0}
                  alt='img-1'
                  src={activeProfile?.image}
                  loading='lazy'
                  className={`w-[auto] 2xl:h-[385px] xl:h-[330px] h-[300px] relative right-[80px]`}
                />
              </div>
            </div>
            <div
              style={Bgcolor}
              className='w-[100%]  lg:h-[553px] px-[20px] md:px-[0px] pb-[30px] lg:pb-[0px]'
            >
              <div className='grid lg:flex justify-center lg:justify-evenly items-center  pt-[30px] lg:pt-[115px]'>
                <div className=''>
                  <ul className='space-y-[20px] lg:space-y-[26px] '>
                    <li
                      className='w-[315px] sm:w-[400px] 2xl:text-[54px] sm:text-[40px] text-[44px] ml-[0px] sm:ml-[45px]'
                      style={Text1}
                    >
                      India’s <br /> Most Secured Social Site
                    </li>
                    <li
                      className=' w-[315px] sm:w-[468px] text-[18px] text-[#FFF] ml-[0px] sm:ml-[45px]'
                      style={Text3}
                    >
                      Connect with your chosen profiles and build stronger
                      relationships
                    </li>
                  </ul>
                </div>
                <div className='mt-[30px] lg:mt-[0px] ml-[0px] sm:ml-[45px]'>
                  <ul className='space-y-[30px] lg:space-y-[60px]'>
                    <li className='flex space-x-[40px]  md:space-x-[63px] place-items-center'>
                      <div>
                        <Image
                          width={0}
                          height={0}
                          alt='privacy'
                          loading='lazy'
                          src={'/heroSec/icon/icon-1.svg'}
                          className='w-[21.364px] md:w-[33.827px] h-[24px] md:h-[38px]'
                        />
                      </div>
                      <div
                        style={List}
                        className='2xl:text-[28px] xl:text-[22px] md:text-[24px] text-[22px]'
                      >
                        100% Privacy
                      </div>
                    </li>
                    <li className='flex space-x-[40px] md:space-x-[63px] place-items-center'>
                      <div>
                        <Image
                          width={0}
                          height={0}
                          alt='privacy'
                          loading='lazy'
                          src={'/heroSec/icon/icon-3.svg'}
                          className='w-[21.364px] md:w-[33.827px] h-[24px] md:h-[38px]'
                        />
                      </div>
                      <div
                        style={List}
                        className='2xl:text-[28px] xl:text-[22px] text-[24px]'
                      >
                        Zero Fake Profiles
                      </div>
                    </li>
                    <li className='flex space-x-[40px] md:space-x-[63px] place-items-center'>
                      <div>
                        <Image
                          width={0}
                          height={0}
                          alt='privacy'
                          loading='lazy'
                          src={'/heroSec/icon/icon-2.svg'}
                          className='w-[21.364px] md:w-[33.827px] h-[24px] md:h-[38px]'
                        />
                      </div>
                      <div
                        style={List}
                        className='2xl:text-[28px] xl:text-[22px] text-[24px]'
                      >
                        Fully Secured
                      </div>
                    </li>
                    <li className='flex space-x-[40px] md:space-x-[63px] place-items-center'>
                      <div>
                        <Image
                          width={0}
                          height={0}
                          alt='privacy'
                          loading='lazy'
                          src={'/heroSec/icon/icon-4.svg'}
                          className='w-[21.364px] md:w-[33.827px] h-[24px] md:h-[38px]'
                        />
                      </div>
                      <div
                        style={List}
                        className='2xl:text-[28px] xl:text-[22px] text-[24px]'
                      >
                        Verified Profiles
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* flex-col-reverse  */}
          <div className='w-full h-full lg:pb-[20px] pt-[0px] lg:pt-[80px] px-[20px] lg:px-[0px]'>
            <div className='md:flex md:flex-row   w-full grid  justify-center md:justify-evenly items-center'>
              <div className=' w-full md:w-[400px] justify-center md:justify-start space-y-[30px] lg:space-y-[40px]'>
                <h1
                  id='gradient-Text-style'
                  style={GradientText2}
                  className='2xl:text-[54px] xl:text-[45px] lg:text-[40px] text-[44px]'
                >
                  Chat anytime you want
                </h1>
                <p
                  style={Text3}
                  className='text-[#000] 2xl:text-[18px] xl:text-[16px] text-[18px] '
                >
                  Connect with your chosen profiles and build stronger
                  relationships
                </p>
                <Image
                  width={0}
                  height={0}
                  alt='chat-ui'
                  loading='lazy'
                  src={'/heroSec/assests/chat-img-1.svg'}
                  className='md:hidden flex justify-center 2xl:w-[530px] 2xl:h-[530px] xl:w-[490px] xl:h-[490px] lg:w-[530px] lg:h-[530px] w-[530px] h-[530px] '
                />
                <ul className='flex space-x-[50px] sm:space-x-[70px] justify-center md:justify-start'>
                  <li className='space-y-[8px] flex flex-col justify-center items-center'>
                    <Image
                      width={0}
                      height={0}
                      alt='emoji'
                      src={'/heroSec/icon/emoji-icon.svg'}
                      loading='lazy'
                      className='w-[30px] h-[30px]'
                    />
                    <p
                      className='text-[14px] text-center text-[#000]'
                      style={Text3}
                    >
                      Emoji
                    </p>
                  </li>
                  <li className='space-y-[8px] flex flex-col justify-center items-center'>
                    <Image
                      width={0}
                      height={0}
                      alt='img'
                      src={'/heroSec/icon/img-icon.svg'}
                      loading='lazy'
                      className='w-[30px] h-[30px]'
                    />
                    <p
                      className='text-[14px] text-center text-[#000]'
                      style={Text3}
                    >
                      Image
                    </p>
                  </li>
                  <li className='space-y-[8px] flex flex-col justify-center items-center'>
                    <Image
                      width={0}
                      height={0}
                      alt='mic'
                      src={'/heroSec/icon/mic-icon.svg'}
                      loading='lazy'
                      className='w-[30px] h-[30px]'
                    />
                    <p
                      className='text-[14px] text-center text-[#000]'
                      style={Text3}
                    >
                      Audio
                    </p>
                  </li>
                  <li className='space-y-[8px] flex flex-col justify-center items-center'>
                    <Image
                      width={0}
                      height={0}
                      alt='video-call'
                      src={'/heroSec/icon/video-call-icon.svg'}
                      loading='lazy'
                      className='w-[30px] h-[30px]'
                    />
                    <p
                      className='text-[14px] text-center text-[#000]'
                      style={Text3}
                    >
                      Video
                    </p>
                  </li>
                </ul>
                <ul className='flex space-x-[20px] lg:space-x-[25px] justify-center md:justify-start'>
                  <li>
                    <button
                      onClick={GotoLogin}
                      className='text-center font-poppins font-normal leading-normal w-[158px] h-[50px] rounded-[32px] bg-[#000] text-[#FFF]'
                    >
                      {'Start Chat'}
                    </button>
                  </li>
                  <li>
                    <button
                      className='text-center font-poppins font-normal leading-normal w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#000] text-[#000] hover:bg-[#EFF5FF]'
                      onClick={() => router.push('/chat-features')}
                    >
                      Learn More
                    </button>
                  </li>
                </ul>
              </div>
              <motion.div
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{
                  delay: 1,
                  duration: 0.8,
                  ease: 'easeInOut'
                }}
                viewport={{
                  once: true,
                  amount: 0.5
                }}
              >
                <Image
                  width={0}
                  height={0}
                  alt='chat-ui'
                  loading='lazy'
                  src={'/heroSec/assests/chat-img-1.svg'}
                  className='hidden md:block 2xl:w-[530px] 2xl:h-[530px] xl:w-[490px] xl:h-[490px] lg:w-[530px] lg:h-[530px] w-[530px] h-[530px]'
                />
              </motion.div>
            </div>
          </div>

          <div className='bg-[#FDF8FF] pt-[0px] lg:pt-[50px] w-full h-[774px] flex flex-col justify-evenly items-center px-[15px] md:px-[0px]'>
            <div className='text-center space-y-[12px]'>
              <h1
                className='2xl:text-[50px] xl:text-[50px] md:text-[40px] text-[34px] md:leading-[70px]'
                style={TitleText3}
              >
                We offered most affordable plans
              </h1>
              <p
                className='text-[14px] md:text-[18px] text-[#000]'
                style={Text3}
              >
                Connect with your chosen profiles and build stronger
                relationships
              </p>
            </div>
            <div className='w-[80%] text-center space-y-[90px]'>
              <ul className='md:flex justify-evenly w-full'>
                <li>
                  <div>
                    <h1 style={MonthPlan}>One Month Plan</h1>
                    <ul className='flex items-center justify-center space-x-[5px]'>
                      <li style={Price}>Rs.</li>
                      <li>
                        <Counter from={0} to={399} duration={6} />
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='w-[100%] md:w-[1px] h-[0.5px] md:h-[72px] mt-[20px] md:mt-[0px] mb-[20px] md:mb-[0px] bg-[#ADADAD]'></li>
                <li>
                  <div>
                    <h1 style={MonthPlan}>Two Month Plan</h1>
                    <ul className='flex items-center justify-center space-x-[5px]'>
                      <li style={Price}>Rs.</li>
                      <li>
                        <Counter from={0} to={599} duration={6} />
                      </li>
                    </ul>
                  </div>
                </li>
                <li className='w-[100%] md:w-[1px] h-[0.5px] md:h-[72px] mt-[20px] md:mt-[0px] mb-[20px] md:mb-[0px] bg-[#ADADAD]'></li>
                <li>
                  <div>
                    <h1 style={MonthPlan}>Three Month Plan</h1>
                    <ul className='flex items-center justify-center space-x-[5px]'>
                      <li style={Price}>Rs.</li>
                      <li>
                        <Counter from={0} to={799} duration={6} />
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div>
                <button
                  onClick={() =>
                    token
                      ? router.push('/longterm/dashboard/upgrade')
                      : router.push('/login')
                  }
                  className='text-center font-poppins font-normal leading-normal w-[212px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF]'
                >
                  Discover More Plans
                </button>
              </div>
            </div>
            <div className='w-full text-center space-y-[40px]'>
              <div>
                <p style={PaymentList}>We accept</p>
              </div>
              <div className='w-full flex justify-center'>
                <Slider />
              </div>
            </div>
          </div>

          <div className='border-b-[1px] border-b-[#E9E9E9] pb-[60px] px-[15px] md:px-[0px]'>
            <div className='text-center'>
              <h1 className='2xl:text-[50px] xl:text-[40px] lg:text-[40px] text-[34px] text-black font-poppins  font-bold leading-[50px] lg:leading-[70px]'>
                Frequently Asked Questions
              </h1>
            </div>
            <ul className='px-5 flex flex-col items-center space-y-[13px] mt-[40px] md:mt-[80px]'>
              <li className='w-[100%] lg:w-[70%] text-[11px] sm:text-[13px] md:text-[15px] lg:text-[full]'>
                <Accordion title={'How do I create an account on HappyMilan?'}>
                  <AccordingBodyList>
                    {' '}
                    <li>
                      Step 1: Click on{' '}
                      <span className='text-[#0F52BA]'> “Sign up.”</span>
                    </li>
                    <li>
                      Step 2: Enter your{' '}
                      <span className='text-[#0F52BA]'>
                        {' '}
                        “Email or mobile number.”
                      </span>
                    </li>
                    <li>Step 3: Choose a password.</li>
                    <li>
                      Step 4: Select the registration type, either{' '}
                      <span className='text-[#0F52BA]'>
                        {' '}
                        “Long Term, Dating or Social"
                      </span>
                    </li>
                    <li className='mt-[30px]'>
                      after selection of registration type , you’ll be
                      redirecting to your own dashboard and at this stage you’ll
                      have successfully registered on HappyMilan. But you’ll be
                      restricted to send request until you don’t complete the
                      registration form. Once we’ve all the information, we’ll
                      be able to give you perfect suggestion matches based on
                      your information.
                    </li>
                    <li className='mt-[21px]'>
                      Wish you’ll have great experience on HappyMilan.com
                    </li>
                  </AccordingBodyList>
                </Accordion>
              </li>
              <li className='w-[100%] lg:w-[70%] text-[11px] sm:text-[13px] md:text-[15px] lg:text-[full]'>
                <Accordion title='Is happyMilan for matrimony, dating or social account purpose?'>
                  HappyMilan is a social networking website that caters to
                  multiple categories: long term, dating and social. Users can
                  select either option when registering.
                </Accordion>
              </li>

              <li className='w-[100%] lg:w-[70%] text-[11px] sm:text-[13px] md:text-[15px] lg:text-[full]'>
                <Accordion title='How to verify my account?'>
                  <AccordingBodyList>
                    <p>
                      Yes, you can verify your account by following these steps:
                    </p>
                    <ul className='space-y-2 pt-2 pb-2'>
                      <li>
                        <b>1.</b> Go to Account Settings: Access your account
                        settings from your profile.
                      </li>
                      <li>
                        <b>2.</b> Select KYC Details: Navigate to the KYC (Know
                        Your Customer) section.
                      </li>
                      <li>
                        <b>3.</b> Upload Your ID: Provide a clear photo of a
                        government-issued ID, such as a passport, driver’s
                        license, or national ID card.{' '}
                      </li>
                      <li>
                        <b>4.</b> Photo Verification: Submit a recent selfie or
                        use the in-app photo verification tool to match your
                        photo with the ID provided.
                      </li>
                    </ul>

                    <p>
                      Your documents will be reviewed, and you’ll receive a
                      notification once the verification process is complete.
                    </p>
                  </AccordingBodyList>
                </Accordion>
              </li>
              <li className='w-[100%] lg:w-[70%] text-[11px] sm:text-[13px] md:text-[15px] lg:text-[full]'>
                <Accordion title='What is the difference between dating, long term, and social profiles?'>
                  <AccordingBodyList>
                    <ul className='space-y-2'>
                      <li>
                        <b>Dating profiles </b> &nbsp; are geared toward users
                        seeking casual or serious relationships.
                      </li>
                      <li>
                        <b>Long Term profiles</b> &nbsp; are for those looking
                        for a lifelong partner. You can indicate your preference
                        during the signup process or switch between them later
                        in your profile settings.
                      </li>
                      <li>
                        <b>Social Profiles</b> &nbsp; are designed for those
                        seeking friends, groups, and events. This feature helps
                        you expand your social connections and build meaningful
                        relationships.
                      </li>
                    </ul>
                  </AccordingBodyList>
                </Accordion>
              </li>

              <li className='w-[100%] lg:w-[70%] text-[11px] sm:text-[13px] md:text-[15px] lg:text-[full]'>
                <Accordion title='What payment methods do you accept?'>
                  <AccordingBodyList>
                    <p>We accept a wide range of payment methods, including:</p>
                    <ul className='space-y-2 pt-2 pb-2 '>
                      <li>
                        <b>1.</b> Credit/Debit Cards (Visa, MasterCard, American
                        Express)
                      </li>
                      <li>
                        <b>2.</b> Digital Wallets (PayPal, Google Pay, Apple
                        Pay)
                      </li>
                      <li>
                        <b>3.</b> Net Banking and UPI (for users in supported
                        regions)
                      </li>
                      <li>
                        <b>4.</b> Mobile Payments (where available)
                      </li>
                    </ul>
                  </AccordingBodyList>
                </Accordion>
              </li>

              <li className='w-[100%] lg:w-[70%] text-[11px] sm:text-[13px] md:text-[15px] lg:text-[full]'>
                <Accordion title='What types of membership plans are available?'>
                  <AccordingBodyList>
                    <p>
                      We offer various membership plans to cater to different
                      needs:
                    </p>
                    <ul className='space-y-2 pt-2 pb-2'>
                      <li className='flex space-x-2'>
                        <span>
                          <b>Silver :</b>
                        </span>
                        <p>
                          Includes Send message unto 10 profile | Send requests
                          up to 10 profiles | Online support available explore.
                        </p>
                      </li>
                      <li className='flex space-x-2'>
                        <span>
                          <b>Gold Plan: </b>
                        </span>
                        <p>
                          includes Send message unto 20 profile | Send requests
                          up to 20 profiles | Online support available.
                        </p>
                      </li>
                      <li className='flex space-x-2'>
                        <span>
                          <b>Platinum Plan:</b>
                        </span>
                        <p>
                          includes Send message unto 30 profile | Send requests
                          up to 30 profiles | Online support available.
                        </p>
                      </li>
                    </ul>
                  </AccordingBodyList>
                </Accordion>
              </li>
            </ul>
            <div className='pt-[65px] text-center'>
              <button
                onClick={() => router.push('/faq')}
                className='w-[158px] h-[50px] rounded-[32px] border-[1px] border-[#8225AF] hover:bg-[#EFF5FF] text-center font-poppins font-normal leading-normal'
              >
                Learn More
              </button>
            </div>
          </div>
          <div className='md:space-y-[80px]'>
            <div className='text-center pt-[0px] md:pt-[80px]'>
              <h1 className='2xl:text-[50px] xl:text-[40px] lg:text-[40px] md:text-[20px] text-[28px] text-black font-poppins  font-bold leading-[70px]'>
                Discover more appss
              </h1>
            </div>
            <ul className='flex flex-col justify-center items-center space-y-5 lg:space-y-0 lg:flex-row lg:justify-evenly mt-[20px] md:mt-[0px] '>
              <li className='cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]'>
                <div className='flex flex-col justify-evenly w-full h-full'>
                  <div>
                    <Image
                      width={0}
                      height={0}
                      alt='proffers'
                      src={'/assests/product-assests/proffers.svg'}
                      className='w-[50.702px] h-[44px]'
                    />
                  </div>
                  <div className='space-y-[20px]'>
                    <h1 style={ProductName}>Proxale</h1>
                    <p style={ProductList}>Explore Nearby Services</p>
                  </div>
                  <div className='flex justify-end pr-[31px]'>
                    <Image
                      width={25.667}
                      height={26.341}
                      alt='arrow-icon'
                      src={'/heroSec/icon/arrow-icon.svg'}
                    />
                  </div>
                </div>
              </li>
              <li className='cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]'>
                <div className='flex flex-col justify-evenly w-full h-full'>
                  <div>
                    <Image
                      width={0}
                      height={0}
                      alt='Trendigo'
                      src={'/assests/product-assests/Trendigo.svg'}
                      className='w-[33.885px] h-[44px]'
                    />
                  </div>
                  <div className='space-y-[20px]'>
                    <h1 style={ProductName}>Trendigo</h1>
                    <p style={ProductList}>Shop for Men & Women</p>
                  </div>
                  <div className='flex justify-end pr-[31px]'>
                    <Image
                      width={25.667}
                      height={26.341}
                      alt='arrow-icon'
                      src={'/heroSec/icon/arrow-icon.svg'}
                    />
                  </div>
                </div>
              </li>
              <li className='cursor-pointer 2xl:w-[335px] 2xl:h-[335px] xl:w-[290px] xl:h-[290px] w-[323px] h-[323px] border-[1px]  border-[#E1E1E1] hover:border-[#8225AF] rounded-[24px] pl-[40px]'>
                <div className='flex flex-col justify-evenly w-full h-full'>
                  <div>
                    <Image
                      width={0}
                      height={0}
                      alt='proffers'
                      src={'/assests/product-assests/adskaro.svg'}
                      className='w-[57.538px] h-[44px]'
                    />
                  </div>
                  <div className='space-y-[20px]'>
                    <h1 style={ProductName}>AdsKaro</h1>
                    <p style={ProductList}>Daily Ads Services</p>
                  </div>
                  <div className='flex justify-end pr-[31px]'>
                    <Image
                      width={25.667}
                      height={26.341}
                      alt='arrow-icon'
                      src={'/heroSec/icon/arrow-icon.svg'}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className='w-full h-full pt-[10px] md:pt-[100px]'>
            <div className='w-full h-[229px] bg-[#FDF8FF]'>
              <div className='flex justify-center lg:justify-between items-center p-[40px] lg:p-[0px] lg:pr-[100px] lg:pl-[100px]'>
                <div className='  space-y-[37px]'>
                  <p
                    className='text-[18px] lg:text-[24px] text-[#000]'
                    style={Text3}
                  >
                    Your gateway to the limitless potentials, Download App
                  </p>
                  <ul className='flex justify-center lg:justify-start space-x-[40px]'>
                    <li>
                      <Link
                        href={'https://play.google.com/store/apps?hl=en_IN'}
                        target='_blank'
                      >
                        {' '}
                        <Image
                          width={0}
                          height={0}
                          alt='google-play'
                          loading='lazy'
                          className='w-[148.5px] h-[44px]'
                          src={'/heroSec/assests/play-store.svg'}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={'https://www.apple.com/in/app-store'}
                        target='_blank'
                      >
                        <Image
                          width={0}
                          height={0}
                          alt='google-play'
                          loading='lazy'
                          className='w-[148.5px] h-[44px]'
                          src={'/heroSec/assests/app-store.svg'}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='relative top-[30px] hidden lg:block'>
                  <Image
                    width={0}
                    height={0}
                    alt='app'
                    loading='lazy'
                    src={
                      'https://happymilan.vercel.app/heroSec/assests/app-frame.svg'
                    }
                    className='w-[160.043px] h-[auto]'
                  />
                </div>
              </div>
            </div>
          </div>

          <GlobalFooter />
        </div>
      </div>
    </>
  )
}

export default NewLand
