import {Alert, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useState} from "react";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth, db} from "../firebase/firebase.js"
import { doc, setDoc } from "firebase/firestore";
import {useNavigate} from "react-router-dom";


function Register() {

    const [info, setInfo] = useState({
       "firstName": "",
        "lastName": "",
        "email": "",
        "password": ""
    });
    const [isError, setError] = useState(false)
    const nav = useNavigate()
    const handleChange = (e)=>{
        setError(false);
        setInfo((prev) => {
            return { ...prev,
                    [e.target.id]: e.target.value
            }
        })
        console.log(info)
    }



    const handleSubmit = async (e)=>{
        // Code inspired from https://firebase.google.com/docs/auth/web/password-auth?authuser=0&_gl=1*1ww82m*_up*MQ..*_ga
        // *MTMyNTk1MTE5OC4xNzE1NzEyMjgx*_ga_CW55HF8NVT*MTcxNTcxMjI4MC4xLjEuMTcxNTcxMjc4MC4wLjAuMA..&hl=en#web-modular-api
        try{
            const userProfile = await createUserWithEmailAndPassword(auth, info.email, info.password)
            await updateProfile(auth.currentUser, {
                displayName: info.firstName
            })
            await setDoc(doc(db, "users", userProfile.user.uid), {
                uid: userProfile.user.uid,
                email: info.email,
                firstName: info.firstName,
                lastName: info.lastName
            });
            await setDoc(doc(db, "userChats", userProfile.user.uid), {});
            nav("/chat");
        } catch (err){
            setError(true);
        }
    }

    return (
        <Container sx={{border: 1,
            padding: 6,
            display: "flex",
            flexDirection: "column",
            borderRadius: "7px",
            width: "450px"}}>
            <Typography variant={"h4"} sx={{marginBottom: 3,
                                            fontWeight: "bold"}}
                        onChange={handleChange}>Sign Up</Typography>
            {isError && <Alert severity="error" sx={{mb:2}}>Invalid Email or Password.</Alert>}
            <TextField required={true} id={"firstName"}
                       label={"First Name"} style={{padding: 3}}
            sx={{marginBottom: 2}}
                       onChange={handleChange}></TextField>
            <TextField required={true} id={"lastName"}
                       label={"Last Name"} style={{padding: 3}}
                       sx={{marginBottom: 2}}
                       onChange={handleChange}></TextField>
            <TextField required={true} id={"email"}
                       label={"Email"} type={"email"} style={{padding: 3}}
                       sx={{marginBottom: 2}}
                       onChange={handleChange}></TextField>
            <TextField required={true} id={"password"}
                       label={"Password"} type={"password"} style={{padding: 3}}
                       sx={{marginBottom: 2}}
                       onChange={handleChange}></TextField>
            <Button variant={"contained"} size={"large"} sx={{borderRadius: "1rem",
            fontWeight: "700px"}} onClick={handleSubmit}>Register</Button>
            <Link href={"/"}><p>Already have an account? Sign In</p></Link>
        </Container>
    );
}

export default Register;