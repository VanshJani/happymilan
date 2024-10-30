import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function CategorySection() {

    const CategoryTitle = {
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "normal",
    }

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
            imageURL: "/dating/sections/category/Friends-category.jpg"
        },
        {
            id: 2,
            title: "Looking for Love",
            slug: EnumOfInterest.LOOKING_FOR_LOVE,
            imageURL: "/dating/sections/category/Love-category.jpg"
        },
        {
            id: 3,
            title: "Movie Date",
            slug: EnumOfInterest.MOVIE_DATE,
            imageURL: "/dating/sections/category/MovieDate-category.jpg"
        },
        {
            id: 4,
            title: "Foodies",
            slug: EnumOfInterest.FOODIES,
            imageURL: "/dating/sections/category/Foodies-category.jpg"
        },
        {
            id: 5,
            title: "Travel Buddies",
            slug: EnumOfInterest.TRAVEL_BUDDIES,
            imageURL: "/dating/sections/category/Travel-category.jpg"
        },
        {
            id: 6,
            title: "Game Lover",
            slug: EnumOfInterest.GAME_LOVER,
            imageURL: "/dating/sections/category/Gamer-category.jpg"
        },
        {
            id: 7,
            title: "Chit-Chat",
            slug: EnumOfInterest.CHITCHAT,
            imageURL: "/dating/sections/category/chitChat-category.jpg"
        },
        {
            id: 7,
            title: "Adventurous",
            slug: EnumOfInterest.ADVENTUROUS,
            imageURL: "/dating/sections/category/Adventurous-category.jpg"
        },
    ]

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
            <div className='w-full grid place-items-center'>

                <div className='w-full mt-2'>
                    <ul className='w-full 2xl:pl-[40px]  xl:pl-[40px]  pl-[30px] '>
                        <li>
                            <p style={SectionTitle}>Browse By Categories</p>
                        </li>
                    </ul>
                </div>
                <div className='mt-9'>

                    <ul className='grid grid-cols-2 gap-5'>

                        {
                            Categories.map((category) => {
                                return (
                                    <Link href={`/dating/dashboard/category/${category?.slug}`}>
                                        <li key={category?.id} className='group cursor-pointer relative w-[272px] h-[160px] rounded-[10px] overflow-hidden'>
                                            <Image
                                                width={272}
                                                height={160}
                                                className='rounded-[10px] group-hover:scale-105 duration-150'
                                                loading='lazy'
                                                alt='Friends'
                                                src={category?.imageURL}
                                            />
                                            <div className="absolute inset-0 bg-black opacity-50"></div>

                                            <div className="absolute bottom-0 left-0 w-full text-white text-center p-2">
                                                <p style={CategoryTitle} className='font-bold'>{category?.title}</p>
                                            </div>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CategorySection