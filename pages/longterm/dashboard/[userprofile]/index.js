'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Layout from '../../Layout'
const Profile = dynamic(() => import('./comp/Userprofile'))

function index ({ params }) {
  return (
    <>
      <Layout Section={'userprofile'} Show={false}>
        <div
          id='centerlized-content'
          className='ml-[-5px] 2xl:mt-0 xl:mt-0 lg:mt-0 mt-[80px]'
        >
          <div className='relative 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>
            <Profile />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default index
