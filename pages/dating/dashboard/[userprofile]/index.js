import { useRouter } from 'next/router'
import React from 'react'
import DatingLayout from '../../../../components/Dating/layout/DatingLayout';
import Userprofile from './comp/Userprofile';

function index() {
    const router = useRouter();

    return (
        <DatingLayout Section="userprofile" HideSection={true}>
            <Userprofile />
        </DatingLayout>
    )
}

export default index