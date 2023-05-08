import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import styles from './style'
import PersonalContainer from '../../../container/PersonalContainer'
const PersonnalScreen = () => {

  return (
    <View style={[styles.container]}>
      {/* UI main */}
      <PersonalContainer/>
    </View>
  )
}

export default PersonnalScreen