import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
export default function Home() {

    const route = useRoute()

    React.useEffect(() => {
        console.log(route);
    }, [route])
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}