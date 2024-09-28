
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getcancelrequestdata } from '../../../../store/actions/UsersAction'
import Image from 'next/image'
import { getCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Layout from '../../Layout'

const UserStory = dynamic(() => import('../../../_components/Container/UserStory'));
const CanceledProfile = dynamic(() => import('./comp/CanceledProfile'));
const GridUserCancel = dynamic(() => import('./comp/GridUserCancel'));
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
  const [isauthuserID, setauthuserID] = useState("")

  const { loading, data } = useSelector((state) => state.usersact.cancelusersdata)

  useEffect(() => {
    dispatch(Getcancelrequestdata())
    setauthuserID(getCookie("userid"))

  }, [setListtype, Listtype])

  
  const handleSearch = (searchTerm) => { }


  return (
    <>

      <Layout Show={true} handleSearch={handleSearch}>


        {/* Main Section Start */}
        <div className='h-full pb-[150px]'>
          {/* Side Section 1 */}

          <div id='story-centerlized-content' className='pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'>
            <UserStory />
          </div>

          <div id='centerlized-content' className='ml-[-5px] 2xl:mt-0 xl:mt-0 lg:mt-0 mt-[80px]'>

            <div className='relative 2xl:w-[715px] xl:w-[635px] lg:w-[650px] m-[10px] flex justify-between'>

              <h1 className='p-[5px] relative 2xl:left-[40px] lg:left-[10px] xl:left-[55px]'><span style={Text6}>Cancelled</span></h1>
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
              <CanceledProfile thedata={data} isauthuserID={isauthuserID} /> : <GridUserCancel />}
          </div>


          <div className='block lg:block 2xl:hidden xl:hidden relative top-[60px] pl-[15px]'>
            <h1 className='p-[5px] relative 2xl:left-[40px] lg:left-[10px] xl:left-[55px]'><span style={Text6}>Cancelled</span></h1>
          </div>
          <div className='block lg:hidden 2xl:hidden xl:hidden'>

            <GridUserCancel />

          </div>
        </div>
      </Layout>
    </>
  )
}

export default index