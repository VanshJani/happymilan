import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import { Box, styled } from '@mui/material'
import { useDarkMode } from '../../../ContextProvider/DarkModeContext'

// 0 - grid section
// 1 - 3 list section

const ProfileSkeletonLoader = ({ ViewType }) => {
  const { darkMode, toggleDarkMode } = useDarkMode()

  const ProfileCardSkeleton = styled(Box)(({ theme }) => ({
    width: '180px',
    height: '327px',
    backgroundColor: darkMode ? '#242526' : '#FFF',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px'
  }))

  const SkeletonWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
    '& > div': {
      width: '40px',
      height: '40px',
      borderRadius: '50%'
    }
  }))

  const arrayLength = ViewType === 0 ? 6 : 3

  return (
    <>
      {[...Array(arrayLength)].map((_, index) => (
        <ProfileCardSkeleton key={index}>
          <Skeleton variant='text' width={120} height={30} />
          <Skeleton variant='circular' width={102} height={102} />
          <Skeleton variant='text' width={110} height={24} />
          <Skeleton variant='text' width={90} height={20} />
          <Skeleton variant='text' width={90} height={20} />
          <SkeletonWrapper>
            <Skeleton variant='circular' />
            <Skeleton variant='circular' />
            <Skeleton variant='circular' />
          </SkeletonWrapper>
        </ProfileCardSkeleton>
      ))}
    </>
  )
}

export default ProfileSkeletonLoader
