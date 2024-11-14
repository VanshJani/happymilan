// components/ViewProfile.js

import { useEffect } from "react";

const ViewProfile = ({ Wsize, Hsize, isOpen, onClose, children }) => {
    // Close modal on clicking outside of it
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (event.target.id === "custom-modal") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("click", handleOutsideClick);
        } else {
            window.removeEventListener("click", handleOutsideClick);
        }

        return () => {
            window.removeEventListener("click", handleOutsideClick);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            id="custom-modal"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            style={{ zIndex: 9999 }}
        >
            <div
                style={{ borderRadius: "10px" }}
                className={`bg-white  rounded shadow-lg w-[${Wsize}px] h-[${Hsize}px] relative`}
            >
                <div
                    className="z-10 absolute top-3 right-3 text-xl font-bold w-8 h-8 cursor-pointer hover:bg-[#F2F7FF] rounded-full grid place-items-center"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1.26703 16L0 14.733L6.73297 8L0 1.26703L1.26703 0L8 6.73297L14.733 0L16 1.26703L9.26703 8L16 14.733L14.733 16L8 9.26703L1.26703 16Z" fill="black" />
                    </svg>
                </div>
                {children}
            </div>
        </div>
    );
};

export default ViewProfile;
