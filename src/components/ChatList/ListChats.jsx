import {Box, Typography} from "@mui/material";
import ChatListNavBar from "./ChatListNavBar.jsx";
import ChatListMessage from "./ChatListMessage.jsx";
import SearchBar from "./SearchBar.jsx";
import AllChats from "./AllChats.jsx";

function ListChats() {
    return (
        <Box sx={{height: "100vh", border: 2}}>
            <ChatListNavBar/>
            <SearchBar />
            <AllChats/>
        </Box>
    );
}

export default ListChats;