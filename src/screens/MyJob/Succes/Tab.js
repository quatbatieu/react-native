import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Fish from "../../../components/Fish";

const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function TabHeader() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="tai" component={HomeScreen} />
        <Tab.Screen name="khoan" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
