import { useContext } from "react";
import { createContext,useState ,useEffect} from "react";

import { initializeApp } from "firebase/app";

import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup, onAuthStateChanged} from "firebase/auth"

const FirebaseContext=createContext(null)



const firebaseConfig = {
  apiKey: "AIzaSyBvuf_9g6_lHhgvaHL9xa3TcVB1xrX8NnE",
  authDomain: "bookify-fe226.firebaseapp.com",
  projectId: "bookify-fe226",
  storageBucket: "bookify-fe226.appspot.com",
  messagingSenderId: "63078609226",
  appId: "1:63078609226:web:df99fe8a7917f1cbe4d1b3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth=getAuth(firebaseApp)
const googleProvider=new GoogleAuthProvider();

export const useFirebase=()=>useContext(FirebaseContext);
export const FirbaseProvider=(props)=>{

    const [user,setUser]=useState(null)

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth,(user)=>{
            if(user){
                setUser(user)
            }else{
                setUser(null)
            }
        })
    },[]);

    const signupUserWithEmailAndPassword=(email,password)=>{
   return createUserWithEmailAndPassword(firebaseAuth,email,password)
}


const signUserWithEmailAndPass=(email,password)=>{
   return signInWithEmailAndPassword(firebaseAuth,email,password);
}


const signWithGoogle=()=> signInWithPopup(firebaseAuth,googleProvider)

const isLoggedIn=user?true:false;

    return(
        <FirebaseContext.Provider
        
        value={{signupUserWithEmailAndPassword,signUserWithEmailAndPass,signWithGoogle,isLoggedIn}}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}