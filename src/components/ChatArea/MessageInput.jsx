import {Box, Grid, IconButton, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function MessageInput() {
    return (
        <Grid container sx={{ display: "flex",
            height: "10vh", backgroundColor: "white", alignItems: "center", p: "0px 10px"}}>
            <Grid item xs={11}>
            <TextField variant={"standard"} fullWidth={true} label={"Enter your Message Here"}></TextField>
            </Grid>
            <Grid item xs={1}>
            <IconButton>
                <SendIcon fontSize={"large"} color={"primary"} sx={{p: 1}}></SendIcon>
            </IconButton>
            </Grid>
        </Grid>
    );
}

export default MessageInput;