import React, { useContext } from "react";
// import { UserContext } from "./UserContext";
import { Drawer, Box, Stack } from "@mui/material";
import Chats from "../Chat/UIChat";
import UIConversation from "../Chat/UIConversation";
import { UserContext } from "../../../../ContextProvider/ChatContext";

const ChatDrawer = () => {
    const { innerDrawerOpen, toggleInnerDrawer, ChatUser } = useContext(UserContext);

    return (
        <Drawer anchor="right" open={innerDrawerOpen} onClose={() => toggleInnerDrawer(null)}>
            <Stack direction="row" sx={{ width: "100%" }}>
                <Box sx={{ width: "300px", backgroundColor: "#FFF" }}>
                    {/* Chat Sidebar */}
                    <Chats toggleInnerDrawer={toggleInnerDrawer}  />
                </Box>
                <Box
                    sx={{
                        width: "calc(100% - 300px)",
                        backgroundColor: "#F0F4FA",
                    }}
                >
                    {/* Chat Room */}
                    <UIConversation UserDetails={ChatUser} />
                </Box>
            </Stack>
        </Drawer>
    );
};

export default ChatDrawer;
