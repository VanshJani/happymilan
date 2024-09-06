import React, { createContext, useEffect, useState } from 'react';


// Create the context  check--v2
const UserContext = createContext(); 

// Create the context provider component
const UsersConversationProvider = ({ children }) => {


    // Define state to store user data
    const [userData, setUserData] = useState(null);

    // Define functions to update user data
    const updateUser = (newData) => {
       
        setUserData(newData);

    };

    // Value object to provide to consuming components
    const value = {
        userData,
        updateUser,
    };

    // Return the context provider with its value
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Export the context and its provider
export { UserContext, UsersConversationProvider };
