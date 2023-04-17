import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const contextProvider = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password )=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const managedUser = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            managedUser()
        }
    }, [])
    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        logOut,
    }
    return (
       <contextProvider.Provider value={authInfo}>
        {children}
       </contextProvider.Provider>
    );
};

export default AuthProvider;