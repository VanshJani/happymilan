import { useRouter } from 'next/router'
import React from 'react'
import GenralSec from '../../../../components/long-term/register/sections/GenralSec'
import AddressSec from '../../../../components/long-term/register/sections/AddressSec'
import ContactSec from '../../../../components/long-term/register/sections/ContactSec'
import EducationSec from '../../../../components/long-term/register/sections/EducationSec'
import ProffSec from '../../../../components/long-term/register/sections/ProfessionalSec'
import HobbySec from '../../../../components/long-term/register/sections/HobbySec'
import UploadPicSec from '../../../../components/long-term/register/sections/UploadPicSec'
import PartnerPrefSec from '../../../../components/long-term/register/sections/PartnerPrefSec'
import LongtermRegisterLayout from '../../../../components/long-term/register/layout/longTermRegisterLayout'
function index() {

    const router = useRouter()

    const { slug } = router.query

    const RenderSection = () => {
        switch (slug) {
            case "general":
                return <GenralSec />;
            case "address":
                return <AddressSec />;
            case "contact":
                return <ContactSec />;
            case "education":
                return <EducationSec />;
            case "professional":
                return <ProffSec />;
            case "hobby":
                return <HobbySec />;
            case "upload":
                return <UploadPicSec />;
            case "preferences":
                return <PartnerPrefSec />;
            default: return <h1>No Section</h1>
        }
    }
    return (
        <>
            <LongtermRegisterLayout slug={slug}>
                {RenderSection()}
            </LongtermRegisterLayout>
        </>
    )
}

export default index