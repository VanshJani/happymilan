import Image from 'next/image'
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


    const Categories = [
        {
            id: 1,
            title: "Meet New Friends",
            imageURL: "/dating/sections/category/Friends-category.jpg"
        },
        {
            id: 2,
            title: "Looking for Love",
            imageURL: "/dating/sections/category/Love-category.jpg"
        },
        {
            id: 3,
            title: "Movie Date",
            imageURL: "/dating/sections/category/MovieDate-category.jpg"
        },
        {
            id: 4,
            title: "Foodies",
            imageURL: "/dating/sections/category/Foodies-category.jpg"
        },
        {
            id: 5,
            title: "Travel Buddies",
            imageURL: "/dating/sections/category/Travel-category.jpg"
        },
        {
            id: 6,
            title: "Game Lover",
            imageURL: "/dating/sections/category/Gamer-category.jpg"
        },
        {
            id: 7,
            title: "Chit-Chat",
            imageURL: "/dating/sections/category/chitChat-category.jpg"
        },
        {
            id: 7,
            title: "Adventurous",
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

                <div className="space-y-[20px] flex flex-col items-center">
                    <div className='w-full'>
                        <ul className='w-full flex justify-between'>
                            <li>
                                <p style={SectionTitle}>Browse By Categories</p>
                            </li>
                            <li>
                            </li>
                        </ul>

                    </div>

                    <ul className='grid grid-cols-2 gap-4'>

                        {
                            Categories.map((category) => {
                                return (
                                    <li key={category?.id} className='cursor-pointer relative w-[272px] h-[160px] rounded-[10px] overflow-hidden'>
                                        <Image
                                            width={272}
                                            height={160}
                                            className='rounded-[10px]'
                                            loading='lazy'
                                            alt='Friends'
                                            src={category?.imageURL}
                                        />
                                        <div className="absolute inset-0 bg-black opacity-50"></div>

                                        <div className="absolute bottom-0 left-0 w-full text-white text-center p-2">
                                            <p style={CategoryTitle} className='font-bold'>{category?.title}</p>
                                        </div>
                                    </li>
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