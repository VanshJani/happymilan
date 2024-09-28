import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper';
import Image from 'next/image';

export default function App() {

    const [cards, setCards] = useState([
        {
            id: 1,
            imageUrl: 'https://studiomarcofischer.com/images/portrait-men/portrait-men-004-studiomarcofischer.jpg',
            name: 'Rohan Patel',
            age: 36,
            profession: 'Software Designer',
            distance: 2.1,
            scrollImage: [
                {
                    img: "https://studiomarcofischer.com/images/portrait-men/portrait-men-004-studiomarcofischer.jpg"
                },
                {
                    img: "https://i.pinimg.com/originals/c9/f9/02/c9f9021e233d8bdb785099b458f3cade.jpg"
                },
                {
                    img: "https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
                },
                {
                    img: "https://i.pinimg.com/originals/2f/d0/89/2fd0894a0389ffbe317dd67ab136ee16.jpg"
                },
            ]
        },
        {
            id: 2,
            imageUrl: 'https://i.pinimg.com/originals/2f/d0/89/2fd0894a0389ffbe317dd67ab136ee16.jpg',
            name: 'John Doe',
            age: 28,
            profession: 'Photographer',
            distance: 3.5,
            scrollImage: [
                {
                    img: "https://i.pinimg.com/originals/2f/d0/89/2fd0894a0389ffbe317dd67ab136ee16.jpg"
                },
                {
                    img: "https://i.pinimg.com/originals/c9/f9/02/c9f9021e233d8bdb785099b458f3cade.jpg"
                },
                {
                    img: "https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
                },
                {
                    img: "https://i.pinimg.com/originals/2f/d0/89/2fd0894a0389ffbe317dd67ab136ee16.jpg"
                },
            ]
        },
        {
            id: 3,
            imageUrl: 'https://i.pinimg.com/originals/c9/f9/02/c9f9021e233d8bdb785099b458f3cade.jpg',
            name: 'John Doe',
            age: 28,
            profession: 'Photographer',
            distance: 3.5,
            scrollImage: [
                {
                    img: "https://i.pinimg.com/originals/c9/f9/02/c9f9021e233d8bdb785099b458f3cade.jpg"
                },
                {
                    img: "https://i.pinimg.com/originals/c9/f9/02/c9f9021e233d8bdb785099b458f3cade.jpg"
                },
                {
                    img: "https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
                },
                {
                    img: "https://i.pinimg.com/originals/2f/d0/89/2fd0894a0389ffbe317dd67ab136ee16.jpg"
                },
            ]

        },
        {
            id: 4,
            imageUrl: 'https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg',
            name: 'John Doe',
            age: 28,
            profession: 'Photographer',
            distance: 3.5,
            scrollImage: [
                {
                    img: "https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
                },
                {
                    img: "https://i.pinimg.com/originals/c9/f9/02/c9f9021e233d8bdb785099b458f3cade.jpg"
                },
                {
                    img: "https://i.pinimg.com/736x/07/44/76/074476f844838fb2487a9d7b4d08a904.jpg"
                },
                {
                    img: "https://i.pinimg.com/originals/2f/d0/89/2fd0894a0389ffbe317dd67ab136ee16.jpg"
                },
            ]

        },
    ]);

    return (
        <>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span id="Swipe-Check" class="' + className + '"> </span>';
                    },
                }}
                modules={[Pagination]}
                className="mySwiper w-[329px] h-[378px]"
            >
                {
                    cards.map((res) => {
                        return (
                            <SwiperSlide style={{borderRadius:"20px"}}><Image className='rounded-[20px]' width={329} height={378} src={res?.imageUrl} /></SwiperSlide>
                        )
                    })
                }
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}

            </Swiper>
        </>
    );
}
