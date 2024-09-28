'use client';

import React from 'react'
import dynamic from 'next/dynamic';
import Layout from '../../Layout';
const Profile = dynamic(() => import('./comp/Profile'));
const UploadSection = dynamic(() => import('./comp/UploadSection'));
const MoreSuggestion = dynamic(() => import('../../../_components/Container/MoreSuggestion'));
const UserStory = dynamic(() => import('../../../_components/Container/UserStory'))

function index() {

  const handleSearch = (searchTerm) => { }


  return (
    <>


      <Layout Section="profile" Show={false} handleSearch={handleSearch}>

        {/* Main Section Start */}


        <div id='main-centerlized-content' className='flex justify-center flex-col'>
          <div id='first-child' className='pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>

            <div className='h-full'>
              {/* Side Section 1 */}

              <div id='story-centerlized-content' className='pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>
                <UserStory />
              </div>

              <div id='centerlized-content' className='2xl:block xl:block lg:block '>
                <div className='relative 2xl:w-[715px] xl:w-[635px] m-[10px] flex justify-between'>

                  <Profile />

                </div>
              </div>

              {/* User Card  */}

            </div>

            <div className='hidden  absolute 2xl:top-[175px] xl:top-[175px] right-10  xl:flex 2xl:flex flex-col space-y-[50px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>
              {/* Side Section 2 */}
              <UploadSection />

              <MoreSuggestion />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default index