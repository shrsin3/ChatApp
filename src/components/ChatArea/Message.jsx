import {Avatar, Grid, Stack, Typography} from "@mui/material";

function Message() {
    return (
        <Stack direction = "row" spacing={2} marginBottom={3}>
            <Stack>
                <Avatar>M</Avatar>
            </Stack>
            <Stack sx={{backgroundColor:"white",
                        borderRadius: "0px 7px 7px 7px",
                        p: 1}}>
                <Typography variant={"subtitle1"} align={"right"}>This is a sample message</Typography>
                <Typography variant={"body2"} align={"right"}>Just Now</Typography>
            </Stack>
        </Stack>
    );
}

export default Message;