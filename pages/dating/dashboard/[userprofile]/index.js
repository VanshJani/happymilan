import { useRouter } from 'next/router'
import React from 'react'
import DatingLayout from '../../../../components/Dating/layout/DatingLayout';
import Userprofile from './comp/Userprofile';

function index() {
    const router = useRouter();

    return (
        <DatingLayout>
            <Userprofile />
        </DatingLayout>
    )
}

export default index