import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SplasScreen from '../screens/SplasScreen';
import BottomTab from './MainStack';
const Stack = createStackNavigator();

export default function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName='SplasScreen'
        >
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="SplasScreen" component={SplasScreen} />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
    )
}