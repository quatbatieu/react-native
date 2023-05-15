import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Money from '../../screens/Money';
import PersonalStack from '../PersonalStack';
import MyJobStack from '../MyJobStack';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
        >
            <Tab.Screen
                name="Trang chủ" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="appstore-o" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="Việc của tôi" component={MyJobStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="pencil-square" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="Ví tiền" component={Money}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="wallet" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="Cá nhân" component={PersonalStack}

                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Octicons name="feed-person"  size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;