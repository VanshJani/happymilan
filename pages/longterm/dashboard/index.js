'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import Image from 'next/image';
import { useDarkMode } from '../../../ContextProvider/DarkModeContext';
import UserProfile from '../../_components/Container/UserProfile'
import useUserActivity from '../../../utils/hooks/UserActivity';
import ProfileNotFound from '../../../components/common/Error/ProfileNotFound';
import Layout from '../Layout';
// Lazy load your components;
const UserGridProfile = dynamic(() => import('../../_components/Container/UserGridProfile'));
const ProfileComplete = dynamic(() => import('../../_components/Container/ProfileComplete'));
const MoreSuggestion = dynamic(() => import('../../_components/Container/MoreSuggestion'));
const UserStory = dynamic(() => import('../../_components/Container/UserStory'));
const RecentlyView = dynamic(() => import('../../_components/Container/RecentlyView'));
const StoryView = dynamic(() => import('../../_components/Container/StoryView'));
const CelebratingModal = dynamic(() => import('../../_components/Model/Models/CelebratingModal'));
const SearchUsers = dynamic(() => import('./commonCompo/SearchParams/SearcheUsers'));
const Footer = dynamic(() => import('../../_components/layout/Footer'));


function index() {


  const { darkMode, toggleDarkMode } = useDarkMode();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listType, setListType] = useState(false);

  useUserActivity();

  const { data, status } = useSelector((state) => state.myprofile);

  useEffect(() => {

    if (status === "idle" && data?.userProfileCompleted === false) {
      // Open the modal if profile is not completed
      setIsModalOpen(true);
    } else {
      // Close the modal if profile is completed
      setIsModalOpen(false);
    }
  }, [status, data]);

  const router = useRouter();

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/register")

  };

  const Text6 = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
  };


  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {

    setSearchTerm(searchTerm);
    const axios = require("axios")
    const token = getCookie("authtoken")

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/userUniqueId/${searchTerm?.toLowerCase()}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => {

        // Update search results based on API response

        setSearchResults(response.data.data);

      })
      .catch((error) => {
        console.log(error);

      });

  };

  const { users, loading, error } = useSelector((state) => state.alluser);


  return (
    <>
     
      <Layout handleSearch={handleSearch}>

        <div id='main-centerlized-content' className='flex justify-center flex-col'>
          <div id='first-child' className='pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'>

            <div className='h-full'>
              {/* Side Section 1 */}

              <div id='story-centerlized-content' className='pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>
                <UserStory />
              </div>
              {
                error != null ?

                  <div id='centerlized-content' className='ml-[-5px] 2xl:mt-0 xl:mt-0 lg:mt-0 mt-[80px]'>
                    <ProfileNotFound />
                  </div>
                  :

                  <div id='centerlized-content' className=' ml-[-5px] 2xl:mt-0 xl:mt-0 lg:mt-0 mt-[80px]'>
                    <div className='xl:left-0 lg:left-[10px] relative 2xl:w-[720px] xl:w-[645px] lg:w-[600px] m-[10px] flex justify-between'>

                      <h1 className='text-[#000] dark:text-[#FFF] p-[5px] relative lg:left-[15px] 2xl:left-[40px] xl:left-[55px]'><span style={Text6} >{searchTerm === '' ? "New Requests" : "Search Result"} </span></h1>
                      <div className={`justify-center  w-[62px] h-[30px] rounded-[17.5px] border-[1px] ${darkMode ? "border-[#73757b]" : "border-[#F3F3F3]"} flex  relative right-[50px]`}>

                        <div onClick={() => setListType(true)} style={{ cursor: "pointer", borderRadius: "17.5px 0PX 0px 17.5px" }} className={`w-[45px] ${darkMode ? "bg-[#141516] border-r-[#73757b]" : listType ? "border-r-[#F3F3F3] bg-[#F3F8FF]" : " hover:bg-[#F3F8FF] border-r-[#F3F3F3]"} grid place-items-center h-[28px] border-r-[1px] `}>
                          <Image width={13} height={13} alt='listview' src={listType ? "/assests/dashboard/menus/after-grid.svg" : "/assests/dashboard/menus/before-grid.svg"} />

                        </div>



                        {/* Grid View Mode  */}

                        <div onClick={() => setListType(false)} style={{ cursor: "pointer", borderRadius: "0px 17.5px 17.5px 0px" }} className={`w-[45px] ${darkMode ? "bg-[#141516] border-l-[#73757b]" : listType ? "border-l-[#F3F3F3]  " : " bg-[#F3F8FF] hover:bg-[#F3F8FF] border-l-[#F3F3F3]"}   grid place-items-center h-[28px] border-l-[1px]`}>
                          <Image width={13} height={13} alt='listview' src={listType ? "/assests/dashboard/menus/before-list.svg" : "/assests/dashboard/menus/after-list.svg"} />

                        </div>

                      </div>
                    </div>


                    {searchTerm === '' ? (
                      <>
                        {!listType ? <UserProfile users={users} /> : <UserGridProfile />}
                      </>
                    ) : (
                      <div>

                        {searchResults.length === 0 ? (
                          <div className='relative left-[55px]'>No search results</div>
                        ) : (
                          <div>
                            <SearchUsers searchResults={searchResults} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
              }
              <div className="block md:hidden relative top-[60px] pl-[15px]">
                <h1 className="p-[5px] relative 2xl:left-[40px] xl:left-[55px]">
                  <span className='text-[#000] dark:text-[#FFF]' style={Text6}>New Matches</span>

                </h1>
              </div>

              <div className="block md:hidden">
                <UserGridProfile />
              </div>

              <div id="centerlized-content" className=" hidden lg:block mt-[50px] ">
                <RecentlyView />
              </div>

              <div id="centerlized-content" className=" mt-[50px] 2xl:block xl:block hidden ">
                <StoryView />
              </div>

            </div>
            <div className=" hidden  absolute 2xl:top-[250px] xl:top-[245px] right-10 xl:flex flex-col space-y-[30px]">

              <ProfileComplete />

              <MoreSuggestion />
            </div>
          </div>
          <div className="pt-[100px]">
            <Footer />
          </div>
        </div >
      </Layout>
      <CelebratingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default index;
