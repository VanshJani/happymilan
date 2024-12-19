import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
const ProfileComplete = dynamic(
  () => import('../../../../pages/_components/Container/ProfileComplete'),
  { ssr: false }
)
const MoreSuggestion = dynamic(
  () => import('../../../../pages/_components/Container/MoreSuggestion'),
  { ssr: false }
)

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

function SidePanel () {
  return (
    <>
      <motion.div
        variants={variants}
        initial='hidden'
        animate='visible'
        transition={{
          delay: 0.25,
          ease: 'easeInOut',
          duration: 0.5
        }}
        viewport={{ amount: 0 }}
        className='hidden absolute 2xl:top-[250px] xl:top-[245px] right-10 2xl:flex xl:flex flex-col space-y-[30px] justify-center items-end w-full 2xl:w-[320px] xl:w-[300px]'
      >
        <ProfileComplete />
        <MoreSuggestion />
      </motion.div>
    </>
  )
}

export default SidePanel
