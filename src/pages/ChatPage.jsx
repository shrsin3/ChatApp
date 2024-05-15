import {Box, Grid,} from "@mui/material";
import ListChats from "../components/ChatList/ListChats.jsx";
import ChatArea from "../components/ChatArea/ChatArea.jsx";

function ChatPage() {
    return (
        <Box sx={{ width: "100vw", height: "100vh", margin: 0 }}>
        <Grid container spacing={0} sx={{}}>
            <Grid item  xs={12} md={4}>
                <ListChats/>
            </Grid>
            <Grid item  xs={12} md={8}>
                <ChatArea/>
            </Grid>
        </Grid>
        </Box>
    );
}

export default ChatPage;