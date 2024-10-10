// pages/index.js

import { useState } from "react";
// import CustomModal from "../components/CustomModal";
import ViewProfile from "../../../components/common/Models/ViewProfile";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <button
                onClick={openModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
                Open Modal
            </button>

            <ViewProfile Wsize={500} Hsize={500} isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-center text-xl">Custom Modal Content</h2>
                <p className="text-center mt-4">
                    This is your custom modal with a width of 500px and a height of 500px.
                </p>
            </ViewProfile>
        </div>
    );
};

export default Home;
