import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const CustomModal = ({ open, onClose, title, children, actions, Size , Rounded }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: Size || 0,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: Rounded ? '23px' : '8px'
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby='custom-modal-title'
      aria-describedby='custom-modal-description'
    >
      <Box sx={style}>
        {/* Title Section */}
        {title && (
          <Typography
            id='custom-modal-title'
            variant='h6'
            component='h2'
            gutterBottom
          >
            {title}
          </Typography>
        )}

        {/* Content Section */}
        <Box id='custom-modal-description' sx={{ mb: 2 }}>
          {children}
        </Box>

        {/* Actions Section */}
      </Box>
    </Modal>
  )
}

export default CustomModal
