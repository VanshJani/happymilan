// NewrequestData
import React from 'react'
import Image from 'next/image'
import Layout from '../../Layout'


function NewrequestData() {
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
            <Layout>
                <div className='w-full grid place-items-center'>

                    <div className="space-y-[20px] flex flex-col items-center">
                        <div className='w-full'>
                            <ul className='w-full flex justify-between'>
                                <li>
                                    <p style={SectionTitle}>New Accepted</p>
                                </li>
                                <li className=''>
                                    <Image width={24} height={24} alt='search' src={"/dating/icons/search-icon.svg"} />
                                </li>
                            </ul>

                        </div>
                        <div className="mt-[20px] relative flex items-center space-x-[20px] justify-center">

                            <div>
                                <Image
                                    className="cursor-pointer"
                                    width={91}
                                    height={104}
                                    src="/assests/dating/user-1.png"
                                />
                            </div>
                            <div className="relative">
                                <div className='flex justify-end relative left-8 top-5'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                                        <path d="M11.1364 18C10.8168 18 10.5475 17.8887 10.3285 17.666C10.1095 17.4434 10 17.1758 10 16.8631C10 16.5545 10.1097 16.2856 10.329 16.0563C10.5484 15.827 10.8148 15.7124 11.1283 15.7124C11.448 15.7124 11.7173 15.8275 11.9363 16.0577C12.1553 16.2879 12.2648 16.5577 12.2648 16.8673C12.2648 17.1768 12.1553 17.443 11.9363 17.6658C11.7173 17.8886 11.4507 18 11.1364 18ZM11.1364 12.1381C10.8168 12.1381 10.5475 12.0284 10.3285 11.809C10.1095 11.5897 10 11.3232 10 11.0098C10 10.6901 10.1097 10.4208 10.329 10.2018C10.5484 9.98281 10.8148 9.87332 11.1283 9.87332C11.448 9.87332 11.7173 9.98281 11.9363 10.2018C12.1553 10.4208 12.2648 10.6874 12.2648 11.0016C12.2648 11.3213 12.1553 11.5906 11.9363 11.8096C11.7173 12.0286 11.4507 12.1381 11.1364 12.1381ZM11.1364 6.29899C10.8168 6.29899 10.5475 6.18595 10.3285 5.95988C10.1095 5.73381 10 5.46204 10 5.14458C10 4.82712 10.1097 4.55699 10.329 4.33419C10.5484 4.1114 10.8148 4 11.1283 4C11.448 4 11.7173 4.11234 11.9363 4.33701C12.1553 4.56168 12.2648 4.83196 12.2648 5.14785C12.2648 5.46687 12.1553 5.73848 11.9363 5.96268C11.7173 6.18689 11.4507 6.29899 11.1364 6.29899Z" fill="black" />
                                    </svg>
                                </div>
                                <Image
                                    width={329}
                                    height={378}
                                    className="cursor-pointer 2xl:h-[348px] 2xl:w-[299px] xl:w-[270px] xl:h-[320px]"
                                    src="/assests/dating/user-image-dating.png"
                                />
                                <div className="absolute bottom-[30px] space-y-[5px] text-[white] ml-[20px] 2xl:ml-[30px] xl:ml-[30px]">
                                    <div>
                                        <div className="rounded-[10px] text-center bg-[#30b70a] text-[black] w-[36px] h-[14px]">
                                            <p style={Text2} className="text-[10px]">online</p>
                                        </div>
                                    </div>
                                    <h1 className="text-[20px]" style={Text1}>
                                        Rohan Patel
                                    </h1>
                                    <p className="text-[10px]" style={Text2}>
                                        Male 36, 4’ 5” | Ahmedabad (2.1 km)
                                    </p>
                                </div>
                            </div>
                            <div>
                                <Image
                                    className="cursor-pointer"
                                    width={91}
                                    height={104}
                                    src="/assests/dating/user-2.png"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center space-x-5  w-[329px]">
                            <div className='rounded-full border-[1px] border-[#8225AF] w-[40px] h-[40px] grid place-items-center'> <svg className='SVG-hover' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.529793 12L0 11.4702L5.47021 6L0 0.529793L0.529793 0L6 5.47021L11.4702 0L12 0.529793L6.52979 6L12 11.4702L11.4702 12L6 6.52979L0.529793 12Z" fill={"black"} />
                            </svg>
                            </div>
                            <div className='rounded-full border-[1px] border-[#8225AF] w-[40px] h-[40px] grid place-items-center'>
                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.65147 12L0 6.34853L0.637477 5.73308L5.65147 10.747L16.3765 0L17.014 0.637506L5.65147 12Z" fill={"black"} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default NewrequestData