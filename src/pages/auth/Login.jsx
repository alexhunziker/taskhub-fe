import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Header from '../Header';
import Card from '../../components/Card';
import DatabaseContext from '../../state/DatabaseContext';
import { Navigate } from 'react-router-dom';
import AuthenticationContext from '../../state/AuthenticationContext';
import { getAuth, EmailAuthProvider } from 'firebase/auth';

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

    const auth = getAuth();

    const loginConfig = {
        signInFlow: 'popup',
        signInOptions: [
            EmailAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: '/',
    }

    console.log("auth", auth);

    return (
        <Card>
            <Header page={"Login"} />
            <StyledFirebaseAuth uiConfig={loginConfig} firebaseAuth={auth} />
        </Card>
    );
}

export default Login;