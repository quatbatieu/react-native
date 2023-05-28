import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import homes from "../../../assets/home.png";

const home = Image.resolveAssetSource(homes).uri;

const HeaderPersonal = () => {
  return (
    <View style={styles.container}>
      <Image
                source={{
                    uri :  home
                }}
                style={styles.imageLogo}
                resizeMode='contain'
            />
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
        height: 40,
    },
})