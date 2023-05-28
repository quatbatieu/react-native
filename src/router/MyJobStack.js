import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Job from '../screens/MyJob/job';
import Detail from '../screens/MyJob/Detail';
import Time from '../screens/MyJob/Time';
import Succes from '../screens/MyJob/Succes';

const Stack = createStackNavigator();

export default function MyJobStack() {
    return (
        <Stack.Navigator
            initialRouteName='Job'
        >
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Job" component={Job} />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Detail" component={Detail} />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            name="Time" component={Time} />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            name="Succes" component={Succes} />
        </Stack.Navigator>
    )
}