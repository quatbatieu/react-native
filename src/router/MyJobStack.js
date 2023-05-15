import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PersonnalScreen from '../screens/Auth/Personnal';

const Stack = createStackNavigator();

export default function MyJobStack() {
    return (
        <Stack.Navigator
            initialRouteName='PersonnalScreen'
        >
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="PersonnalScreen" component={PersonnalScreen} />
            {/* <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="LoginScreen" component={LoginScreen} /> */}
            {/* <Stack.Screen
                options={{
                    headerShown: false,
                }}
            name="RegisterScreen" component={RegisterScreen} /> */}
            {/* <Stack.Screen
                options={{
                    headerShown: false,
                }}
            name="OtpScreen" component={OtpScreen} /> */}
            {/* <Stack.Screen
                options={{
                    headerShown: false,
                }}
            name="SuccessScreen" component={SuccessScreen} /> */}
        </Stack.Navigator>
    )
}