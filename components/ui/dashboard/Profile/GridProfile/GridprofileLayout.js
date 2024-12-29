import React from 'react'
import GridLikeButton from '../../../../../pages/_components/common/Buttons/LikeSections/GridLikeButton'
import { capitalizeFirstLetter } from '../../../../../utils/form/Captitelize'
import { motion } from 'framer-motion'
import ShortlistUser from '../../../../../pages/_components/common/Buttons/ShortlistUser'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from 'react-avatar'
import { useDarkMode } from '../../../../../ContextProvider/DarkModeContext'

function GridprofileLayout ({ user, index, showButton, children }) {
  const { darkMode } = useDarkMode()

  const ProfileName = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }

  const ListText = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px' /* 171.429% */
  }

  const ProfileCard = {
    borderRadius: '18px',
    background: darkMode ? '#242526' : '#FFF',
    boxShadow: '0px 0px 14px 0px rgba(0, 0, 0, 0.07)'
  }

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <>
      <motion.div
        variants={variants}
        initial='hidden'
        animate='visible'
        transition={{
          delay: index * 0.25,
          ease: 'easeInOut',
          duration: 0.5
        }}
        viewport={{ amount: 0 }}
        key={user.id}
        style={ProfileCard}
        className='inline-block lg:flex flex-col space-y-[10px]  2xl:w-[192px] w-[180px] xl:w-[170px] h-[327px] bg-[#FFF] rounded-[18px]'
      >
        <div className='mt-2 flex justify-between pt-[10px]'>
          <ul className='pl-[10px] flex space-x-[10px]'>
            <li
              className={`cursor-pointer hover:bg-[#F2F7FF] dark:hover:bg-[#383838]  items-center rounded-[17px] p-[5px] flex space-x-[10px] top-[-8px] relative left-[4px]`}
            >
              {children?.MatchScoreModal && children.MatchScoreModal()}
            </li>
          </ul>
          <ul className='pr-[10px] flex space-x-[30px]'>
            <li>
              <li>
                <ShortlistUser UserId={user?.id} />
              </li>
            </li>
            <li>{children?.ProfileMenu && children.ProfileMenu()}</li>
          </ul>
        </div>
        <div className='flex justify-center '>
          {user?.profilePic ? (
            <>
              <Link href={`/longterm/dashboard/${user?.id || user?._id}`}>
                <Image
                  quality={45}
                  loading='lazy'
                  alt='profile-pic'
                  width={100}
                  height={100}
                  style={{ objectFit: 'cover' }}
                  className='hover:opacity-70 duration-150 w-[100px] h-[100px] rounded-[50%]'
                  src={user?.profilePic}
                />
              </Link>
            </>
          ) : (
            <>
              <Link href={`/longterm/dashboard/${user?.id || user?._id}`}>
                <Avatar
                  name={user?.name}
                  round
                  size='100'
                  className='hover:opacity-70 duration-150'
                />
              </Link>
            </>
          )}
        </div>
        <div className='text-center'>
          <h1
            style={ProfileName}
            className=' text-[#000] dark:text-[#FFF] text-[18px]'
          >
            {capitalizeFirstLetter(user?.name)}
          </h1>
          <p
            style={ListText}
            className=' text-[#000] dark:text-[#FFF] text-[14px]'
          >
            {user?.age || 'NA'}, {user?.heigh || 'NA'}”
          </p>
          <p
            style={ListText}
            className=' text-[#000] dark:text-[#FFF] text-[14px]'
          >
            {capitalizeFirstLetter(user?.religion) || 'NA'},{' '}
            {capitalizeFirstLetter(user?.caste) || 'NA'}
          </p>
          <p
            style={ListText}
            className=' text-[#000] dark:text-[#FFF] text-[14px]'
          >
            {capitalizeFirstLetter(user?.maritalStatus) || 'NA'}
          </p>
        </div>
        {showButton ? (
          <GridLikeButton
            userId={user._id || user?.id}
            TheUsername={user?.name}
            userdata={user}
          />
        ) : (
          children?.ButtonUI && children.ButtonUI()
        )}
      </motion.div>
    </>
  )
}

export default GridprofileLayout
