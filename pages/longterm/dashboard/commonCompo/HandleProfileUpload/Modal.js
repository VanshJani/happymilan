import { Box, Modal } from "@mui/material";
import ImageCropper from "../../../../sample/components/ImageCropper";

const ProfileModal = ({ handleClose, handleOpen, setOpenProfileModal, openProfileModal, setModalOpen, updateAvatar, closeModal }) => {


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '38%',
        height: "550px",
        outline: "none",
        bgcolor: 'background.paper',
        borderRadius: "18px",
        boxShadow: 24,
        p: 4,
    };


    return (



        <Modal
            open={openProfileModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            // Apply border radius to Dialog
        >
            <Box sx={style} >
                <ImageCropper
                    updateAvatar={updateAvatar}
                    closeModal={closeModal}
                    setModalOpen={setModalOpen}
                    handleClose={handleClose}
                />
            </Box>
        </Modal >
    );
};
export default ProfileModal;
