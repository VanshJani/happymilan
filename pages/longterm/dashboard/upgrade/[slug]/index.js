import React from 'react'
import UpgradePage from '../comp/UpgradePage'
import { useRouter } from 'next/router'
import NavBar from '../../../../_components/layout/NavBar'

function index() {

  return (
    <>
      <NavBar />
      <div>
        <UpgradePage />
      </div>
    </>
  )
}

export default index