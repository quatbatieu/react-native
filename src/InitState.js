import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import RootStack from './router/router'

const InitState = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
            <RootStack/>
        </>
    )
}

export default InitState