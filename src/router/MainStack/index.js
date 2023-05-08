import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import MyJob from '../../screens/MyJob';
import Money from '../../screens/Money';
import PersonnalScreen from '../../screens/Auth/Personnal';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
        >
            <Tab.Screen

                name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="MyJob" component={MyJob}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="Money" component={Money}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="PersonnalScreen" component={PersonnalScreen}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;