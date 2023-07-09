import React, { useContext } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
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

    const loginConfig = {
        signInFlow: 'popup',
        signInOptions: [
            EmailAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: '/taskhub-fe/',
    }

    return (
        <Card>
            <Header page={"Login"} />
            {ready && <StyledFirebaseAuth uiConfig={loginConfig} firebaseAuth={getAuth()} />}
        </Card>
    );
}

export default Login;