import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import Pagination from '../../../../../components/common/Features/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFriends } from '../../../../../store/matrimoney-services/slices/UserSentRequestPagination'
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import ProfileSkeletonLoader from '../../../../../components/common/animation/GridSkeleton'
import Link from 'next/link'
import Avatar from 'react-avatar'
import ShortlistUser from '../../../../_components/common/Buttons/ShortlistUser'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import GridLikeButton from '../../../../_components/common/Buttons/LikeSections/GridLikeButton'
import MatchScoreModal from '../../../../_components/Model/Models/MatchScoreModal'

function GridList() {

    const profileStyles = useMemo(() => ({
        ProfileName: { color: "#000", fontFamily: "Poppins", fontWeight: "600", lineHeight: "normal" },
        ListText: { color: "#000", fontFamily: "Poppins", fontWeight: "400", lineHeight: "24px" },
        Text4: { color: "#000", fontFamily: "Poppins", fontWeight: "400", lineHeight: "12px" },
        ProfileCard: { borderRadius: "10px", background: "#FFF", boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)" },
        ImageNotFoundText: {
            color: "#B3CBF1",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal"
        }
    }), []);

    const dispatch = useDispatch();

    const { userData,
        totalPages,
        status } = useSelector((state) => state.getsentrequestdata)


    const [currentPage, setCurrentPage] = useState(1);

    const Pages = {
        currentPage: currentPage,
    }

    useEffect(() => {
        dispatch(fetchFriends("Gridview", Pages))
    }, [currentPage, setCurrentPage])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <>
            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                <div className=' w-[90%] xl:w-full space-x-[10px] relative 2xl:left-0 xl:left-[10px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div className=''></div>
                    {
                        status === "loading" ? <ProfileSkeletonLoader /> :
                            <>
                                {
                                    userData?.map((res, index) => {
                                        return (

                                            // <div key={index} style={profileStyles?.ProfileCard} className='inline-block lg:flex flex-col space-y-[15px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                            //     <div className='mt-2 flex justify-between pt-[10px]'>
                                            //         <ul className='pl-[10px] flex space-x-[10px]'>
                                            //             <li>
                                            //                 <Image alt='icon-1' width={17} height={14} src='/assests/Black/Couple2.svg' />
                                            //             </li>
                                            //             <li className='text-[10px]' style={profileStyles?.Text4}>You & Her </li>
                                            //         </ul>
                                            //         <ul className='pr-[10px] flex space-x-[30px]'>
                                            //             <li>
                                            //                 <ShortlistUser UserId={res?.friend?.id || res?.friend?._id} />
                                            //             </li>
                                            //             <li>
                                            //                 <ProfileMenu res={res?.friend} Section={"sent"} />
                                            //             </li>
                                            //         </ul>
                                            //     </div>
                                            //     <div className='flex justify-center'>
                                            //         <Link className='w-[100px] h-[100px] rounded-[50%]' href={`/longterm/dashboard/${res?.friend?._id}`} >

                                            //             <div className='w-[100px] h-[100px] rounded-[50%] flex justify-center hover:opacity-80'>
                                            //                 {res?.friend?.profilePic ? <>
                                            //                     <Image quality={45} loading='lazy' alt='profile-pic' width={100} height={100} style={{ objectFit: "cover" }} className='w-[100px] h-[100px] rounded-[50%]' src={res?.friend?.profilePic} />
                                            //                 </>
                                            //                     :
                                            //                     <><Avatar name={res?.friend?.name} round size='100' /></>
                                            //                 }
                                            //             </div>
                                            //         </Link>
                                            //     </div>
                                            //     <div className='text-center'>
                                            //         <Link href={`/longterm/dashboard/${res?.friend?._id}`} >
                                            //             <h1 style={profileStyles?.ProfileName} className='text-[18px]'>{res?.friend?.name}</h1>
                                            //         </Link>
                                            //         <p style={profileStyles?.ListText} className='text-[14px]'>{`32, ${res?.friend?.height || "NA"}`}</p>
                                            //         <p style={profileStyles?.ListText} className='text-[14px]'>
                                            //             {`${capitalizeFirstLetter(res?.friend?.religion) || "NA"} , ${capitalizeFirstLetter(res?.friend?.cast) || "NA"}`}
                                            //         </p>
                                            //         <p style={profileStyles?.ListText} className='text-[14px]'>{res?.friend?.maritalStatus || "NA"}</p>
                                            //     </div>

                                            //     <GridLikeButton userId={res?.friend?.id || res?.friend?._id}
                                            //         TheUsername={res?.friend?.name}
                                            //         userdata={res?.friend} />
                                            // </div>

                                            <div key={index} style={profileStyles?.ProfileCard} className='inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                                <div className='mt-2 flex justify-between pt-[10px]'>
                                                    <ul className='pl-[10px] flex space-x-[10px]'>
                                                        <li className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`}>

                                                            <MatchScoreModal user={res?.friend} />

                                                        </li>
                                                    </ul>
                                                    <ul className='pr-[10px] flex space-x-[30px]'>
                                                        <li>
                                                            <ShortlistUser UserId={res?.friend?.id || res?.friend?._id} />
                                                        </li>
                                                        <li>
                                                            <ProfileMenu res={res?.friend} Section={"sent"} />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <Link className='w-[100px] h-[100px] rounded-[50%]' href={`/longterm/dashboard/${res?.friend?._id}`} >

                                                        <div className='w-[100px] h-[100px] rounded-[50%] flex justify-center hover:opacity-80'>
                                                            {res?.friend?.profilePic ? <>
                                                                <Image quality={45} loading='lazy' alt='profile-pic' width={100} height={100} style={{ objectFit: "cover" }} className='w-[100px] h-[100px] rounded-[50%]' src={res?.friend?.profilePic} />
                                                            </>
                                                                :
                                                                <><Avatar name={res?.friend?.name} round size='100' /></>
                                                            }
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className='text-center'>
                                                    <h1 style={profileStyles?.ProfileName} className='text-[18px]'>{res?.friend?.name}</h1>
                                                    <p style={profileStyles?.ListText} className='text-[14px]'>32, 5’3”</p>
                                                    <p style={profileStyles?.ListText} className='text-[14px]'> {res?.friend?.religion || 'NA'}, {res?.friend?.cast || 'NA'}</p>
                                                    <p style={profileStyles?.ListText} className='text-[14px]'>{res?.friend?.maritalStatus || "NA"}</p>
                                                </div>

                                                <GridLikeButton userId={res?.friend?._id || res?.friend?.id}
                                                    TheUsername={res?.friend?.name}
                                                    userdata={res?.friend} />
                                            </div>

                                        )

                                    })

                                } </>}
                </div>
                {userData.length > 0 ? <>  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} darkMode={false} /> </> : ""}
            </div>

            {
                userData.length === 0 && (
                    <div className='h-[500px] grid place-items-center'>
                        <div className='grid place-items-center space-y-[5px]'>
                            <Image loading='lazy' alt='not-found' width={34} height={34} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                            <h1 className='inline' style={profileStyles?.ImageNotFoundText}>No Profiles Found</h1>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default GridList