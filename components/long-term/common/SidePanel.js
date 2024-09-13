import React from 'react'
import ProfileComplete from '../../../pages/_components/Container/ProfileComplete'
import MoreSuggestion from '../../../pages/_components/Container/MoreSuggestion'

function SidePanel() {
    return (
        <>
            <div className=" hidden  absolute 2xl:top-[250px] xl:top-[245px] right-10 2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]">

                <ProfileComplete />

                <MoreSuggestion />
            </div>
        </>
    )
}

export default SidePanel