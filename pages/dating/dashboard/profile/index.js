import React from 'react'
import GeneralSection from './Sections/GeneralSection'
import DatingLayout from '../../../../components/Dating/layout/DatingLayout'

function index() {
    return (
        <>
            <DatingLayout Section={"profile"} HideSection={true}>
                <GeneralSection />
            </DatingLayout>
        </>
    )
}

export default index