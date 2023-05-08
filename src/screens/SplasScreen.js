import { View, Text } from 'react-native'
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
            <Text>SplasScreen</Text>
        </View>
    )
}

export default SplasScreen