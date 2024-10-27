import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
// import SwiperCardNext from '../../../component/SwiperCard';
import DatingLayout from '../../../../../components/Dating/layout/DatingLayout';
import { useDispatch, useSelector } from 'react-redux';
import { GetDatingCategoryUsers } from '../../../../../store/dating-services/Redux-actions/home/DatingcategoryActions';
// import CategoryUsers from '../../../../../components/Dating/UI/CategoryUsers';
import Categoryusers from '../../../../../components/Dating/UI/CategoryUsers';
import Image from 'next/image';

function index() {

    const router = useRouter();

    const { category } = router.query
    console.log("🚀 ~ index ~ category:", category)

    const dispatch = useDispatch();


    useEffect(() => {
        if (category) {  // Check if category is not null or undefined
            dispatch(GetDatingCategoryUsers(category));
        }
    }, [category, dispatch]); // Add category as a dependency
    const SectionTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px", /* 137.5% */
    }

    const ImageNotFoundText = {
        color: "#B3CBF1",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "normal"
    }

    const datingUsers = useSelector((state) => state?.category?.users?.paginatedResults || []);

    return (
        <DatingLayout>


            <div className='w-full grid place-items-center'>

                <div className='w-full flex justify-start'>
                    <ul className='w-full grid place-items-start'>
                        <li>
                            <p className=' ' style={SectionTitle}>New Suggestions</p>
                        </li>
                    </ul>
                </div>

                <div className="space-y-[30px] flex flex-col items-center">

                    {
                        datingUsers?.length > 0 ?
                            <Categoryusers />
                            :
                            <div>
                                <div className='h-[500px] grid place-items-center'>
                                    <div className='grid place-items-center space-y-[5px]'>
                                        <Image alt='not-found' width={34} height={34} src={"/assests/dashboard/icon/NotFound-img.svg"} />
                                        <h1 className='inline' style={ImageNotFoundText}>No Profiles Found</h1>
                                    </div>
                                </div>
                            </div>

                    }
                </div>
            </div>
        </DatingLayout>
    )
}

export default index