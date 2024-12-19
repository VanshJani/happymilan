import { useState, useCallback, useMemo } from 'react'
import { getCookie } from 'cookies-next'
import useUserActivity from '../../utils/hooks/UserActivity'
import NavBar from '../_components/layout/NavBar'
import SideBar from '../_components/layout/SideBar'
import dynamic from 'next/dynamic'
import axios from 'axios'
import ProfileImagesViewer from '../../components/common/Models/ProfileImagesViewer'
import { useSelector } from 'react-redux'

// Dynamically import components
const UserStory = dynamic(() => import('../_components/Container/UserStory'), {
  ssr: false
})
const SearchUsers = dynamic(
  () => import('./dashboard/commonCompo/SearchParams/SearcheUsers'),
  { ssr: false }
)
const SidePanel = dynamic(
  () => import('../../components/long-term/common/SideSections/SidePanel'),
  { ssr: false }
)
const Footer = dynamic(() => import('../_components/layout/Footer'), {
  ssr: false
})

const Layout = ({ Section, Show, children }) => {
  useUserActivity()

  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // Memoize the token to prevent unnecessary API calls
  const token = useMemo(() => getCookie('authtoken'), [])

  // Handle search functionality
  const handleSearch = useCallback(
    async searchTerm => {
      setSearchTerm(searchTerm)
      try {
        const response = await axios.get(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/v1/user/user/userUniqueId/${searchTerm?.toLowerCase()}`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        setSearchResults(response?.data.data)
      } catch (error) {
        console.error('Error fetching search results:', error)
      }
    },
    [token]
  )

  const { data, status, totalLikes } = useSelector(state => state.myprofile)

  const { user, loading } = useSelector(state => state.userById)

  const RenderComp = useMemo(() => {
    if (Section === 'profile' && data) {
      return (
        <div className='hidden absolute 2xl:top-20 xl:top-20 right-10  xl:flex 2xl:flex flex-col  justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>
          <div className='absolute right-10 hidden xl:block 2xl:block'>
            <ProfileImagesViewer
              Privacy={false}
              Section={'long-term'}
              details={data}
            />
          </div>
        </div>
      )
    }
    if (Section === 'userprofile' && user) {
      return (
        <div className='hidden absolute 2xl:top-20 xl:top-20 right-10  xl:flex 2xl:flex flex-col  justify-center items-end w-full 2xl:w-[380px] xl:w-[350px]'>
          <div className='absolute right-10 hidden xl:block 2xl:block'>
            <ProfileImagesViewer
              Privacy={true}
              Section={'long-term'}
              details={user}
            />
          </div>
        </div>
      )
    }
    return <SidePanel Section={Section} />
  }, [Section, data, user])

  const Text6 = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px'
  }

  return (
    <>
      <NavBar handleSearch={handleSearch} />
      <SideBar />
      <div
        id='main-centerlized-content'
        className='flex justify-center flex-col'
      >
        <div
          id='first-child'
          className='pl-[0px] lg:pl-[240px] 2xl:pl-[280px] xl:pl-[240px] flex  mt-[100px]'
        >
          <div className='h-full'>
            <div
              id='story-centerlized-content'
              className='h-[60px] pl-[15px] md:pl-[15px] lg:pl-[10px] 2xl:pl-0 xl:pl-0'
            >
              <UserStory />
            </div>
            {/* Search and Content Display */}
            {searchTerm === '' ? (
              <>{children}</>
            ) : (
              <div>
                {searchResults.length === 0 ? (
                  <div className='w-[48vw] h-screen grid place-items-center relative left-[-55px]'>
                    <div className=''>
                      <p>No search results</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className='p-[5px] relative 2xl:left-[5px] lg:left-[10px] xl:left-[5px] top-[10px]'>
                      <span style={Text6}>Search Result</span>
                    </h1>
                    <div className='relative left-[-45px] translate-x-[0px] top-5'>
                      <SearchUsers searchResults={searchResults} />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Side Panel */}

            {RenderComp}
          </div>
        </div>
      </div>
      {/* ) : (
                <>
                    {children}
                </>
            )} */}

      {/* Footer Section */}
      <div className={`${Show ? '' : 'hidden'} pt-[100px]`}>
        <Footer />
      </div>
    </>
  )
}

export default Layout
