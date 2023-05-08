import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const InputNumber = () => {
    return (
        <View
            style={styles.container}
        >
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                maxLength={1}
            />
        </View>
    )
}

export default InputNumber

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: 40,
        height: 40,
        marginHorizontal: 5,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    }
})