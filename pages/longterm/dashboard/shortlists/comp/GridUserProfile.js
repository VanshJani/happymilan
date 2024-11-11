import Image from 'next/image'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchshortlistUsers } from '../../../../../store/matrimoney-services/slices/getShortlistUsersSlice'
import Pagination from '../../../../../components/common/Features/Pagination'
import Avatar from 'react-avatar'
import Link from 'next/link'
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import ProfileSkeletonLoader from '../../../../../components/common/animation/GridSkeleton'
import ProfileMenu from '../../../../../components/long-term/common/Model/ProfileMenu'
import GridLikeUser from '../../../../_components/common/Buttons/GridLikeUser'
import { RemoveShortlist } from '../../../../../store/actions/GetingAlluser'
import { Dialog } from '@mui/material'
import GridLikeButton from '../../../../_components/common/Buttons/LikeSections/GridLikeButton'

function GridUserProfile() {
    const profileStyles = useMemo(() => ({
        ProfileName: { color: "#000", fontFamily: "Poppins", fontWeight: "600", lineHeight: "normal" },
        ListText: { color: "#000", fontFamily: "Poppins", fontWeight: "400", lineHeight: "24px" },
        Text4: { color: "#000", fontFamily: "Poppins", fontWeight: "400", lineHeight: "12px" },
        ProfileCard: { borderRadius: "10px", background: "#FFF", boxShadow: "0px 0px 14px 0px rgba(0, 0, 0, 0.07)" }
    }), []);



    const dispatch = useDispatch();

    const Urlmodaltext = {
        color: "#000",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal"
    }


    const { userData,
        totalPages,
        status } = useSelector((state) => state.shortlistusers)


    const [currentPage, setCurrentPage] = useState(1);


    const [openShortlistModal, setopenShortlistModal] = React.useState(false)

    const [shortlistText, setshortlistText] = useState();


    const Pages = {
        currentPage: currentPage,
        viewType: "Gridview"
    }

    useEffect(() => {
        dispatch(fetchshortlistUsers(Pages))
    }, [currentPage, dispatch])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const HandleRemoveShortlist = (res) => {

        const shortlistdata = userData.results.find(data => data?.id === res?.id)

        dispatch(RemoveShortlist(res?.id))
        setshortlistText("Shortlisted has been removed")
        setopenShortlistModal(true)
        setTimeout(() => {
            setopenShortlistModal(false);
            dispatch(fetchshortlistUsers(Pages))
        }, 800);
        console.log(shortlistdata?.id)

    }


    return (
        <>
            <div className='mt-[50px] lg:mt-0 h-full w-full 2xl:w-[730px] xl:w-[634px] '>
                <div className=' w-full space-x-[10px] inline-block  relative 2xl:left-0 xl:left-[20px] 2xl:pl-[25px] xl:pl-[30px] 2xl:mt-[-15px] xl:mt-[-16px] flex flex-wrap  2xl:space-x-[27px] xl:space-x-[15px] space-y-[25px]'>
                    <div className=''></div>

                    {
                        status === "loading" ? <ProfileSkeletonLoader ViewType={6} /> :
                            <>
                                {
                                    userData?.results?.map((res, index) => {
                                        return (

                                            <div key={index} style={profileStyles?.ProfileCard} className='inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[10px]'>
                                                <div className='flex justify-between pt-[10px]'>
                                                    <ul className='pl-[10px] flex space-x-[10px]'>
                                                        <li>
                                                            <Image alt='icon-1' width={17} height={14} src='/assests/Black/Couple2.svg' />
                                                        </li>
                                                        <li className='text-[10px]' style={profileStyles?.Text4}>You & Her </li>
                                                    </ul>
                                                    <ul className='pr-[10px] flex space-x-[30px]'>
                                                        <li
                                                            className="cursor-pointer"
                                                            onClick={() => HandleRemoveShortlist(res)}
                                                        >
                                                            <div className="cursor-pointer hover:bg-[#F2F7FF] p-[5px] rounded-[50%] relative top-[-5px]">
                                                                <Image loading="lazy"
                                                                    width={15}
                                                                    height={14}
                                                                    alt="star"
                                                                    src={"/assests/Black/filled-star.svg"}
                                                                />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <ProfileMenu res={res?.shortlistId} Section={"Shortlist"} />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <Link className='w-[100px] h-[100px] rounded-[50%]' href={`/longterm/dashboard/${res?.shortlistId?._id}`} >

                                                        <div className='w-[100px] h-[100px] rounded-[50%] flex justify-center hover:opacity-80'>
                                                            {res?.shortlistId?.profilePic ? <>
                                                                <Image quality={45} loading='lazy' alt='profile-pic' width={100} height={100} style={{ objectFit: "cover" }} className='w-[100px] h-[100px] rounded-[50%]' src={res?.shortlistId?.profilePic} />
                                                            </>
                                                                :
                                                                <><Avatar name={res?.shortlistId?.name} round size='100' /></>
                                                            }
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className='text-center'>
                                                    <Link href={`/longterm/dashboard/${res?.shortlistId?._id}`} >
                                                        <h1 style={profileStyles?.ProfileName} className='text-[18px]'>{res?.shortlistId?.name}</h1>
                                                    </Link>
                                                    <p style={profileStyles?.ListText} className='text-[14px]'>{`32, ${res?.shortlistId?.height ? res?.shortlistId?.height : "NA"}`}</p>
                                                    <p style={profileStyles?.ListText} className='text-[14px]'>
                                                        {`${res?.shortlistId?.religion ? capitalizeFirstLetter(res?.shortlistId?.religion) : "NA"} , ${res?.shortlistId?.caste ? capitalizeFirstLetter(res?.shortlistId?.caste) : "NA"}`}
                                                    </p>
                                                    <p style={profileStyles?.ListText} className='text-[14px]'>{res?.shortlistId?.maritalStatus ? res?.shortlistId?.maritalStatus : "NA"}</p>
                                                </div>

                                                <GridLikeButton userId={res?.shortlistId?.id || res?.shortlistId?._id} TheUsername={res?.shortlistId?.name} userdata={res?.shortlistId} />
                                            </div>

                                        )

                                    })

                                } </>}



                </div >
                {userData.length > 0 ? <>  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} darkMode={false} /> </> : ""}
            </div>

            <React.Fragment>
                <Dialog
                    open={openShortlistModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    PaperProps={{
                        style: {
                            backgroundColor: "transparent", // or 'none' if you prefer
                            boxShadow: "none",
                        },
                    }}
                    BackdropProps={{
                        style: { opacity: 0, backgroundColor: "none", boxShadow: "none" },
                    }}
                >
                    <div
                        style={{ padding: "17px 19px 17px 20px" }}
                        className="bg-[#333333] w-[249px] rounded-[100px] text-center grid place-items-center"
                    >
                        <div className="text-[14px]" style={Urlmodaltext}>
                            <span className="text-[#fff]"> {shortlistText}</span>
                        </div>
                    </div>
                </Dialog>
            </React.Fragment>
        </>
    )
}

export default GridUserProfile