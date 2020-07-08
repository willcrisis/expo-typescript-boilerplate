import React, { FunctionComponent } from 'react';
import { ThemeProvider, theme } from 'react-native-design-system';
import { NavigationContainer } from '@react-navigation/native';
import AuthContextProvider from 'contexts/Auth/AuthContext';
import Navigation from './navigation';

const App: FunctionComponent<{}> = () => (
    <ThemeProvider value={theme}>
        <AuthContextProvider>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </AuthContextProvider>
    </ThemeProvider>
);

export default App;
