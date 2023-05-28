import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const Drawers = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Text>Headling 1</Text>
        <Text>Headling 2</Text>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Drawers;

const styles = StyleSheet.create({});
