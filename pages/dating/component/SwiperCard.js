import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const SwipeCard = ({ card, onSwipe }) => {
    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        // Decrease the threshold for triggering a swipe
        if (offset > 100 || velocity > 500) {
            onSwipe('right');
        } else if (offset < -100 || velocity < -500) {
            onSwipe('left');
        }
    };

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

    const [ActiveImageSlide, SetActiveImageSlide] = useState(0)

    return (
        <>
            <div onClick={() => console.log(card)} className='absolute flex justify-end top-0 right-20'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                    <path d="M11.1364 18C10.8168 18 10.5475 17.8887 10.3285 17.666C10.1095 17.4434 10 17.1758 10 16.8631C10 16.5545 10.1097 16.2856 10.329 16.0563C10.5484 15.827 10.8148 15.7124 11.1283 15.7124C11.448 15.7124 11.7173 15.8275 11.9363 16.0577C12.1553 16.2879 12.2648 16.5577 12.2648 16.8673C12.2648 17.1768 12.1553 17.443 11.9363 17.6658C11.7173 17.8886 11.4507 18 11.1364 18ZM11.1364 12.1381C10.8168 12.1381 10.5475 12.0284 10.3285 11.809C10.1095 11.5897 10 11.3232 10 11.0098C10 10.6901 10.1097 10.4208 10.329 10.2018C10.5484 9.98281 10.8148 9.87332 11.1283 9.87332C11.448 9.87332 11.7173 9.98281 11.9363 10.2018C12.1553 10.4208 12.2648 10.6874 12.2648 11.0016C12.2648 11.3213 12.1553 11.5906 11.9363 11.8096C11.7173 12.0286 11.4507 12.1381 11.1364 12.1381ZM11.1364 6.29899C10.8168 6.29899 10.5475 6.18595 10.3285 5.95988C10.1095 5.73381 10 5.46204 10 5.14458C10 4.82712 10.1097 4.55699 10.329 4.33419C10.5484 4.1114 10.8148 4 11.1283 4C11.448 4 11.7173 4.11234 11.9363 4.33701C12.1553 4.56168 12.2648 4.83196 12.2648 5.14785C12.2648 5.46687 12.1553 5.73848 11.9363 5.96268C11.7173 6.18689 11.4507 6.29899 11.1364 6.29899Z" fill="black" />
                </svg>
            </div>
            <motion.div
                className="2xl:h-[347px] 2xl:w-[299px] xl:w-[270px] xl:h-[319px] rounded-xl shadow-lg"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragSnapToOrigin
                onDragEnd={handleDragEnd}
                initial={{ scale: 1 }}
                animate={{ x: 0 }}
                whileTap={{ scale: 1.05 }}
                onClick={(e) => e.preventDefault()} // Prevent tap from interfering with drag
            >

                <div className="relative 2xl:h-[347px] 2xl:w-[299px] xl:w-[270px] xl:h-[319px]">

                    <div className='absolute top-[10px] left-2'>
                        <ul className='flex space-x-[6px]'>
                            {/* Indicators */}
                            {card?.scrollImage?.map((_, index) => (
                                <li key={index} onClick={() => SetActiveImageSlide(index)} className={`w-[66px] h-[2px] rounded-[20px] ${index === ActiveImageSlide ? 'bg-[#FFF]' : 'bg-[#FFF] opacity-40'}`}></li>
                            ))}
                        </ul>
                    </div>
                    <img src={card.imageUrl} alt="Profile" className="2xl:h-[347px] 2xl:w-[299px] xl:w-[270px] xl:h-[319px] object-cover rounded-xl" />
                    <div className="absolute bottom-[30px] space-y-[5px] text-[white] ml-[20px] 2xl:ml-[30px] xl:ml-[30px]">
                        <div>
                            <div className="rounded-[10px] text-center bg-[#30b70a] text-[black] w-[36px] h-[14px]">
                                <p style={Text2} className="text-[10px]">online</p>
                            </div>
                        </div>
                        {/* <Link href={"#"}> */}
                        <h1 className="text-[20px]" style={Text1}>
                            Rohan Patel
                        </h1>
                        {/* </Link> */}
                        <p className="text-[10px]" style={Text2}>
                            Male 36, 4’ 5” | Ahmedabad (2.1 km)
                        </p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

const SwiperCardNext = () => {
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
        {
            id: 5,
            imageUrl: 'https://i.pinimg.com/originals/9a/04/89/9a04890907e346a9872b4f9c643c6bae.jpg',
            name: 'John Doe',
            age: 28,
            profession: 'Photographer',
            distance: 3.5,
            scrollImage: [
                {
                    img: "https://i.pinimg.com/originals/9a/04/89/9a04890907e346a9872b4f9c643c6bae.jpg"
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

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (direction) => {
        if (direction === 'right' || direction === 'left') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }
    };

    const handleButtonClick = (action) => {
        if (action === 'like') {
            console.log('Liked:', cards[currentIndex].name);
            handleSwipe('right');
        } else if (action === 'dislike') {
            console.log('Disliked:', cards[currentIndex].name);
            handleSwipe('left');
        }
    };

    const prevCardIndex = (currentIndex - 1 + cards.length) % cards.length;
    const nextCardIndex = (currentIndex + 1) % cards.length;

    return (
        <div className="mt-[20px] top-3 relative flex items-center space-x-[20px] justify-center">

            <div className="space-x-[20px] flex items-center justify-center h-full">
                {/* Side Cards - Show left card only if current index is greater than 0 */}
                <div className=' w-[91px] h-[104px]'>
                    {currentIndex > 0 && (
                        <motion.div
                            className="  w-[91px] h-[104px] opacity-50"
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            <img
                                src={cards[prevCardIndex].imageUrl}
                                alt="Previous Profile"
                                className="w-full h-full object-cover rounded-xl opacity-30"
                            />
                        </motion.div>
                    )}
                </div>


                {/* Main Swipeable Card */}
                {cards.length > 0 && (
                    <SwipeCard
                        card={cards[currentIndex]}
                        onSwipe={handleSwipe}
                    />
                )}

                <motion.div
                    className=" w-[91px] h-[104px] opacity-50"
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <img
                        src={cards[nextCardIndex].imageUrl}
                        alt="Next Profile"
                        className="w-full h-full object-cover rounded-xl opacity-50"
                    />
                </motion.div>

                {/* Action Buttons */}
                <div className="left-[-20px] absolute bottom-[-60px] w-full flex justify-center space-x-[20px]">

                    <Image
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px] cursor-pointer"
                        src="/assests/dashboard/icon/ignore-icon-2.svg"
                        onClick={() => handleButtonClick('dislike')}
                    />
                    <Image
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px] cursor-pointer"
                        src="/assests/dashboard/icon/heart-icon-2.svg"
                        onClick={() => handleButtonClick('like')}
                    />
                    <Image
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px] cursor-pointer"
                        src="/assests/dashboard/icon/send-icon-2.svg"
                        onClick={() => handleSwipe('right')}
                    />
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default SwiperCardNext;
