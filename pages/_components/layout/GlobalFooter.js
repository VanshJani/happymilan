import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function GlobalFooter () {
  const footerlinks = {
    cursor: 'pointer',
    fontFamily: 'Poppins',

    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '14px' /* 87.5% */
  }
  const copyright = {
    color: '#959595',
    fontFamily: 'Poppins',

    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal' /* 87.5% */
  }

  const router = useRouter()
  return (
    <footer className='pt-[40px] '>
      <div className='flex justify-between md:pl-[100px] md:pr-[100px] px-[20px] md:px-[0px]'>
        <ul className='space-y-[15px]'>
          <li
            style={footerlinks}
            className={`${
              router.pathname == '/aboutus'
                ? 'text-[#0F52BA]'
                : 'text-[#000] hover:text-[#0F52BA]'
            }`}
          >
            <Link className='text-[12px] md:text-[14px]' href='/aboutus'>
              About
            </Link>
          </li>
          <li
            style={footerlinks}
            className={`${
              router.pathname.startsWith('/successstories')
                ? 'text-[#0F52BA]'
                : 'text-[#000] hover:text-[#0F52BA]'
            }`}
          >
            <Link className='text-[12px] md:text-[14px]' href='/successstories'>
              Success Stories
            </Link>
          </li>
          <li
            style={footerlinks}
            className={`${
              router.pathname == '/faq'
                ? 'text-[#0F52BA]'
                : 'text-[#000] hover:text-[#0F52BA]'
            }`}
          >
            <Link className='text-[12px] md:text-[14px]' href='/faq'>
              FAQs
            </Link>
          </li>
        </ul>
        <ul className='space-y-[15px]'>
          <li
            style={footerlinks}
            className={`${
              router.pathname == '/career'
                ? 'text-[#0F52BA]'
                : 'text-[#000] hover:text-[#0F52BA]'
            }`}
          >
            <Link className='text-[12px] md:text-[14px]' href='/career'>
              Hiring
            </Link>
          </li>
          <li
            style={footerlinks}
            className='hover:text-[#0F52BA] text-[#000] text-[12px] md:text-[14px]'
          >
            Contact us
          </li>
          <li
            style={footerlinks}
            className={`${
              router.pathname == '/updates'
                ? 'text-[#0F52BA]'
                : 'text-[#000] hover:text-[#0F52BA]'
            }`}
          >
            <Link className='text-[12px] md:text-[14px]' href='/updates'>
              What's new
            </Link>
          </li>
        </ul>
        <ul className='space-y-[15px]'>
          <li
            style={footerlinks}
            className={`${
              router.pathname == '/termsofuse'
                ? 'text-[#0F52BA]'
                : 'text-[#000] hover:text-[#0F52BA]'
            }`}
          >
            <Link className='text-[12px] md:text-[14px]' href='/termsofuse'>
              Term of Use
            </Link>
          </li>
          <li
            style={footerlinks}
            className={`${
              router.pathname == '/privacypolicy'
                ? 'text-[#0F52BA]'
                : 'text-[#000] hover:text-[#0F52BA]'
            }`}
          >
            <Link className='text-[12px] md:text-[14px]' href='/privacypolicy'>
              Privacy Policy
            </Link>
          </li>
          <li
            style={footerlinks}
            className={`${
              router.pathname.startsWith('/blog')
                ? 'text-[#0F52BA]'
                : 'text-[#000] hover:text-[#0F52BA]'
            }`}
          >
            <Link className='text-[12px] md:text-[14px]' href='/blog'>
              <h1 className='text-[12px] md:text-[14px]'>Blogs</h1>
            </Link>
          </li>
        </ul>
        <ul className='hidden  md:flex  justify-between w-[131.551px]'>
          <li>
            <Image
              width={16}
              height={16}
              alt='instgarm'
              loading='lazy'
              src={'/heroSec/icon/instagram-icon.svg'}
            />
          </li>
          <li>
            <Image
              width={8.31}
              height={16}
              alt='facebook'
              loading='lazy'
              src={'/heroSec/icon/facebook-icon.svg'}
            />
          </li>
          <li>
            <Image
              width={16}
              height={16}
              alt='yotube'
              loading='lazy'
              src={'/heroSec/icon/youtube-icon.svg'}
            />
          </li>
        </ul>
      </div>
      <div className='pt-[40px] pb-[40px]'>
        <div className=''>
          <div className='md:flex justify-between md:pl-[100px] md:pr-[100px] px-[20px] md:px-[0px]'>
            <div className='flex justify-between'>
              <div className=''>
                <h1 className='text-[12px] md:text-[14px]' style={copyright}>
                  ©2023 -2024 HappyMilan.com
                </h1>
              </div>
              <ul className=' md:hidden flex justify-between w-[131.551px]'>
                <li>
                  <Image
                    width={16}
                    height={16}
                    alt='instgarm'
                    loading='lazy'
                    src={'/heroSec/icon/instagram-icon.svg'}
                  />
                </li>
                <li>
                  <Image
                    width={8.31}
                    height={16}
                    alt='facebook'
                    loading='lazy'
                    src={'/heroSec/icon/facebook-icon.svg'}
                  />
                </li>
                <li>
                  <Image
                    width={16}
                    height={16}
                    alt='yotube'
                    loading='lazy'
                    src={'/heroSec/icon/youtube-icon.svg'}
                  />
                </li>
              </ul>
            </div>
            <div className=''>
              <h1 className='text-[12px] md:text-[14px]' style={copyright}>
                A Product by MN Techgroup
              </h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default GlobalFooter
