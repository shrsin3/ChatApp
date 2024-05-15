import {AppBar, Avatar, Button, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {signOut} from "firebase/auth"
import {auth} from "../../firebase/firebase.js";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext.jsx";

function ChatListNavBar() {
    const nav = useNavigate();
    const {currUser} = useContext(AuthContext);

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    Chats
                </Typography>
                <Avatar
                    aria-label="account of current user"
                    color="inherit"
                    sx={{marginRight: 1}}
                >
                    <Typography>{currUser.displayName[0].toUpperCase()}</Typography>
                </Avatar>
                <Button variant={"contained"}
                        color={"secondary"} size={"small"} sx={{color: "white"}}
                onClick={()=>{signOut(auth);
                                    nav("/"); }}>Log Out</Button>
            </Toolbar>
        </AppBar>
    );
}

export default ChatListNavBar;