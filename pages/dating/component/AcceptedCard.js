import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAcceptedRequestDatingData } from '../../../store/dating-services/Redux-actions/home/DatingUsersActions';
import ProfileMoreSection from '../../../components/Dating/common/Models/ProfileMoreSection';
import Link from 'next/link';
import Image from 'next/image'
import { capitalizeFirstLetter } from '../../../utils/form/Captitelize';


const AcceptedUsersCard = () => {



    const [currentPage, setCurrentPage] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    // const [users, setUsers] = useState([]);

    const dispatch = useDispatch();

    const { loading, users } = useSelector((state) => state?.datingusers?.Accepted)

    // Fetch users whenever currentPage changes

    const [page, setpage] = useState(1);

    // useEffect(() => {
    //     dispatch(getAcceptedRequestData("listview", page));
    // }, [])
    useEffect(() => {

        dispatch(getAcceptedRequestDatingData("listview", page))
    }, [currentPage]);

    // users?.data?.results?

    const Text1 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal"
    }

    const Text2 = {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "14px"
    }

    const SectionTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px", /* 137.5% */
    }
    return (
        <>
            <div className='mt-5'>
                <div className='space-y-5'>
                    {
                        users?.data?.results?.map((res, index) => {
                            return (
                                <div key={index} className='w-[100%]  h-[137px] border-[1px] border-[#EAE5E5] rounded-[18px]'>
                                    {/* <div key={index} className='w-[640px] h-[137px] 2xl:w-[640px] 2xl:h-[137px] xl:w-[600px] xl:h-[137px] lg:w-[500px] lg:h-[137px] border-[1px] border-[#EAE5E5] rounded-[18px]'> */}
                                    <div className='flex justify-between items-center h-full pr-5 space-x-[160px]'>
                                        <ul className='flex items-center  space-x-5'>
                                            <li>
                                                <Image
                                                    width={120}
                                                    height={137}
                                                    className="cursor-pointer 2xl:h-[137px] 2xl:w-[120px] xl:w-[120px] xl:h-[137px] lg:w-[100px] lg:h-[100px] w-full h-full"
                                                    alt='image'
                                                    style={{ objectFit: "cover", borderRadius: "14px" }}
                                                    src={res?.friendList?.profilePic}
                                                />
                                            </li>
                                            <li>
                                                <div className="">
                                                    <div>
                                                        <div className="rounded-[10px] text-center bg-[#30b70a] text-[black] w-[36px] h-[14px]">
                                                            <p style={Text2} className="text-[10px]">online</p>
                                                        </div>
                                                    </div>
                                                    <h1 className="text-[20px]" style={Text1}>
                                                        {res?.friendList?.name}
                                                    </h1>
                                                    <p className="text-[10px]" style={Text2}>
                                                        {/* {capitalizeFirstLetter(res?.friendList?.gender)} 36, 4’ 5” <span className='text-[#cccbcb]'>|</span> Ahmedabad (2.1 km) */}
                                                        {`${capitalizeFirstLetter(res?.friendList?.datingData[0]?.Occupation) || "NA"} ,`}&nbsp;&nbsp;{"2.1 km away"}
                                                    </p>
                                                </div>
                                            </li>

                                        </ul>
                                        <ul className=' flex items-center space-x-[15px]'>
                                            <li>
                                                <div className="w-full flex justify-center space-x-[12px]">
                                                    <div>
                                                        <div className="right-swipe-icon group  w-[108px] h-[44px] flex justify-center items-center space-x-[15px] border-[1px] border-[#7045EB] rounded-[22px]">
                                                            <div className='group-hover:text-[#FFF]'>Chat</div>
                                                            <svg class="right-swipe" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path id="Vector" d="M17.0949 7.89531C16.9607 7.81951 1.67321 0.142507 1.53128 0.0793316C1.33 -0.01164 0.973874 -0.026802 0.733877 0.0464809C0.460334 0.132399 0.150661 0.42553 0.0603392 0.68581C-0.00933631 0.880387 -0.0196587 1.17857 0.0345332 1.35293C0.0577595 1.41611 0.767426 2.82363 1.61128 4.48387L3.14932 7.49605L3.39447 7.53901C4.92219 7.80687 10.3802 8.7747 10.4266 8.78481C10.5092 8.80503 10.726 8.76459 6.88087 9.43172C4.96348 9.76275 3.34286 10.0458 3.27836 10.0584C3.16223 10.0812 3.15964 10.0837 1.62418 13.0883C0.780328 14.7435 0.0680802 16.1586 0.0422758 16.2293C-0.0196594 16.4163 -0.0119176 16.7069 0.0603392 16.9141C0.15066 17.1744 0.460333 17.4676 0.733877 17.5535C0.973873 17.6268 1.33 17.6117 1.53128 17.5206C1.61386 17.4853 5.14413 15.7163 9.37631 13.5937C16.7052 9.91437 17.0819 9.72232 17.2653 9.54291C17.5826 9.23714 17.6756 8.86314 17.5387 8.46642C17.4692 8.26677 17.2472 7.9787 17.0949 7.89531Z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                                    <path d="M11.1364 18C10.8168 18 10.5475 17.8887 10.3285 17.666C10.1095 17.4434 10 17.1758 10 16.8631C10 16.5545 10.1097 16.2856 10.329 16.0563C10.5484 15.827 10.8148 15.7124 11.1283 15.7124C11.448 15.7124 11.7173 15.8275 11.9363 16.0577C12.1553 16.2879 12.2648 16.5577 12.2648 16.8673C12.2648 17.1768 12.1553 17.443 11.9363 17.6658C11.7173 17.8886 11.4507 18 11.1364 18ZM11.1364 12.1381C10.8168 12.1381 10.5475 12.0284 10.3285 11.809C10.1095 11.5897 10 11.3232 10 11.0098C10 10.6901 10.1097 10.4208 10.329 10.2018C10.5484 9.98281 10.8148 9.87332 11.1283 9.87332C11.448 9.87332 11.7173 9.98281 11.9363 10.2018C12.1553 10.4208 12.2648 10.6874 12.2648 11.0016C12.2648 11.3213 12.1553 11.5906 11.9363 11.8096C11.7173 12.0286 11.4507 12.1381 11.1364 12.1381ZM11.1364 6.29899C10.8168 6.29899 10.5475 6.18595 10.3285 5.95988C10.1095 5.73381 10 5.46204 10 5.14458C10 4.82712 10.1097 4.55699 10.329 4.33419C10.5484 4.1114 10.8148 4 11.1283 4C11.448 4 11.7173 4.11234 11.9363 4.33701C12.1553 4.56168 12.2648 4.83196 12.2648 5.14785C12.2648 5.46687 12.1553 5.73848 11.9363 5.96268C11.7173 6.18689 11.4507 6.29899 11.1364 6.29899Z" fill="black" />
                                                </svg>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>

    );
};

export default AcceptedUsersCard;
