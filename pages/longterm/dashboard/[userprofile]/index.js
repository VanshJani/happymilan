'use client';

import React from 'react'
import dynamic from 'next/dynamic';
import Layout from '../../Layout';
const UserStory = dynamic(() => import('../../../_components/Container/UserStory'));
const Profile = dynamic(() => import('./comp/Userprofile'));
const UploadSection = dynamic(() => import('./comp/UploadSection'));
const MoreSuggestion = dynamic(() => import('../../../_components/Container/MoreSuggestion'));

function index({ params }) {
  if (params) {
    console.log("🚀 ~ index ~ params:", params)
  }
  const handleSearch = (searchTerm) => { }

  return (
    <>


      <Layout Section={"profile"} Show={false} handleSearch={handleSearch}>

        {/* Main Section Start */}


        <div id='main-centerlized-content' className='flex justify-center flex-col'>
          <div id='first-child' className='pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>
         
            <div className='h-full'>
              {/* Side Section 1 */}

              <div id='story-centerlized-content' className='pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>
                <UserStory />
              </div>

              <div id='centerlized-content' className='ml-[-5px] 2xl:mt-0 xl:mt-0 lg:mt-0 mt-[80px]'>

                <div className='relative 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>

                  <Profile />

                </div>
              </div>

              {/* User Card  */}

            </div>
          </div>

          <div className='hidden  absolute 2xl:top-[175px] xl:top-[175px] right-10  xl:flex 2xl:flex flex-col space-y-[50px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>
            {/* Side Section 2 */}
            <UploadSection />

            <MoreSuggestion />
          </div>

        </div>
      </Layout>
    </>
  )
}

export default index