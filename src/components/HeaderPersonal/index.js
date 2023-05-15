import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import homes from "../../../assets/home.png";

const home = Image.resolveAssetSource(homes).uri;

const HeaderPersonal = ({label}) => {
  return (
    <View style={styles.container}>
      <Image
                source={{
                    uri :  home
                }}
                style={styles.imageLogo}
                resizeMode='contain'
            />
        <Text
                style={styles.labelBtn}
            >{label}</Text>
    </View>
  )
}

export default HeaderPersonal

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        width : '100%'
    },
    imageLogo: {
        width: 100,
        height: 100,
        marginBottom: 20
    },
    labelBtn: {
        color: '#0054D9',
        marginVertical: 2,
        fontSize : 24
    },
})