
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetrecentuserprofileData } from '../../../../store/actions/UsersAction'
import UserprofileSkeleton from '../../../../components/common/shader/UserprofileSkeleton'
import dynamic from 'next/dynamic';
import Image from 'next/image'
import { useDarkMode } from '../../../../ContextProvider/DarkModeContext'
import Layout from '../../Layout'

const RecentViewUser = dynamic(() => import('./comp/RecentViewUser'));
const GridUser = dynamic(() => import('./comp/GridUser'));

function index() {

  const Text6 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px"
  }

  const [listType, setListType] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetrecentuserprofileData())
  }, [])

  const { loading } = useSelector((state) => state.usersact.recentusersdata)

  const { darkMode } = useDarkMode();


  return (
    <>
      <Layout Show={true}>
        <div id='centerlized-content' className='2xl:block xl:block lg:block hidden'>

          <div className=' relative 2xl:w-[715px] xl:w-[635px] lg:w-[650px] m-[10px] flex justify-between'>

            <h1 className='text-[#000] dark:text-[#FFF] p-[5px] relative lg:left-[15px] 2xl:left-[40px] xl:left-[55px]'><span style={Text6} >Recenlty View</span></h1>
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

          {/* User Card  */}
          {
            loading ?
              <>
                <UserprofileSkeleton />
              </> :
              <>
                {!listType ?

                  <RecentViewUser /> : <GridUser />}
              </>
          }



        </div>
        <div className='block lg:block 2xl:hidden xl:hidden relative top-[60px] pl-[15px]'>
          <h1 className='p-[5px] relative lg:left-[15px] 2xl:left-[40px] xl:left-[55px]'><span style={Text6}>Recently Reviewed</span></h1>
        </div>
        <div className='block lg:hidden 2xl:hidden xl:hidden'>
          <GridUser />
        </div>
      </Layout >
    </>
  )
}

export default index