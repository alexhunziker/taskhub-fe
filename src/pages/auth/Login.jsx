import React, { useContext } from 'react';
import Header from '../Header';
import Card from '../../components/Card';
import DatabaseContext from '../../state/DatabaseContext';
import { Navigate } from 'react-router-dom';
import AuthenticationContext from '../../state/AuthenticationContext';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import { Routes } from '../routes';
import AuthenticationBox from './AuthenticationBox';

const Login = () => {

    const { ready } = useContext(DatabaseContext);
    const { isLoggedIn } = useContext(AuthenticationContext);

    if (isLoggedIn()) {
        return <Navigate to={Routes.TASKLIST} replace />
    }

    const loginConfig = {
        signInFlow: 'popup',
        signInOptions: [
            EmailAuthProvider.PROVIDER_ID,
        ],
        signInSuccessUrl: Routes.TASKLIST,
    }

    return (
        <Card>
            <Header page={"Login"} />
            {ready && <AuthenticationBox uiConfig={loginConfig} firebaseAuth={getAuth()} />}
        </Card>
    );
}

export default Login;