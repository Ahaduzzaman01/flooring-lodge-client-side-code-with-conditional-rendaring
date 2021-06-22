import React, { useContext, useState } from 'react';
import AnotherNavBar from '../AnotherNavBar/AnotherNavBar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import googleIcon from '../../images/icons/google.png'
import './Login.css'
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [user, setUser] = useState({})
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const provider = new firebase.auth.GoogleAuthProvider();

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleLogin = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setUser(user);
                setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }


    return (
        <div>
            <AnotherNavBar></AnotherNavBar>
            <div className="login-container">
                <div onClick={handleGoogleLogin} className="login-wrapper">
                    <div className="google-img-box">
                        <img src={googleIcon} alt="" />
                    </div>
                    <div>
                        <h5>Log In with Google</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;