import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppScreen from 'screens/App/AppScreen';

const AppStack = createStackNavigator();

const AppNavigator: FunctionComponent<{}> = () => (
    <AppStack.Navigator>
        <AppStack.Screen
            name="Home"
            component={AppScreen}
            options={{ title: 'App' }}
        />
    </AppStack.Navigator>
);

export default AppNavigator;
