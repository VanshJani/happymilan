import Image from 'next/image'

function RequestCard ({ user, onAccept, onReject, loadingdata }) {
  const Username = {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '21px'
  }

  const Activity = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '18px'
  }

  const ImagenotFound = {
    color: '#B3CBF1',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '6px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal'
  }

  return (
    <>
      <div
        id='sidebarScroll'
        className='w-[286px] flex flex-col space-y-[20px]'
      >
        <div id='sidebarScroll' className='flex pl-[6px]  items-center'>
          {user?.profilePic ? (
            <>
              <div>
                <Image
                  alt='Profile'
                  width={47}
                  height={47}
                  loading='lazy'
                  src={user?.profilePic}
                  className='rounded-[50px] h-[50px] w-[50px]'
                  style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </>
          ) : (
            <>
              <div
                className='bg-[#F8FBFF] grid place-items-center'
                style={{
                  height: '44px',
                  width: '44px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              >
                <Image
                  loading='lazy'
                  alt='not-found'
                  width={16}
                  height={16}
                  src={'/assests/dashboard/icon/NotFound-img.svg'}
                />
                <h1 className='relative top-[-5px]' style={ImagenotFound}>
                  No Image
                </h1>
              </div>
            </>
          )}

          <div className='pl-[20px]'>
            <h1 className='dark:text-[#FFF] text-[#000]' style={Username}>
              {user?.name}
            </h1>
            <h1 className='dark:text-[#FFF] text-[#000]' style={Activity}>
              Sent you a following request
            </h1>
          </div>
        </div>
        <div className='flex justify-center relative top-[-10px] left-[-20px]'>
          <div className='w-[100px] flex space-x-[20px]'>
            {/* <Image
            loading='lazy'
              alt="accept"
              className="cursor-pointer"
              onClick={onReject}
              width={28}
              height={28}
              src="/assests/dashboard/request/ignore-req-icon.svg"
            /> */}

            <div
              onClick={onReject}
              className='w-[28px] h-[28px] grid place-items-center'
              id='cancel-dating'
            >
              <svg
                className='cancel-icon-dt'
                width='10'
                height='10'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  id='Vector'
                  d='M1.85225 14.9045L0 13.0523L5.6 7.45225L0 1.85225L1.85225 0L7.45225 5.6L13.0522 0L14.9045 1.85225L9.3045 7.45225L14.9045 13.0523L13.0522 14.9045L7.45225 9.3045L1.85225 14.9045Z'
                />
              </svg>
            </div>

            {/* <Image
              loading='lazy'
              alt='reject'
              className='cursor-pointer'
              onClick={onAccept}
              width={28}
              height={28}
              src='/assests/dashboard/request/accept-req-icon.svg'
            /> */}
            <div
              onClick={onAccept}
              id='accept-request'
              className='rounded-full border-[1px] border-[#17C270] w-[28px] h-[28px] grid place-items-center'
            >
              <svg
                className='accept-icon-dt'
                width='14'
                height='10'
                viewBox='0 0 18 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M6.15225 13.4522L0 7.29998L1.8915 5.40873L6.15225 9.66948L15.313 0.508728L17.2045 2.39998L6.15225 13.4522Z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RequestCard
