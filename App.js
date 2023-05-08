import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import InitState from './src/InitState';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <InitState />
    </NavigationContainer>
  );
}
