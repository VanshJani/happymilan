import React, { useContext } from 'react'
import { UserContext } from '../../../../ContextProvider/ChatContext';

function index() {

    const { toggleInnerDrawer } = useContext(UserContext);

    const openDrawer = () => {
        const user = { userName: "John Doe", id: "123" };
        toggleInnerDrawer(user);
    };


    return (
        <>
            <div>
                <button onClick={openDrawer} className='w-[150px] h-[40px] bg-[#000] text-[white]'>Open Chat</button>
            </div>
        </>
    )
}

export default index