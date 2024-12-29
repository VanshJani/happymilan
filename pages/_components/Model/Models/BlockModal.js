import { Dialog, DialogContent } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Cancelfriendrequest,
  Sentblockrequest
} from '../../../../store/actions/UsersAction'
import { getCookie } from 'cookies-next'

function BlockModal ({ isOpen, onClose, data, title, blockprofile }) {
  if (!isOpen) return null

  const LogoutModalText = {
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '30px'
  }

  const Urlmodaltext = {
    color: '#000',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal'
  }

  const [openURLModal, setOpenURLModal] = React.useState(false)
  const [ModalText, SetModalText] = useState(
    blockprofile ? 'Unblock User' : 'BlockUser'
  )

  const dispatch = useDispatch()

  const HandleBlockUser = e => {
    if (title == 'Unblock') {
      if (e.target.name == 1) {
        onClose()
        dispatch(
          Cancelfriendrequest(
            data?._id,
            data?.friend?.id || data?.friend?._id,
            'removed'
          )
        )

        setOpenURLModal(true)
        setTimeout(() => {
          setOpenURLModal(false)
        }, 1000)
      } else {
        onClose()
      }
    } else {
      if (e.target.name == 1) {
        onClose()
        console.log('Dataaaaa:', data)
        setOpenURLModal(true)
        const LoginUser = getCookie('userid')
        dispatch(
          Sentblockrequest({
            // RequestID: data?.currUser,
            // InitiatorUser: data?._id || data?.id,
            friend: data?.currUser,
            user: LoginUser
            // status: 'blocked'
          })
        )
        setTimeout(() => {
          setOpenURLModal(false)
        }, 1000)
      } else {
        onClose()
      }
    }
  }

  return (
    <>
      <Dialog
        open={isOpen}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        className=''
        sx={{ '& .MuiDialog-paper': { borderRadius: '23px' } }}
      >
        <DialogContent className='text-center w-[500px]  mt-[20px]'>
          <div id='alert-dialog-description'>
            <p style={LogoutModalText}>
              {' '}
              Are you sure you want to Block This User?
            </p>
          </div>
        </DialogContent>
        <div className='flex justify-evenly p-[20px] mb-[20px]'>
          <div className='relative right-[-10px]'>
            <button
              onClick={HandleBlockUser}
              name={1}
              id='grad-button'
              className='rounded-[23px] w-[122px] h-[50px]'
            >
              Yes
            </button>
          </div>
          <div className='relative left-[-10px]'>
            <button
              onClick={HandleBlockUser}
              name={0}
              className='hover:bg-[#EFF5FF] duration-200 border-[black] border-[1px] rounded-[23px] w-[122px] h-[50px]'
            >
              No
            </button>
          </div>
        </div>
      </Dialog>

      <React.Fragment>
        <Dialog
          open={openURLModal}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
          PaperProps={{
            style: {
              backgroundColor: 'transparent', // or 'none' if you prefer
              boxShadow: 'none'
            }
          }}
          BackdropProps={{
            style: { opacity: 0, backgroundColor: 'none', boxShadow: 'none' }
          }}
        >
          <div
            style={{ padding: '17px 19px 17px 20px' }}
            className='bg-[#333333] w-[249px] rounded-[100px] text-center grid place-items-center'
          >
            <div className='text-[14px]' style={Urlmodaltext}>
              <spa className='text-[#fff]'> {ModalText}</spa>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
    </>
  )
}

export default BlockModal
