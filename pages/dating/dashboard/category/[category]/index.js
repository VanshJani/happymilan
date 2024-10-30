import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import DatingLayout from '../../../../../components/Dating/layout/DatingLayout';
import { useDispatch, useSelector } from 'react-redux';
import { GetDatingCategoryUsers } from '../../../../../store/dating-services/Redux-actions/home/DatingcategoryActions';
import Categoryusers from '../../../../../components/Dating/UI/CategoryUsers';
import Image from 'next/image';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';

function index() {

    const router = useRouter();

    const { category } = router.query


    const [CategoryText, SetCategoryText] = useState("")


    const EnumOfInterest = {
        MEET_NEW_FRIENDS: 'meet-new-friends',
        LOOKING_FOR_LOVE: 'looking-for-love',
        MOVIE_DATE: 'movie-date',
        FOODIES: 'foodies',
        TRAVEL_BUDDIES: 'travel-buddies',
        GAME_LOVER: 'game-lover',
        CHITCHAT: 'chit-chat',
        ADVENTUROUS: 'adventurous',
    };


    const Categories = [
        {
            id: 1,
            title: "Meet New Friends",
            slug: EnumOfInterest.MEET_NEW_FRIENDS,
        },
        {
            id: 2,
            title: "Looking for Love",
            slug: EnumOfInterest.LOOKING_FOR_LOVE,
        },
        {
            id: 3,
            title: "Movie Date",
            slug: EnumOfInterest.MOVIE_DATE,
        },
        {
            id: 4,
            title: "Foodies",
            slug: EnumOfInterest.FOODIES,
        },
        {
            id: 5,
            title: "Travel Buddies",
            slug: EnumOfInterest.TRAVEL_BUDDIES,
        },
        {
            id: 6,
            title: "Game Lover",
            slug: EnumOfInterest.GAME_LOVER,
        },
        {
            id: 7,
            title: "Chit-Chat",
            slug: EnumOfInterest.CHITCHAT,
        },
        {
            id: 7,
            title: "Adventurous",
            slug: EnumOfInterest.ADVENTUROUS,
        },
    ]

    useEffect(() => {
        if (category) {
            const matchedCategory = Categories.find((cat) => cat.slug === category);
            if (matchedCategory) {
                SetCategoryText(matchedCategory.title);
            }
        }
    }, [category]);

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

                <div className='w-full mt-2'>
                    <ul className='w-full 2xl:pl-[40px]  xl:pl-[40px]  pl-[30px] '>
                        <li>
                            <p style={SectionTitle}>{CategoryText || "None"}</p>
                        </li>
                    </ul>
                </div>

                <div className="mt-[6px]">

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