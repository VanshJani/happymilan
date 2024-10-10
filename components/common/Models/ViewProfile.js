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
                <button
                    className="z-10 absolute top-3 right-3 text-xl font-bold"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M1.26703 16L0 14.733L6.73297 8L0 1.26703L1.26703 0L8 6.73297L14.733 0L16 1.26703L9.26703 8L16 14.733L14.733 16L8 9.26703L1.26703 16Z" fill="black" />
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
};

export default ViewProfile;
