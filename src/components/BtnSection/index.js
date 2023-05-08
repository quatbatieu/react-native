import { View, Text, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from './style'

const BtnSection = ({
    label,
}) => {
    return (
        <TouchableOpacity
            style={styles.containetBtn}
            onPress={() => console.log('click')}
        >
            <Text
                style={styles.labelBtn}
            >{label}</Text>
        </TouchableOpacity>
    )
}

export default BtnSection