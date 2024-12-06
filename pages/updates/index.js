import React from 'react'
import AuthNavbar from '../_components/layout/AuthNavbar'
import GlobalFooter from '../_components/layout/GlobalFooter'

function index () {
  const DetailsText = {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const TitleText = {
    color: '#000',
    // textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '34px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal' /* 159.091% */
  }

  const ContentText = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  return (
    <>
      <AuthNavbar />
      <div className='w-full pt-[80px] lg:pt-[120px] mt-[37px] h-full lg:grid place-items-center pb-[80px]'>
        <div className='grid place-items-center space-y-4'>
          <h1 style={TitleText} className='text-center'>
            What’s new with Proffers
          </h1>
          <p style={DetailsText} className='w-[68%]'>
            Stay updated with the latest from Proffers! Find all the information
            in one convenient place. Check back regularly for new updates,
            announcements, resources, events, learning opportunities, and more.
          </p>
        </div>

        <div className='mt-[44px] grid place-items-center w-full'>
          <div className='w-[80%] h-[1px] bg-[#DEDEDE]'></div>
          <div className='space-y-9 w-[80%] pt-10 pb-10'>
            <h1 style={TitleText}>June 24-28</h1>
            <p style={ContentText}>
              The Proffers diligently work to enhance the security of platforms,
              continuously addressing the latest threats in collaboration with
              our in-house security team. If you believe you’ve found a security
              issue or vulnerability, please let us know immediately.
            </p>
          </div>

          <div className='w-[80%] h-[1px] bg-[#DEDEDE]'></div>
          <div className='space-y-9 w-[80%] pt-10 pb-10'>
            <h1 style={TitleText}>June 17-21</h1>
            <p style={ContentText}>
              The Proffers diligently work to enhance the security of platforms,
              continuously addressing the latest threats in collaboration with
              our in-house security team. If you believe you’ve found a security
              issue or vulnerability, please let us know immediately.
            </p>
          </div>

          <div className='w-[80%] h-[1px] bg-[#DEDEDE]'></div>
          <div className='space-y-9 w-[80%] pt-10 pb-10'>
            <h1 style={TitleText}>June 10-14</h1>
            <p style={ContentText}>
              The Proffers diligently work to enhance the security of platforms,
              continuously addressing the latest threats in collaboration with
              our in-house security team. If you believe you’ve found a security
              issue or vulnerability, please let us know immediately.
            </p>
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
