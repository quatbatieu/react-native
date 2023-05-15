import { View, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react'
import BtnSection from '../components/BtnSection'
import BtnRegister from '../components/BtnRegister'
import InputNumber from '../components/InputNumber'
import homes from "../../assets/home.png";
import users from "../../assets/user.png";
import { useNavigation } from '@react-navigation/native'
const home = Image.resolveAssetSource(homes).uri;
const user = Image.resolveAssetSource(users).uri;

const PersonalContainer = () => {
    const navigate = useNavigation()
    const handleLogin = () =>{
        navigate.navigate('LoginScreen')
    }
    return (
        <View
            style={styles.container}
        >
            <Image
                source={{
                    uri :  home
                }}
                style={styles.imageLogo}
                resizeMode='contain'
            />
            <Image
                source={{
                    uri: user
                }}
                style={styles.imageUser}
            />
            <View
                style={styles.MenuContainer}
            >
                <BtnSection
                    label='Đăng nhập'
                    onPress={handleLogin}
                />
                <BtnRegister
                    label='Đăng ký'
                />
                {/* <InputNumber/> */}
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