import React from 'react';
import { useAuth } from 'contexts/Auth/AuthContext';
import SplashScreen from 'screens/Splash/SplashScreen';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const Navigation = () => {
    const { isLoading, userToken } = useAuth();

    if (isLoading) {
        return <SplashScreen />;
    }

    if (userToken) {
        return <AppNavigator />;
    }

    return <AuthNavigator />;
};

export default Navigation;
