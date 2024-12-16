import React, { useState } from 'react'
import CustomModal from '../../components/common/Models/CustomModals'
import { Box, Button } from '@mui/material'

function index () {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <button className='h-[30px] w-[200px]' onClick={handleOpen}>
        Open
      </button>
      <CustomModal
        open={open}
        onClose={handleClose}
        title='Reusable Modal Example'
      >
        <p>This is the content inside the modal.</p>
        <p>You can pass any React component as children.</p>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
          <Button variant='contained' color='error' onClick={handleClose}>
            Close
          </Button>
        </Box>
      </CustomModal>
    </>
  )
}

export default index
