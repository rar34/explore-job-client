import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // login with email and password
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // log out
    const logOut = () => {
        setLoading(true)
        setUser(null)
        return signOut(auth);
    }


    // Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
                setUser(user)
                setLoading(false)
    
        });
        return () => {
            unSubscribe();
        }
    }, []);


    const authInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        gitHubLogin,
        logOut,
        updateUserProfile,
        loading
    }

    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;