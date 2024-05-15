import {createContext, useContext, useEffect, useState} from 'react';
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase/firebase.js"

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) =>{
    const [currUser, setUser] = useState(null);
    // const [isLoggedIn, setLogInStatus] = useState(false);
    // const [isLoading, setLoading] = useState(true);

    //Code inspired from https://firebase.google.com/docs/auth/web/manage-users
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        console.log(currUser);
        return unsubscribe;
        }, [currUser]);

    return (
        <AuthContext.Provider value = {{currUser}}>
            {children}
        </AuthContext.Provider>
    );
}
