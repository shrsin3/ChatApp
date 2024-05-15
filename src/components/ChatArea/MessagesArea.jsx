import {Box} from "@mui/material";
import Message from "./Message.jsx";

function MessagesArea() {
    return (
        <Box sx={{ padding: 2, backgroundColor:"grey", height: "93vh", overflowX: "scroll"}}>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
            <Message></Message>
        </Box>
    );
}

export default MessagesArea;