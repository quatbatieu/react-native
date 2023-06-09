import { View, Text, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from './style'

const BtnSection = ({
    label,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={styles.containetBtn}
            onPress={onPress}
        >
            <Text
                style={styles.labelBtn}
            >{label}</Text>
        </TouchableOpacity>
    )
}

export default BtnSection