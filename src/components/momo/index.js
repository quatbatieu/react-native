import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Momo = () => {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("../../../assets/momo.png")}></Image>
        <View style={styles.right}>
          <Text style={styles.pay}>Thanh toán lương - Chơi game online</Text>
          <Text style={styles.time}>09:41 10.12.2022</Text>
        </View>
        <Image
          style={styles.img}
          source={require("../../../assets/monneys.png")}
        ></Image>
        <View />
      </View>
      <View style={styles.br} />
    </>
  );
};

export default Momo;

const styles = StyleSheet.create({
  br: {
    height: 1,
    backgroundColor: "black",
    marginTop : 15
 },
  img: {
    position: "absolute",
    right: 0,
    top: 20,
  },
  pay: {
    fontSize: 16,
  },
  time: {
    fontSize: 13,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    position: "relative",
  },
  right: {
    marginLeft: 10,
  },
});
