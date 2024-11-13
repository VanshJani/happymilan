import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAcceptedRequestData } from '../../../../../store/actions/UsersAction'
import Pagination from '../../../../../components/common/Features/Pagination'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import ShortlistUser from '../../../../_components/common/Buttons/ShortlistUser'
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal'
import styles from '../../../../../styles/styles.module.css'
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import Link from 'next/link'
import Avatar from 'react-avatar'


function GridList() {
    const ProfileName = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal"
    }

    const ListText = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px" /* 171.429% */
    }


    const ProfileCard = {
        borderRadius: "10px",
        background: "#FFF",
        boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)"
    }


    // const { data, loading } = useSelector(state => state?.alluser?.Ifinit);


    const [page, setpage] = useState(1);

    const NextPage = (page) => {
        setpage(page)
    }

    // useEffect(() => {
    //     dispatch(userDatas({ page })); // Load the first page on mount
    // }, [page, dispatch]);

    const dispatch = useDispatch();

    const data = useSelector((state) => state.usersact?.acceptedrequestdata)

    useEffect(() => {
        dispatch(getAcceptedRequestData("grid", page));
    }, [page, dispatch])


    return (
        <>
            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div className=''></div>

                    {
                        data?.data?.results?.map((res, index) => {
                            return (

                                <div key={index} style={ProfileCard} className='inline-block lg:flex flex-col space-y-[8px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                    <div className='mt-2 flex justify-between pt-[10px]'>
                                        <ul className='pl-[10px] flex space-x-[10px]'>
                                            <li className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`}>

                                                <MatchScoreModal user={res?.friendList} />

                                            </li>
                                        </ul>
                                        <ul className='pr-[10px] flex space-x-[30px]'>
                                            <li>
                                                <ShortlistUser UserId={res?.friendList?.id || res?.friendList?._id} />
                                            </li>
                                            <li>
                                                <ProfileMenu accepteddata={res} res={res?.friendList} Section={'accepted'} />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='flex justify-center'>
                                        {/* <Image loading='lazy' alt="profile" style={{ objectFit: "cover" }} width={102} height={102} className='hover:opacity-70 duration-150 w-[102px] h-[102px] rounded-[50%]' src={res?.friendList?.profilePic} /> */}
                                        {res?.friendList?.profilePic ? <>
                                            <Link href={`/longterm/dashboard/${res?.friendList?.id || res?.friendList?._id}`}>
                                                <Image quality={45} loading='lazy' alt='profile-pic' width={100} height={100} style={{ objectFit: "cover" }} className='hover:opacity-70 duration-150 w-[100px] h-[100px] rounded-[50%]' src={res?.friendList?.profilePic} />
                                            </Link>
                                        </>
                                            :
                                            <>
                                                <Link href={`/longterm/dashboard/${res?.friendList?.id || res?.viewerId?._id}`}>
                                                    <Avatar name={res?.friendList?.name} round size='100' className='hover:opacity-70 duration-150' />
                                                </Link>
                                            </>
                                        }

                                    </div>
                                    <div className='text-center'>
                                        <h1 style={ProfileName} className='text-[18px]'>{capitalizeFirstLetter(res?.friendList?.name)}</h1>
                                        <p style={ListText} className='text-[14px]'>32, 5’3”</p>
                                        <p style={ListText} className='text-[14px]'> {capitalizeFirstLetter(res?.friendList?.religion) || 'NA'}, {capitalizeFirstLetter(res?.friendList?.caste) || 'NA'}</p>
                                        <p style={ListText} className='text-[14px]'>{capitalizeFirstLetter(res?.friendList?.maritalStatus) || "NA"}</p>
                                    </div>
                                    <div className='grid place-items-center space-y-[14px]'>
                                        <div>
                                            <div className='w-[148px] bg-[#EEEEEE] h-[1px]'></div>
                                        </div>

                                        <ul className='flex space-x-[10px]'>
                                            <li><h1 className={`${styles.BoldText} text-[#000] dark:text-[#FFF] text-[16px] 2xl:text-[16px] xl:text-[14px]`}>Accepted</h1></li>
                                            <li><Image loading='lazy' alt="accepted" width={23} height={23} src='/assests/dashboard/icon/accepted-right.svg' /></li>
                                        </ul>
                                    </div>
                                </div>

                            )

                        })
                    }

                    <Pagination currentPage={data?.data?.[0]?.currentPage} totalPages={data?.data?.[0]?.totalPages} onPageChange={NextPage} darkMode={false} URL={'/longterm/dashboard/'} />


                </div >
                <div className='flex pt-[50px] space-x-[40px] justify-center items-center w-auto 2xl:w-full xl:w-full'>
                    <div id='active-no' className=' cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>1</div>
                    <div id='pagination-count' className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>2</div>
                    <div id='pagination-count' className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>3</div>
                    <div id='pagination-count' className='duration-300 cursor-pointer w-[44px] h-[44px] border-[1px] border-[black] grid place-items-center rounded-full'>4</div>
                </div>
            </div>
        </>
    )
}

export default GridList