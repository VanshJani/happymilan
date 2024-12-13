import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Cancelfriendrequest, Sentblockrequest } from "../../../../store/actions/UsersAction";
import { getCookie } from "cookies-next";

function BlockModal({ isOpen, onClose, data, title }) {
  if (!isOpen) return null;


  const LogoutModalText = {
    fontFamily: "Poppins",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "30px"
  }

  const dispatch = useDispatch();

  const CurrentUser = getCookie("userid")

  const HandleBlockUser = (e) => {
    // const IsUser = data?.friend?.id === CurrentUser;

    // currUser: accepteddata?.id,
    // OtherUser: accepteddata?.lastInitiatorUser

    if (title == "Unblock") {
      if (e.target.name == 1) {
        onClose();
        dispatch(Sentblockrequest({ RequestID: data?.id, InitiatorUser: data?.lastInitiatorUser, status: "accepted" }))
      } else {
        onClose();
      }
    } else {
      if (e.target.name == 1) {

        onClose();
        console.log("Dataaaaa:", data)
        // dispatch(Sentblockrequest({ RequestID: data?.currUser, InitiatorUser: data?.OtherUser, status: "blocked" }))
        dispatch(Cancelfriendrequest(data?.currUser, data?.OtherUser, data?.status))


      } else {
        onClose();
      }
    }

  }

  return (
    <>

      <Dialog
        open={isOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className=""
        sx={{ '& .MuiDialog-paper': { borderRadius: '23px' } }}

      >

        <DialogContent className="text-center w-[500px]  mt-[20px]">
          <div id="alert-dialog-description">
            <p style={LogoutModalText}> Are you sure you want to Block This User?</p>
          </div>
        </DialogContent>
        <div className="flex justify-evenly p-[20px] mb-[20px]">
          <div className="relative right-[-10px]">
            <button onClick={HandleBlockUser} name={1} id="grad-button" className="rounded-[23px] w-[122px] h-[50px]">Yes</button>
          </div>
          <div className="relative left-[-10px]">
            <button onClick={HandleBlockUser} name={0} className="hover:bg-[#EFF5FF] duration-200 border-[black] border-[1px] rounded-[23px] w-[122px] h-[50px]">No</button>
          </div>
        </div>
      </Dialog>


    </>
  );
}

export default BlockModal;