import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../../Layout';
import SwiperCardNext from '../../../component/SwiperCard';

function index() {

    const router = useRouter();

    const { category } = router.query
    const SectionTitle = {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "22px", /* 137.5% */
    }
    return (
        <Layout>

            <div className='w-full grid place-items-center'>

                <div className="space-y-[30px] flex flex-col items-center">
                    <div className='w-full flex justify-start'>
                        <ul className='w-full flex justify-between'>
                            <li>
                                <p className='relative left-[-135px]' style={SectionTitle}>New Suggestions</p>
                            </li>
                            <li className='h-[24px] w-[25px]'>

                            </li>
                        </ul>

                    </div>
                    <SwiperCardNext />
                </div>
            </div>
        </Layout>
    )
}

export default index