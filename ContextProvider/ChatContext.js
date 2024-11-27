import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [innerDrawerOpen, setInnerDrawerOpen] = useState(false);
    const [ChatUser, SetChatUser] = useState({
        userName: "",
        id: ""
    });

    const toggleInnerDrawer = (res) => {
        SetChatUser(res);
        setInnerDrawerOpen(!innerDrawerOpen);
    };

    return (
        <UserContext.Provider
            value={{
                innerDrawerOpen,
                toggleInnerDrawer,
                ChatUser,
                setInnerDrawerOpen,
                SetChatUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
