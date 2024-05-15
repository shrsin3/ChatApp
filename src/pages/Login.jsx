import {Alert, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";


function Login() {
    const [info, setInfo] = useState({
        "email": "",
        "password": ""
    });
    const [isError, setError] = useState(false);
    const nav = useNavigate();

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
            await signInWithEmailAndPassword(auth, info.email, info.password)
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
                fontWeight: "bold"}}>Sign In</Typography>
            {isError && <Alert severity="error" sx={{mb:2}}>Invalid Email or Password.</Alert>}
            <TextField required={true}
                       label={"Email"} type={"email"} style={{padding: 3}}
                       sx={{marginBottom: 2}} id={"email"}
            onChange={handleChange}></TextField>
            <TextField required={true}
                       label={"Password"} type={"password"} style={{padding: 3}}
                       sx={{marginBottom: 2}} id={"password"}
            onChange={handleChange}></TextField>
            <Button variant={"contained"} size={"large"} sx={{borderRadius: "1rem",
                fontWeight: "700px"}} onClick={handleSubmit}>Sign In</Button>
            <Link href={"/signUp"}><p>Do not have an account? Sign Up</p></Link>
        </Container>
    );
}

export default Login;