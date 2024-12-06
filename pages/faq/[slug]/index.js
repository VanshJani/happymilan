import { useRouter } from 'next/router'
import AuthNavbar from '../../_components/layout/AuthNavbar'
import React from 'react'
import CustomAccordion from '../../../components/common/Features/Accordion'
import GlobalFooter from '../../_components/layout/GlobalFooter'
import styled from 'styled-components'
import { FAQ_Options } from '../../../utils/Schema/FAQOptions'

function index () {
  const router = useRouter()

  const { slug } = router.query

  const CurrentSlugName = FAQ_Options?.find(options => options?.slug == slug)

  const PersonalSection = () => {
    const Text = {
      color: '#000',
      fontFamily: 'Poppins',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal'
    }
    const Text2 = {
      color: '#000',
      fontFamily: 'Poppins',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal'
    }

    return (
      <>
        <div className='flex space-x-12 flex-wrap'>
          <div className='grid place-items-center'>
            <ul className=' grid place-items-center space-y-[22px]'>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='34'
                  height='34'
                  viewBox='0 0 34 34'
                  fill='none'
                >
                  <path
                    d='M31.7278 34C28.1454 34 24.4731 33.1031 20.7108 31.3092C16.9485 29.515 13.453 26.9969 10.2244 23.7548C6.99621 20.5132 4.48499 17.0179 2.69078 13.269C0.896927 9.52018 0 5.85455 0 2.27216C0 1.62297 0.2125 1.08198 0.6375 0.649186C1.0625 0.216394 1.59375 0 2.23125 0H7.48638C8.06402 0 8.568 0.181866 8.99831 0.545595C9.42898 0.909324 9.72064 1.37594 9.87328 1.94544L10.9273 7.0125C11.0254 7.60644 11.0077 8.12547 10.8742 8.56959C10.7406 9.01372 10.5049 9.37745 10.1671 9.66078L5.50481 14.0085C6.37642 15.5913 7.34011 17.0618 8.39588 18.42C9.45165 19.7783 10.5775 21.0648 11.7736 22.2796C13.0075 23.5138 14.3356 24.6615 15.7579 25.7226C17.1799 26.7837 18.7409 27.7856 20.4409 28.7284L24.9852 24.1023C25.3312 23.729 25.7201 23.4832 26.1518 23.3649C26.5836 23.2463 27.061 23.2224 27.5841 23.2932L32.0546 24.2085C32.6322 24.3502 33.1009 24.6411 33.4608 25.0814C33.8203 25.5212 34 26.0259 34 26.5954V31.7688C34 32.4062 33.7836 32.9375 33.3508 33.3625C32.918 33.7875 32.377 34 31.7278 34ZM4.50766 12.0142L8.58606 8.26306C8.72206 8.15398 8.8106 8.00417 8.85169 7.81363C8.89242 7.62273 8.88551 7.44565 8.83097 7.28238L7.88694 2.77897C7.8324 2.5608 7.73712 2.39736 7.60112 2.28863C7.46477 2.17954 7.28769 2.125 7.06987 2.125H2.70938C2.54575 2.125 2.40957 2.17954 2.30084 2.28863C2.19176 2.39736 2.13722 2.53353 2.13722 2.69716C2.17795 4.14924 2.4055 5.66525 2.81988 7.24519C3.2339 8.82548 3.79649 10.4152 4.50766 12.0142ZM22.4639 29.7256C23.8993 30.4367 25.4297 30.9625 27.055 31.3028C28.6799 31.6436 30.0958 31.8261 31.3028 31.8506C31.4665 31.8506 31.6026 31.796 31.7114 31.6869C31.8205 31.5779 31.875 31.4417 31.875 31.2784V27.0119C31.875 26.7941 31.8205 26.617 31.7114 26.4807C31.6026 26.3447 31.4392 26.2494 31.221 26.1949L27.2898 25.3895C27.1265 25.335 26.9836 25.3282 26.8611 25.3693C26.7382 25.41 26.6087 25.4986 26.4727 25.6349L22.4639 29.7256Z'
                    fill='#8225AF'
                  />
                </svg>
              </li>
              <li className='text-center'>
                <p style={Text}>+91 91048 14072</p>
                <p style={Text2}>( Mon-Fri 9:00 AM to 6:00 PM)</p>
              </li>
            </ul>
          </div>

          <div className='h-[135px] w-[1px] bg-[#C9C9C9]'></div>

          <div className='grid place-items-center'>
            <ul className=' grid place-items-center space-y-[22px]'>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='44'
                  height='34'
                  viewBox='0 0 44 34'
                  fill='none'
                >
                  <path
                    d='M3.92336 34C2.8054 34 1.87202 33.6256 1.12321 32.8768C0.374405 32.128 0 31.1946 0 30.0766V3.92336C0 2.8054 0.374405 1.87202 1.12321 1.12321C1.87202 0.374405 2.8054 0 3.92336 0H39.7909C40.9089 0 41.8423 0.374405 42.5911 1.12321C43.3399 1.87202 43.7143 2.8054 43.7143 3.92336V30.0766C43.7143 31.1946 43.3399 32.128 42.5911 32.8768C41.8423 33.6256 40.9089 34 39.7909 34H3.92336ZM21.8571 17.2805L2.42857 4.57664V30.0766C2.42857 30.5126 2.56862 30.8708 2.84871 31.1513C3.12921 31.4314 3.48743 31.5714 3.92336 31.5714H39.7909C40.2269 31.5714 40.5851 31.4314 40.8656 31.1513C41.1457 30.8708 41.2857 30.5126 41.2857 30.0766V4.57664L21.8571 17.2805ZM21.8571 14.5714L40.5383 2.42857H3.17596L21.8571 14.5714ZM2.42857 4.57664V2.42857V30.0766C2.42857 30.5126 2.56862 30.8708 2.84871 31.1513C3.12921 31.4314 3.48743 31.5714 3.92336 31.5714H2.42857V4.57664Z'
                    fill='#0F52BA'
                  />
                </svg>
              </li>
              <li className='text-center'>
                <p style={Text}>help@happpymilan.com</p>
                <p style={Text2}>(Respond within 24 hours)</p>
              </li>
            </ul>
          </div>
          <div className='h-[135px] w-[1px] bg-[#C9C9C9]'></div>
          <div className='grid place-items-center'>
            <ul className=' grid place-items-center space-y-[22px]'>
              <li>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='36'
                  height='34'
                  viewBox='0 0 36 34'
                  fill='none'
                >
                  <path
                    d='M6.96844 20.9053H20.9053V18.9143H6.96844V20.9053ZM6.96844 14.9324H28.8692V12.9414H6.96844V14.9324ZM6.96844 8.95942H28.8692V6.96844H6.96844V8.95942ZM0 34V3.21643C0 2.29992 0.306943 1.53472 0.920829 0.920829C1.53472 0.306943 2.29992 0 3.21643 0H32.6212C33.5378 0 34.303 0.306943 34.9168 0.920829C35.5307 1.53472 35.8377 2.29992 35.8377 3.21643V24.6573C35.8377 25.5738 35.5307 26.339 34.9168 26.9529C34.303 27.5668 33.5378 27.8737 32.6212 27.8737H6.12625L0 34ZM5.2761 25.8828H32.6212C32.9279 25.8828 33.2087 25.7552 33.4639 25.5C33.7191 25.2448 33.8467 24.9639 33.8467 24.6573V3.21643C33.8467 2.90982 33.7191 2.62893 33.4639 2.37375C33.2087 2.11857 32.9279 1.99098 32.6212 1.99098H3.21643C2.90982 1.99098 2.62893 2.11857 2.37375 2.37375C2.11857 2.62893 1.99098 2.90982 1.99098 3.21643V29.1564L5.2761 25.8828Z'
                    fill='#18985A'
                  />
                </svg>
              </li>
              <li className='text-center'>
                <p style={Text}>Chat with us</p>
                <p style={Text2}>( Mon-Fri 9:00 AM to 6:00 PM)</p>
              </li>
            </ul>
          </div>
        </div>
      </>
    )
  }

  const TitleText2 = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }

  const Textstyle2 = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const Textstyle = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '44px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '70px'
  }

  const slugText = {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const AccordingBodyList = styled.ul`
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `

  const RenderQuestionUI = () => {
    const CurrentSlugName = FAQ_Options?.find(option => option.slug === slug)

    return CurrentSlugName ? (
      <div>
        <ul className='space-y-4'>
          {CurrentSlugName?.questions?.map((question, index) =>
            question?.render ? (
              <li>
                <CustomAccordion key={index} title={question?.title}>
                  <AccordingBodyList>{question?.render()}</AccordingBodyList>
                </CustomAccordion>
              </li>
            ) : (
              <li>
                <CustomAccordion key={index} title={question?.title}>
                  <AccordingBodyList>
                    <p>{question?.answer}</p>
                  </AccordingBodyList>
                </CustomAccordion>
              </li>
            )
          )}
        </ul>
      </div>
    ) : (
      <p>No data found</p>
    )
  }

  return (
    <>
      <AuthNavbar />
      <div className='w-full pt-[80px] lg:pt-[120px] mt-[37px] h-full lg:grid place-items-center pb-[80px]'>
        <div className='space-y-[14px]'>
          <h1 style={Textstyle}>Payment Related Queries</h1>
          <ul className='flex space-x-2 items-center justify-center'>
            <li>
              <p
                onClick={() => router.back()}
                style={slugText}
                className='text-[#000] hover:opacity-75 duration-200 cursor-pointer'
              >
                All Topics
              </p>
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M13.5004 12.0004L8.90039 7.40039L9.40039 6.90039L14.5004 12.0004L9.40039 17.1004L8.90039 16.6004L13.5004 12.0004Z'
                  fill='#5F6368'
                />
              </svg>
            </li>
            <li>
              <p style={slugText} className='text-[#9E9E9E]'>
                {CurrentSlugName?.title || ''}
              </p>
            </li>
          </ul>
        </div>

        <div className='mt-11 lg:w-full w-[90%] grid place-items-center '>
          <div className='w-full lg:w-[964px]'>{RenderQuestionUI()}</div>
        </div>
        <div className='mt-16'>
          <div className='space-y-2'>
            <h1 style={TitleText2}>Still have questions?</h1>
            <p style={Textstyle2}>
              Can’t find the answer you’re looking for? Please chat to our
              friendly team
            </p>
          </div>

          <div className='mt-16'>
            <PersonalSection />
          </div>
        </div>
      </div>

      <div className='pt-[10px] border-t-[1px] border-t-[#E1E1E1] '>
        <GlobalFooter />
      </div>
    </>
  )
}

export default index
