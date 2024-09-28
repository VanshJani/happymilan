import React from 'react'
import GeneralSection from './Sections/GeneralSection'
import Layout from '../../Layout'

function index() {
    return (
        <>
            <Layout HideSection={true}>
                <GeneralSection />
            </Layout>
        </>
    )
}

export default index