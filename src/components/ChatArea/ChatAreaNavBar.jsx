import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle.js";

function ChatAreaNavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton aria-label="account of current user"
                            color="inherit">
                    <AccountCircleIcon fontSize="large"/>
                </IconButton>
                <Typography variant={"h6"}>Sample User</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default ChatAreaNavBar;