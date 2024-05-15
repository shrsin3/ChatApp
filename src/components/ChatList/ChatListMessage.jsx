import {Box, Grid, IconButton, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle.js";

function ChatListMessage() {
    return (
        <Grid container spacing={0} sx={{width: "100%", borderBottom: 1,
        borderColor: "grey", p: 1}}>
            <Grid item xs={2}>
            <IconButton
                aria-label="account of current user"
                color="inherit"
            >
                <AccountCircleIcon fontSize="large"/>
            </IconButton>
            </Grid>
            <Grid item xs={8}>
                <Typography variant={"subtitle1"}
                            align={"left"}
                            fontWeight={"bolder"}>Sample User 1</Typography>
                <Typography variant={"body2"} align={"left"}>Text Message Sent by the user</Typography>
            </Grid>
        </Grid>
    );
}

export default ChatListMessage;