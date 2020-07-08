import React, { useCallback, FunctionComponent } from 'react';
import { CenteredScreen, Button } from 'components';
import { useAuth } from 'contexts/Auth/AuthContext';

const AuthScreen: FunctionComponent<{}> = () => {
    const { signIn } = useAuth();

    const logIn = useCallback(() => signIn(), []);

    return (
        <CenteredScreen>
            <Button onPress={logIn}>Login</Button>
        </CenteredScreen>
    );
};

export default AuthScreen;
