import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Header from '../Header';
import Card from '../../components/Card';
import DatabaseContext from '../../state/DatabaseContext';
import { Navigate } from 'react-router-dom';
import AuthenticationContext from '../../state/AuthenticationContext';

const firebaseConfig = {
  apiKey: "AIzaSyBh36cGPXJH-cyb2giOsJet7VDEKZ3MVsU",
  authDomain: "my-task-hub.firebaseapp.com",
  databaseURL: "https://my-task-hub-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-task-hub",
  storageBucket: "my-task-hub.appspot.com",
  messagingSenderId: "941408350272",
  appId: "1:941408350272:web:a0f5bfc5afbcbbcb3defa5",
  measurementId: "G-485HGNY5X9"
};

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const { ready } = useContext(DatabaseContext);
    const { isLoggedIn } = useContext(AuthenticationContext);

    if (isLoggedIn()) {
        return <Navigate to="/" replace />
    }

    if (!ready) {
        <Card>
            <Header page={"Login"} />
        </Card>
    }

    const loginConfig = {
        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: '/',
    }

    console.log("auth", firebase.auth);

    return (
        <Card>
            <Header page={"Login"} />
            <StyledFirebaseAuth uiConfig={loginConfig} firebaseAuth={firebase.auth()} />
        </Card>
    );
}

export default Login;