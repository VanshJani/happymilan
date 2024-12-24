'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useDarkMode } from '../../../ContextProvider/DarkModeContext';
import UserProfile from '../../_components/Container/UserProfile'
import Layout from '../Layout';
const UserGridProfile = dynamic(() => import('../../_components/Container/UserGridProfile'));
const RecentlyView = dynamic(() => import('../../_components/Container/RecentlyView'));
const StoryView = dynamic(() => import('../../_components/Container/StoryView'));
const CelebratingModal = dynamic(() => import('../../_components/Model/Models/CelebratingModal'));


function index() {


  const { darkMode, toggleDarkMode } = useDarkMode();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listType, setListType] = useState(false);


  const { data, status } = useSelector((state) => state.myprofile);


  useEffect(() => {

    if (status === "idle" && data?.userProfileCompleted === false) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [status, data]);

  const router = useRouter();

  const closeModal = () => {
    setIsModalOpen(false);
    router.push("/longterm/register/profileselect")

  };

  const Text6 = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
  };


  const { users, loading, error } = useSelector((state) => state.alluser);


  return (
    <>

      <Layout Show={true}>
        <div id='centerlized-content' className=' ml-[-5px] 2xl:mt-0 xl:mt-0 lg:mt-0 mt-[80px]'>
          <div className='xl:left-0 lg:left-[10px] relative  m-[10px] flex justify-between'>

            <h1 className='text-[#000] dark:text-[#FFF] p-[5px] relative lg:left-[15px] 2xl:left-[40px] xl:left-[55px]'><span style={Text6} >{"New Matches"} </span></h1>
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
          {!listType ? <UserProfile users={users?.users} /> : <UserGridProfile />}
        </div>

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
      </Layout >

      <CelebratingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default index;
