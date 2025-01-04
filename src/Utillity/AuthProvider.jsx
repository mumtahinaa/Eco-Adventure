
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext();
const provider = new GoogleAuthProvider;

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] =useState(true)
    console.log(loading);
    console.log(user)

     const register =(email,password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
         
     }

    
    const googleLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
       
    };

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
         
      };

      const logOut =()=>{
        setLoading(true);
        return signOut(auth);
      }

      useEffect( () => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
           
        });

        return () => {
            unsubscribe();
        };
      },[])

    const authInfo ={
        googleLogIn,
        user,
        setUser,
        logIn,
        register,
        logOut,
        loading,
    }


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;