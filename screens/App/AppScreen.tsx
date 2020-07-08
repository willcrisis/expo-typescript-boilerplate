import React, { useCallback, FunctionComponent } from 'react';
import { CenteredScreen, Text, Button } from 'components';
import { useAuth } from 'contexts/Auth/AuthContext';

const AppScreen: FunctionComponent<{}> = () => {
    const { signOut } = useAuth();

    const logOut = useCallback(() => signOut(), []);

    return (
        <CenteredScreen>
            <Text>Home Screen</Text>
            <Button onPress={logOut}>Logout</Button>
        </CenteredScreen>
    );
};

export default AppScreen;
