import React, { useEffect, useState } from 'react'
import { useDarkMode } from '../../../ContextProvider/DarkModeContext'
import { useDispatch, useSelector } from 'react-redux'
import { MissingFields } from '../../../store/actions/UserSettingAction'
import { useRouter } from 'next/router'
import { useSwipeable } from 'react-swipeable'

function ProfileComplete () {
  const { darkMode, toggleDarkMode } = useDarkMode()

  const Text3 = {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal'
  }
  const Box = {
    borderRadius: '18px',
    boxShadow: '0px 0px 14px 0px rgba(0, 0, 0, 0.07)'
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(MissingFields())
  }, [])

  const { data, status, loading, error } = useSelector(
    state => state.userseting.MissingFields
  )

  const router = useRouter()

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSwipe = direction => {
    if (direction === 'LEFT') {
      setCurrentIndex(prevIndex =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      )
    } else if (direction === 'RIGHT') {
      setCurrentIndex(prevIndex =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      )
    }
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true // Enables swipe support on desktop
  })

  const MissingFieldsUI = ({ res }) => {
    return (
      <>
        <div className='flex flex-col items-center justify-center pt-[0px] space-y-[10px]'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='42'
              height='35'
              viewBox='0 0 42 35'
              fill='none'
            >
              <path
                d='M20.7859 34.6667L6.82012 27.0228V15.6894L0 12.0001L20.7859 0.666748L41.6359 12.0001V26.9142H39.2649V13.3866L34.7516 15.6894V27.0228L20.7859 34.6667ZM20.7859 20.6448L36.6405 12.0001L20.7859 3.47191L4.99548 12.0001L20.7859 20.6448ZM20.7859 31.9781L32.3805 25.6041V17.1281L20.7859 23.3334L9.19122 17.0438V25.6041L20.7859 31.9781Z'
                fill='url(#paint0_linear_1217_1619)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_1217_1619'
                  x1='-1.49655e-06'
                  y1='-7'
                  x2='38.5'
                  y2='40'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#0F52BA' />
                  <stop offset='1' stopColor='#8225AF' />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='h-[50px]'>
            <p
              style={Text3}
              className='dark:text-[#FFF] 2xl:pb-[10px] xl:pb-[15px] text-center text-[14px] w-[207px] select-none'
            >
              Add your &nbsp;
              {res?.category}&nbsp; for Better Matches
            </p>
          </div>

          <div className='flex justify-center gap-2 mt-4'>
            {data?.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full  ${
                  index === currentIndex
                    ? 'bg-custom-gradient'
                    : 'bg-gray-300 cursor-pointer'
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>

          <div className='hover:bg-[#F3F8FF] relative top-[19px] cursor-pointer text-center h-[50px] w-[300px] border-t-[#EAEAEA] border-t-[1px] grid place-items-center '>
            <div
              onClick={() =>
                router.push({
                  pathname: res?.redirect,
                  query: { from: 'dashboard' }
                })
              }
              className='w-full h-full grid place-items-center relative top-0'
            >
              <p>Add Details</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (loading) {
    return null
  }
  return (
    <>
      {status?.message != 'All required fields are filled' && (
        <div
          className='flex justify-center overflow-hidden items-center dark:bg-[#242526] 2xl:mt-[-30px] xl:mt-[-25px] h-[219px] w-[300px] bg-white border rounded-[18px] shadow-md'
          style={Box}
        >
          <div className='w-full h-full grid place-items-center'>
            <div className='flex transition-transform duration-500'>
              <div
                {...handlers}
                className='flex justify-center w-[300px] 2xl:w-[300px] xl:w-[280px] h-[219px] '
              >
                <MissingFieldsUI
                  res={data?.[currentIndex]}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  data={data}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileComplete
