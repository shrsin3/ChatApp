import {Box, Stack} from "@mui/material";
import ChatAreaNavBar from "./ChatAreaNavBar.jsx";
import MessagesArea from "./MessagesArea.jsx";
import MessageInput from "./MessageInput.jsx";


function ChatArea() {
    return (
        <Stack sx={{height: "100vh", width: "100%", border: "2px solid rgba(255, 0, 0, 0)"}}>
            <ChatAreaNavBar></ChatAreaNavBar>
            <MessagesArea/>
            <MessageInput/>
        </Stack>
    );
}

export default ChatArea;