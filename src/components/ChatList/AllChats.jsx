import ChatListMessage from "./ChatListMessage.jsx";
import {Box} from "@mui/material";

function AllChats() {
    return (
        <Box sx={{height: "75%", width: "100%", overflowX: "scroll"}}>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
            <ChatListMessage/>
        </Box>
    );
}

export default AllChats;