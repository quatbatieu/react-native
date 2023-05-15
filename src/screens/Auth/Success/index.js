import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SuccessScreen = () => {
  return (
    <View style={[styles.bg]}>
      <Image source={require("../../../../assets/homes.png")}></Image>
      <Text style={styles.text}>ĐĂNG KÍ THÀNH CÔNG</Text>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  text : {
    paddingLeft : 68,
    fontSize : 40,
    color : "#0054D9",
    fontWeight: 700,
    textAlign : "center",
    paddingRight : 68,
  },
  bg: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
  },
});
