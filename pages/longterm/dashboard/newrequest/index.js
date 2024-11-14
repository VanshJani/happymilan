
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFriendsList } from '../../../../store/actions/UsersAction'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Layout from '../../Layout'
const Request = dynamic(() => import('./comp/Request'));
const GridList = dynamic(() => import('./comp/GridList'));

function index() {

  const Text6 = {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "22px"
  }

  const [Listtype, setListtype] = useState(false);

  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.usersact.requestdata)

  useEffect(() => {
    dispatch(getFriendsList())
  }, [])


  return (
    <>
      <Layout Show={true} >

        <div id='centerlized-content' className='2xl:block xl:block lg:block hidden'>

          <div className='relative 2xl:w-[715px] xl:w-[635px] lg:w-[650px] m-[10px] flex justify-between'>

            <h1 className='p-[5px] relative lg:left-[15px] 2xl:left-[40px] xl:left-[55px]'><span style={Text6}>New Requests ({data?.data?.results?.length})</span></h1>
            <div className='justify-center  w-[62px] h-[30px] rounded-[17.5px] border-[1px] border-[#F3F3F3] flex  relative right-[50px]'>

              <div onClick={() => setListtype(true)} style={{ cursor: "pointer", borderRadius: "17.5px 0PX 0px 17.5px" }} className={`w-[45px] ${Listtype ? "bg-[#F3F8FF]" : ""} hover:bg-[#F3F8FF] grid place-items-center h-[28px] border-r-[1px] border-r-[#F3F3F3]`}>
                <Image width={13} height={13} alt='listview' src={Listtype ? "/assests/dashboard/menus/after-grid.svg" : "/assests/dashboard/menus/before-grid.svg"} />
              </div>
              {/* Grid View Mode  */}

              <div onClick={() => setListtype(false)} style={{ cursor: "pointer", borderRadius: "0px 17.5px 17.5px 0px" }} className={`w-[45px] ${Listtype ? "" : " bg-[#F3F8FF]"}  hover:bg-[#F3F8FF] grid place-items-center h-[28px] border-l-[1px] border-l-[#F3F3F3]`}>
                <Image width={13} height={13} alt='listview' src={Listtype ? "/assests/dashboard/menus/before-list.svg" : "/assests/dashboard/menus/after-list.svg"} />

              </div>

            </div>
          </div>

          {/* User Card  */}

          {!Listtype ?
            <Request /> : <GridList />}


        </div>
        <div className='block lg:hidden 2xl:hidden xl:hidden relative top-[60px] pl-[15px]'>
          <h1 className='p-[5px] relative lg:left-[15px] 2xl:left-[40px] xl:left-[55px]'><span style={Text6}>New Requests ({ })</span></h1>
        </div>
        <div className='block lg:hidden 2xl:hidden xl:hidden'>
          <GridList />
        </div>
      </Layout>
    </>
  )
}

export default index