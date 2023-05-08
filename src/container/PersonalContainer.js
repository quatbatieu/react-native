import { View, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'
import BtnSection from '../components/BtnSection'
import InputNumber from '../components/InputNumber'
const PersonalContainer = () => {
    return (
        <View
            style={styles.container}
        >
            <Image
                source={{
                    uri: 'https://th.bing.com/th/id/R.edf018af5e9fa4dce24d38e24b9ec828?rik=1AI6o1Z0SVc6hQ&pid=ImgRaw&r=0',
                }}
                style={styles.imageLogo}
                resizeMode='contain'
            />
            <Image
                source={{
                    uri: "https://th.bing.com/th/id/OIP.643-DaTIL7rvnkBPbJoJogHaFH?pid=ImgDet&rs=1"
                }}
                style={styles.imageUser}
            />
            <View
                style={styles.MenuContainer}
            >
                <BtnSection
                    label='Login'
                />
                <BtnSection
                    label='Register'
                />
                <InputNumber/>
            </View>
        </View>
    )
}

export default PersonalContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    imageLogo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    imageUser: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    MenuContainer: {
        flex: 1,
        width: '100%',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    input:{
        borderWidth: 1,
    }
})