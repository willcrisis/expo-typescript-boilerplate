import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from 'screens/Auth/AuthScreen';

const AuthStack = createStackNavigator();

const AppNavigator: FunctionComponent<{}> = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="Login"
            component={AuthScreen}
            options={{ title: 'Login' }}
        />
    </AuthStack.Navigator>
);

export default AppNavigator;
