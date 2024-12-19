'use client';

import React from 'react'
import dynamic from 'next/dynamic';
import Layout from '../../Layout';
const Profile = dynamic(() => import('./comp/Profile'));

function index() {


  return (
    <>



      <Layout Section="profile" Show={false}>

        {/* Main Section Start */}


        <div id='centerlized-content' className='2xl:block xl:block lg:block '>
          <div className='relative 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>

            <Profile />

          </div>
        </div>

        {/* User Card  */}

      </Layout>
    </>
  )
}

export default index