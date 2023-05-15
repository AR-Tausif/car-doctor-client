import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider()

    const registerNewUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const registerWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const userSignInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log(loggedUser);
            setUser(loggedUser)
        })
        return () => unSubscribe();
    }, [])
    const provideContext = {
        registerNewUserWithEmail,
        registerWithGoogle,
        userSignInWithEmail,
        userSignOut,
        user,

    }
    return (
        <AuthContext.Provider value={provideContext} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;