import {Alert, Avatar, Box, Grid, IconButton, Modal, TextField, Typography} from "@mui/material";
import {useContext, useState} from "react";
import {collection, query, where, getDocs, setDoc, doc, getDoc, updateDoc, serverTimestamp} from "firebase/firestore";
import {db} from "../../firebase/firebase.js";
import {AuthContext} from "../../context/AuthContext.jsx";


function SearchBar() {
    const [userName, setUserName] = useState("");
    const [user, setUser]= useState(null);
    const [isError, setError] = useState(false);
    const {currUser} = useContext(AuthContext);

    const handleKey= (e)=>{
        e.code==="Enter" && handleSearch();
    }
    //This code is inspired from https://firebase.google.com/docs/firestore/query-data/queries
    const handleSearch = async () => {
        const usersRef = collection(db, "users");
        // Create a query against the collection.
        const q = query(usersRef,
            where("firstName", "==", userName));
        const querySnapshot = await getDocs(q);
        try{
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch(e) {
            setError(true);
        }

    }
    const handleSelect = async () => {
        const id = currUser.uid> user.uid? currUser.uid + user.uid: user.uid+currUser.uid;
        try{
            const exists =
                await getDoc(doc(db, "chats", id));
            if(!exists.exists()){
                await setDoc(doc(db, "chats", id), {messages: []})

                await updateDoc(doc(db, "userChats", currUser.uid),{
                    [id+".userInfo"]:{
                        uid: user.uid,
                        displayName: user.firstName
                    },
                    [id+".time"]: serverTimestamp()
                })
                await updateDoc(doc(db, "userChats", user.uid),{
                    [id+".userInfo"]:{
                        uid: currUser.uid,
                        displayName: currUser.displayName
                    },
                    [id+".time"]: serverTimestamp()
                })
            }
        } catch(e){}
        setUser(null);
        setUserName("");
    }
    return (
        <Box sx={{width: "100%"}}>
            <TextField variant={"standard"} fullWidth={true} label={"Search..."}
            onChange={(e)=>{
                setUserName(e.target.value)
            }} onKeyDown={handleKey}></TextField>
            {isError && <Alert severity="warning">User Not Found</Alert>}
            {user && <Grid container spacing={0} sx={{width: "100%", borderBottom: 1,
                borderColor: "grey", p: 1}} onClick={handleSelect}>
                <Grid item xs={2}>
                    <Avatar>
                        {user.firstName[0].toUpperCase()}
                    </Avatar>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant={"subtitle1"}
                                align={"left"}
                                fontWeight={"bolder"}>{user.firstName + " "+ user.lastName}</Typography>
                </Grid>
            </Grid>}
        </Box>
    );
}

export default SearchBar;