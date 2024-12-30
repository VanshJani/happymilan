import Image from 'next/image'
import React, { useState } from 'react'
import { updateSpamUserdata } from '../../../../store/reducers/SpamReportReducer'
import { useDispatch, useSelector } from 'react-redux'
import { PostSpamUser } from '../../../../store/actions/SpamuserAction'
import { Box, Modal } from '@mui/material'

const Comp1 = ({ handleNextClick }) => {
  const dispatch = useDispatch()

  const TitleText = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }

  const Heading = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const ReportQuestions = [
    {
      id: 0,
      question: 'Inappropriate content',
      answers: [
        {
          id: 1,
          answer: 'The profile contains offensive or abusive language.'
        },
        {
          id: 2,
          answer: 'Sharing explicit or graphic content.'
        },
        {
          id: 3,
          answer: 'Posting hate speech or discriminatory remarks.'
        },
        {
          id: 4,
          answer: 'Violating platform guidelines (e.g., nudity, violence).'
        }
      ]
    },
    {
      id: 1,
      question: 'Harassment or bullying',
      answers: [
        {
          id: 1,
          answer: 'Sending threatening or abusive messages.'
        },
        {
          id: 2,
          answer: 'Targeting or insulting me or others repeatedly.'
        },
        {
          id: 3,
          answer: 'Encouraging harmful behavior or actions.'
        },
        {
          id: 4,
          answer: 'Making unwelcome advances or inappropriate comments.'
        }
      ]
    },
    {
      id: 2,
      question: 'Fake or misleading profile',
      answers: [
        {
          id: 1,
          answer: 'Impersonating another person or entity.'
        },
        {
          id: 2,
          answer: 'Using fake photos or information.'
        },
        {
          id: 3,
          answer: 'Creating a profile to deceive others.'
        },
        {
          id: 4,
          answer: 'Misrepresenting their identity or credentials.'
        }
      ]
    },
    {
      id: 3,
      question: 'Spam or promotional content',
      answers: [
        {
          id: 1,
          answer: 'Posting irrelevant or repeated promotional links.'
        },
        {
          id: 2,
          answer: 'Sending unsolicited messages or advertisements.'
        },
        {
          id: 3,
          answer: 'Flooding the platform with spam content.'
        }
      ]
    },
    {
      id: 4,
      question: 'Scams or fraudulent activity',
      answers: [
        {
          id: 1,
          answer: 'Attempting to obtain sensitive personal information.'
        },
        {
          id: 2,
          answer: 'Offering fake services or products.'
        },
        {
          id: 3,
          answer: 'Promoting get-rich-quick schemes or phishing attempts.'
        },
        {
          id: 4,
          answer: 'Requesting money under false pretenses.'
        }
      ]
    },
    {
      id: 5,
      question: 'Others'
    }
  ]

  // "\"reason\" must be one of [just-dont-like-it, its-spam, nudity-or-sexual-activity, bullying-or-harassment, scam-or-fraud]"
  const spamUserData = useSelector(state => state.Spamuser.SpamUserdata)

  const HandleSelectQuestion = item => {
    handleNextClick(item)
    dispatch(
      updateSpamUserdata({
        ...spamUserData,
        reason: item?.question
      })
    )
  }

  return (
    <>
      <div className='space-y-5 mt-5'>
        <div className='text-center space-y-[10px]'>
          <p style={TitleText} className='text-[16px]'>
            Why are you reporting this?
          </p>
          <p style={Heading} className='text-[14px] text-[#8F8F8F]'>
            Your identity will remain anonymous to the reported user.
          </p>
        </div>

        <div className='flex justify-center'>
          <ul className='w-[95%]'>
            {ReportQuestions?.map((item, index) => {
              return (
                <li
                  key={index}
                  className=' border-t-[1px] border-t-[#EDEDED] border-b-[1px] border-b-[#EDEDED]'
                >
                  <div className='w-full pt-4 pb-4'>
                    <ul className='flex justify-between w-full'>
                      <li
                        onClick={() => HandleSelectQuestion(item)}
                        style={Heading}
                        className='text-[16px] hover:opacity-75 duration-200 cursor-pointer'
                      >
                        {item?.question}
                      </li>
                      <li
                        onClick={() => HandleSelectQuestion(item)}
                        className='hover:bg-[#EFF5FF] w-[24px] h-[24px] rounded-full cursor-pointer duration-200'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            d='M13.2924 12L8.69238 7.4L9.40013 6.69225L14.7079 12L9.40013 17.3077L8.69238 16.6L13.2924 12Z'
                            fill='#5F6368'
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

const Comp2 = ({ handleNextClick, SelectedQuestion }) => {
  const TitleText = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }

  const Heading = {
    color: '#000',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const dispatch = useDispatch()

  const spamUserData = useSelector(state => state.Spamuser.SpamUserdata)

  const ReportQuestions = [
    {
      id: 0,
      question: 'Inappropriate content',
      answers: [
        {
          id: 1,
          answer: 'The profile contains offensive or abusive language.'
        },
        {
          id: 2,
          answer: 'Sharing explicit or graphic content.'
        },
        {
          id: 3,
          answer: 'Posting hate speech or discriminatory remarks.'
        },
        {
          id: 4,
          answer: 'Violating platform guidelines (e.g., nudity, violence).'
        }
      ]
    },
    {
      id: 1,
      question: 'Harassment or bullying',
      answers: [
        {
          id: 1,
          answer: 'Sending threatening or abusive messages.'
        },
        {
          id: 2,
          answer: 'Targeting or insulting me or others repeatedly.'
        },
        {
          id: 3,
          answer: 'Encouraging harmful behavior or actions.'
        },
        {
          id: 4,
          answer: 'Making unwelcome advances or inappropriate comments.'
        }
      ]
    },
    {
      id: 2,
      question: 'Fake or misleading profile',
      answers: [
        {
          id: 1,
          answer: 'Impersonating another person or entity.'
        },
        {
          id: 2,
          answer: 'Using fake photos or information.'
        },
        {
          id: 3,
          answer: 'Creating a profile to deceive others.'
        },
        {
          id: 4,
          answer: 'Misrepresenting their identity or credentials.'
        }
      ]
    },
    {
      id: 3,
      question: 'Spam or promotional content',
      answers: [
        {
          id: 1,
          answer: 'Posting irrelevant or repeated promotional links.'
        },
        {
          id: 2,
          answer: 'Sending unsolicited messages or advertisements.'
        },
        {
          id: 3,
          answer: 'Flooding the platform with spam content.'
        }
      ]
    },
    {
      id: 4,
      question: 'Scams or fraudulent activity',
      answers: [
        {
          id: 1,
          answer: 'Attempting to obtain sensitive personal information.'
        },
        {
          id: 2,
          answer: 'Offering fake services or products.'
        },
        {
          id: 3,
          answer: 'Promoting get-rich-quick schemes or phishing attempts.'
        },
        {
          id: 4,
          answer: 'Requesting money under false pretenses.'
        }
      ]
    },
    {
      id: 5,
      question: 'Others',
      answers: [
        {
          id: 1,
          answer: 'Otheroption'
        }
      ]
    }
  ]

  const handleChangeInput = e => {
    const { value } = e.target
    dispatch(
      updateSpamUserdata({
        ...spamUserData,
        remark: value
      })
    )
  }

  const HandleSelectAnswer = item => {
    handleNextClick(item)
    dispatch(
      updateSpamUserdata({
        ...spamUserData,
        remark: item?.answer
      })
    )
  }

  return (
    <>
      <div className='space-y-5 mt-5'>
        <div className='text-center'>
          <p style={TitleText} className='text-[16px]'>
            Hows is it {spamUserData?.reason}?
          </p>
        </div>
        <div className='flex justify-center'>
          <ul className='w-[95%]'>
            {ReportQuestions?.[SelectedQuestion]?.answers.map((item, index) => {
              return (
                <>
                  {item?.answer != 'Otheroption' ? (
                    <li
                      key={index}
                      className=' border-t-[1px] border-t-[#EDEDED] border-b-[1px] border-b-[#EDEDED]'
                    >
                      <div className='w-full pt-4 pb-4'>
                        <ul className='flex justify-between w-full'>
                          <li
                            onClick={() => HandleSelectAnswer(item)}
                            style={Heading}
                            className='text-[16px] hover:opacity-75 duration-200 cursor-pointer'
                          >
                            {item?.answer}
                          </li>
                          <li
                            onClick={() => HandleSelectAnswer(item)}
                            className='hover:bg-[#EFF5FF] w-[24px] h-[24px] rounded-full cursor-pointer duration-200'
                          >
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                            >
                              <path
                                d='M13.2924 12L8.69238 7.4L9.40013 6.69225L14.7079 12L9.40013 17.3077L8.69238 16.6L13.2924 12Z'
                                fill='#5F6368'
                              />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </li>
                  ) : (
                    <li className='w-full flex justify-center'>
                      <ul className='w-full space-y-2'>
                        <li className='text-center'>
                          <input
                            className='w-[95%] border-[1px] border-[#000] h-[40px] rounded-[10px] pl-2'
                            placeholder='Explain your reason...'
                            onChange={handleChangeInput}
                          />
                        </li>
                        <li className='text-center'>
                          <button
                            id='grad-button'
                            className='w-[140px] h-[45px] rounded-[100px]'
                            onClick={() => handleNextClick()}
                          >
                            Continue
                          </button>
                        </li>
                      </ul>
                    </li>
                  )}
                </>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

const Comp3 = ({ handleNextClick }) => {
  const TitleText = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal'
  }

  const ListText = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }
  return (
    <>
      <div className='w-full grid place-items-center'>
        <div className='w-full'>
          <ul className='w-full space-y-8 text-center'>
            <li>
              <p style={TitleText} className='text-[16px]'>
                Thank you for your report.
              </p>
            </li>
            <li>
              <p style={ListText} className='text-[14px]'>
                We’ll review it soon to help keep our community safe.
              </p>
            </li>
            <li>
              <button
                id='grad-button'
                className='w-[131px] h-[50px] rounded-[100px]'
                onClick={handleNextClick}
              >
                Okay
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

function ReportModal ({ isOpen, onClose }) {
  if (!isOpen) return null

  const spamUserData = useSelector(state => state.Spamuser.SpamUserdata)
  const dispatch = useDispatch()

  const [iscurrentPage, SetiscurrentPage] = useState(0)

  const [SelectedQuestion, SetSelectedQuestion] = useState()

  const handleNextClick = item => {
    SetSelectedQuestion(item?.id)
    if (iscurrentPage >= 2) {
      onClose()
      dispatch(PostSpamUser(spamUserData))
    } else {
      SetiscurrentPage(iscurrentPage + 1)
    }
  }

  const HandlePrev = () => {
    SetiscurrentPage(iscurrentPage - 1)
  }

  const renderTabContent = () => {
    switch (iscurrentPage) {
      case 0:
        return <Comp1 handleNextClick={handleNextClick} onClose={onClose} />
      case 1:
        return (
          <Comp2
            SelectedQuestion={SelectedQuestion}
            handleNextClick={handleNextClick}
            onClose={onClose}
          />
        )
      case 2:
        return <Comp3 handleNextClick={handleNextClick} onClose={onClose} />
      default:
        ''
    }
  }

  const Heading = {
    color: '#000',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  return (
    <>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        MenuListProps={{
          'aria-labelledby': 'fade-button'
        }}
        sx={{ display: 'grid', placeItems: 'center' }}
      >
        <Box sx={{ outline: 'none' }}>
          <div
            className={`relative  bg-white rounded-lg shadow-lg p-6 ${
              iscurrentPage > 1 ? 'w-[343px]' : 'w-[588px]'
            } md:h-[80%]`}
          >
            <div className={`${iscurrentPage === 2 ? 'hidden' : ''}`}>
              <div className='flex justify-between items-center'>
                <div>
                  <div
                    onClick={HandlePrev}
                    className={`${
                      iscurrentPage === 1 ? '' : 'hidden'
                    } hover:bg-[#EFF5FF]  w-[30px] h-[30px] rounded-full grid place-items-center`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='30'
                      height='30'
                      viewBox='0 0 34 34'
                      fill='none'
                    >
                      <path
                        d='M9.80513 17.7083L18.0109 25.9141L17.0002 26.9167L7.0835 17L17.0002 7.08333L18.0109 8.08591L9.80513 16.2917H26.9168V17.7083H9.80513Z'
                        fill='black'
                      />
                    </svg>
                  </div>
                </div>
                <div className='text-center w-full'>
                  <h1 style={Heading}>Report</h1>
                </div>
                <div>
                  <div className='hover:bg-[#EFF5FF] w-[30px] h-[30px] rounded-full grid place-items-center'>
                    <Image
                      width={24}
                      height={24}
                      alt='close-icon'
                      className='cursor-pointer'
                      onClick={onClose}
                      loading='lazy'
                      src='/assests/social/close.svg'
                    />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '30px'
                }}
              >
                <div
                  style={{
                    width: '95%',
                    height: '1px',
                    backgroundColor: '#EDEDED'
                  }}
                ></div>
              </div>
            </div>

            {renderTabContent()}
          </div>
        </Box>
      </Modal>
    </>
  )
}

// export default ReportModal;
export default ReportModal
