import React from 'react'
import DatingNavBar from '../component/NavBar'
import SideBar from '../component/SideBar'
import UserCard from '../component/UserCard'
import UnlockProfile from '../component/UnlockProfile'
import Layout from '../Layout'

function index() {
  return (
    <>
      <Layout>
        <UserCard />
      </Layout>
    </>
  )
}

export default index