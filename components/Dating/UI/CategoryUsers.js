import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import ProfileMoreSection from '../common/Models/ProfileMoreSection';

const SwipeCard = ({ card, onSwipe }) => {
    const handleDragEnd = (event, info) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        // Decrease the threshold for triggering a swipe
        if (offset > 100 || velocity > 500) {
            onSwipe('right');
            console.log("Right", card)
        } else if (offset < -100 || velocity < -500) {
            onSwipe('left');
            console.log("Left", card)

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
            <div>
                <ProfileMoreSection data={card} />
            </div>
            <motion.div
                className="2xl:h-[378px] 2xl:w-[329px] xl:w-[270px] xl:h-[319px] rounded-xl shadow-lg"
            // drag="x"
            // dragConstraints={{ left: 0, right: 0 }}
            // dragSnapToOrigin
            // onDragEnd={handleDragEnd}
            // initial={{ scale: 1 }}
            // animate={{ x: 0 }}
            // whileTap={{ scale: 1.05 }}
            // onClick={(e) => e.preventDefault()} // Prevent tap from interfering with drag
            >

                <div className="relative 2xl:h-[378px] 2xl:w-[329px] xl:w-[270px] xl:h-[319px]">

                    <div className='hidden absolute top-[10px] left-2'>
                        <ul className='flex space-x-[6px]'>
                            {/* Indicators */}
                            {card?.scrollImage?.map((_, index) => (
                                <li key={index} onClick={() => SetActiveImageSlide(index)} className={`w-[66px] h-[2px] rounded-[20px] ${index === ActiveImageSlide ? 'bg-[#FFF]' : 'bg-[#FFF] opacity-40'}`}></li>
                            ))}
                        </ul>
                    </div>
                    <img src={card?.profilePic || "https://studiomarcofischer.com/images/portrait-men/portrait-men-004-studiomarcofischer.jpg"} alt="Profile" className="2xl:h-[378px] 2xl:w-[329px] xl:w-[270px] xl:h-[319px] object-cover rounded-xl" />
                    <div className="absolute bottom-[30px] space-y-[5px] text-[white] ml-[20px] 2xl:ml-[30px] xl:ml-[30px]">
                        <div>
                            <div className="rounded-[10px] text-center bg-[#30b70a] text-[black] w-[36px] h-[14px]">
                                <p style={Text2} className="text-[10px]">online</p>
                            </div>
                        </div>
                        {/* <Link href={"#"}> */}
                        <Link href={`/dating/dashboard/${card?.id || card?._id}`} ><h1 className="z-10 text-[20px]" style={Text1}>
                            {card?.name}
                        </h1></Link>
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

const Categoryusers = () => {


    const dispatch = useDispatch();



    // const datingUsers = useSelector((state) => state.datingusers?.Paginated?.userData[0]?.paginatedResults || []);
    const datingUsers = useSelector((state) => state?.category?.users?.paginatedResults || []);


    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (direction) => {
        if (direction === 'right' || direction === 'left') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % datingUsers?.length);
        }
    };

    const handleButtonClick = (action) => {
        if (action === 'like') {
            console.log('Liked:', datingUsers?.[currentIndex]?.name);
            handleSwipe('right');
        } else if (action === 'dislike') {
            console.log('Disliked:', datingUsers?.[currentIndex]?.name);
            handleSwipe('left');
        }
    };

    const prevCardIndex = (currentIndex - 1 + datingUsers?.length) % datingUsers?.length;
    const nextCardIndex = (currentIndex + 1) % datingUsers?.length;

    return (
        <div className="mt-[20px] top-3 relative flex items-center space-x-[20px] justify-center">

            <div className="space-x-[20px] flex items-center justify-center h-full">
                <div className='w-[91px] h-[104px]'>
                    {currentIndex > 0 && (
                        <motion.div
                            className="w-[91px] h-[104px] opacity-50"
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{ scale: 1, opacity: 1 }}
                        >
                            <img
                                src={datingUsers?.[prevCardIndex]?.profilePic || "https://i.pinimg.com/originals/c9/f9/02/c9f9021e233d8bdb785099b458f3cade.jpg"}
                                alt="Previous Profile"
                                className="w-full h-full object-cover rounded-xl opacity-30"
                            />
                        </motion.div>
                    )}
                </div>


                {/* Main Swipeable Card */}
                {datingUsers?.length > 0 && (
                    <SwipeCard
                        card={datingUsers?.[currentIndex]}
                        onSwipe={handleSwipe}
                    />
                )}

                <motion.div
                    className="w-[91px] h-[104px] opacity-50"
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <img
                        src={datingUsers?.[nextCardIndex]?.profilePic || "https://i.pinimg.com/originals/c9/f9/02/c9f9021e233d8bdb785099b458f3cade.jpg"}
                        alt="Next Profile"
                        className="w-full h-full object-cover rounded-xl opacity-50"
                    />
                </motion.div>

                {/* Action Buttons */}
                <div className="left-[-10px] absolute bottom-[-60px] w-full flex justify-center space-x-[12px]">

                    <div>
                        <div onClick={() => handleButtonClick('dislike')} className='w-[63px] h-[44px] grid place-items-center' id='Reject-dating'>
                            <svg className='reject-icon-dt' width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M12.9216 0H5.00156C4.27116 0 3.64636 0.44 3.38236 1.0736L0.724762 7.2776C0.645562 7.48 0.601562 7.6912 0.601562 7.92V9.68C0.601562 10.648 1.39356 11.44 2.36156 11.44H7.91436L7.07836 15.4616L7.05196 15.7432C7.05196 16.104 7.20156 16.4384 7.43916 16.676L8.37196 17.6L14.1712 11.8008C14.488 11.484 14.6816 11.044 14.6816 10.56V1.76C14.6816 0.792 13.8896 0 12.9216 0ZM16.4416 0V10.56H19.9616V0H16.4416Z" />
                            </svg>

                        </div>
                    </div>

                    <div>
                        <div className='w-[63px] h-[44px] grid place-items-center' id='cancel-dating'>
                            <svg className='cancel-icon-dt' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M1.85225 14.9045L0 13.0523L5.6 7.45225L0 1.85225L1.85225 0L7.45225 5.6L13.0522 0L14.9045 1.85225L9.3045 7.45225L14.9045 13.0523L13.0522 14.9045L7.45225 9.3045L1.85225 14.9045Z" />
                            </svg>
                        </div>
                    </div>


                    <div>
                        <div onClick={() => handleButtonClick('like')} className="Like-button w-[63px] h-[44px] grid place-items-center border-[1px] border-[#9E28D7] rounded-[22px]">
                            <svg class="the-like-icon" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.1914 17.8002L8.80064 16.5341C3.86113 12.055 0.600098 9.1009 0.600098 5.4754C0.600098 2.52129 2.92119 0.200195 5.8753 0.200195C7.54418 0.200195 9.14593 0.977089 10.1914 2.20477C11.2368 0.977089 12.8386 0.200195 14.5075 0.200195C17.4616 0.200195 19.7827 2.52129 19.7827 5.4754C19.7827 9.1009 16.5216 12.055 11.5821 16.5437L10.1914 17.8002Z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div onClick={() => handleSwipe('right')} className="right-swipe-icon w-[63px] h-[44px] grid place-items-center border-[1px] border-[#7045EB] rounded-[22px]">
                            <svg class="right-swipe" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M17.0949 7.89531C16.9607 7.81951 1.67321 0.142507 1.53128 0.0793316C1.33 -0.01164 0.973874 -0.026802 0.733877 0.0464809C0.460334 0.132399 0.150661 0.42553 0.0603392 0.68581C-0.00933631 0.880387 -0.0196587 1.17857 0.0345332 1.35293C0.0577595 1.41611 0.767426 2.82363 1.61128 4.48387L3.14932 7.49605L3.39447 7.53901C4.92219 7.80687 10.3802 8.7747 10.4266 8.78481C10.5092 8.80503 10.726 8.76459 6.88087 9.43172C4.96348 9.76275 3.34286 10.0458 3.27836 10.0584C3.16223 10.0812 3.15964 10.0837 1.62418 13.0883C0.780328 14.7435 0.0680802 16.1586 0.0422758 16.2293C-0.0196594 16.4163 -0.0119176 16.7069 0.0603392 16.9141C0.15066 17.1744 0.460333 17.4676 0.733877 17.5535C0.973873 17.6268 1.33 17.6117 1.53128 17.5206C1.61386 17.4853 5.14413 15.7163 9.37631 13.5937C16.7052 9.91437 17.0819 9.72232 17.2653 9.54291C17.5826 9.23714 17.6756 8.86314 17.5387 8.46642C17.4692 8.26677 17.2472 7.9787 17.0949 7.89531Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categoryusers;
