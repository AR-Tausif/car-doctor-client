import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    const registerNewUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const registerWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const userSignInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })
        return () => unSubscribe();
    }, [])
    const provideContext = {
        registerNewUserWithEmail,
        registerWithGoogle,
        userSignInWithEmail,
        userSignOut,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={provideContext} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;