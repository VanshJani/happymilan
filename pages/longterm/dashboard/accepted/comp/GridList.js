import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAcceptedRequestData } from '../../../../../store/actions/UsersAction'
import Pagination from '../../../../../components/common/Features/Pagination'
import GridLikeUser from '../../../../_components/common/Buttons/GridLikeUser'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import ShortlistUser from '../../../../_components/common/Buttons/ShortlistUser'
import GridLikeButton from '../../../../_components/common/Buttons/LikeSections/GridLikeButton'

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

    const Text4 = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "12px"
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

                                <div key={index} style={ProfileCard} className='inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                    <div className='flex justify-between pt-[10px]'>
                                        <ul className='pl-[10px] flex space-x-[10px]'>
                                            <li>
                                                <Image loading='lazy' alt="couple" width={17} height={14} src='/assests/Black/Couple2.svg' />
                                            </li>
                                            <li className='text-[10px]' style={Text4}>You & Her </li>
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
                                        <Image loading='lazy' alt="profile" width={102} height={102} className='w-[102px] h-[102px] rounded-[50%]' src={res?.friendList?.profilePic} />
                                    </div>
                                    <div className='text-center'>
                                        <h1 style={ProfileName} className='text-[18px]'>{res?.friendList?.name}</h1>
                                        <p style={ListText} className='text-[14px]'>32, 5’3”</p>
                                        <p style={ListText} className='text-[14px]'> {res?.friendList?.religion || 'NA'}, {res?.friendList?.cast || 'NA'}</p>
                                        <p style={ListText} className='text-[14px]'>{res?.friendList?.maritalStatus || "NA"}</p>
                                    </div>

                                    {/* <GridLikeUser
                                        userLikeDetails={res?.friendList?.userLikeDetails}
                                        RequestedStatus={res?.friendList?.friendsDetails}
                                        // RequestId={sentrequest[res?.friendList?.id ? res?.friendList?.id : res?.friendList?._id]}
                                        // HandleRequestModal={() => HandleRequestModal(res?.friendList)} 
                                        from={"GridProfile"} currentPage={page} user={res?.friendList} key={index}
                                    /> */}

                                    <GridLikeButton userId={res?.friendList?._id || res?.friendList?.id}
                                        TheUsername={res?.friendList?.name}
                                        userdata={res?.friendList} />
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