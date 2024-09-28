import React from 'react'
import dynamic from 'next/dynamic';
const ProfileComplete = dynamic(() => import('../../../../pages/_components/Container/ProfileComplete'), { ssr: false });
const MoreSuggestion = dynamic(() => import('../../../../pages/_components/Container/MoreSuggestion'), { ssr: false });


function SidePanel() {
    return (
        <>
            <div className="hidden absolute 2xl:top-[250px] xl:top-[245px] right-10 2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[320px] xl:w-[300px]">

                <ProfileComplete />
                <MoreSuggestion />
            </div>
        </>
    )
}

export default SidePanel