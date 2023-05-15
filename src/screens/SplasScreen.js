import { View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SplasScreen = () => {
    const navigation = useNavigation()

    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('BottomTab', {
                id: 1,
                name: "React"
            })
        }, 2000)
    }, [])

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
        <Image source={require("../../assets/iconHome.png")}></Image>
        </View>
    )
}

export default SplasScreen