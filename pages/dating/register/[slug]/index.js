import { useRouter } from 'next/router'
import React from 'react'
import RegisterLayout from '../../../../components/Dating/register/layout/RegisterLayout'
import GeneralSection from '../../../../components/Dating/register/sections/GeneralSection'
import AdditionalDetailsSection from '../../../../components/Dating/register/sections/AdditionalDetailsSection'
import HobbySection from '../../../../components/Dating/register/sections/HobbySection'
import UploadSection from '../../../../components/Dating/register/sections/UploadSection'
import PreferencesSection from '../../../../components/Dating/register/sections/PreferencesSection'

function index() {

    const router = useRouter()

    const { slug } = router.query

    const RenderSection = () => {
        switch (slug) {
            case "general":
                return <GeneralSection />;
            case "details":
                return <AdditionalDetailsSection />;
            case "hobby":
                return <HobbySection />;
            case "uplaod":
                return <UploadSection />;
            case "preferences":
                return <PreferencesSection />;

            default: return <h1>No Section</h1>
        }
    }


    return (
        <>
            <RegisterLayout slug={slug}>
                {RenderSection()}
            </RegisterLayout>
        </>
    )
}

export default index