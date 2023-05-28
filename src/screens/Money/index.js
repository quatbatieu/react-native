import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Momo from "../../components/momo";

const Money = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/pay2.png")}
        ></Image>
        <Text style={styles.text}>Ví tiền</Text>
      </View>
      <View style={styles.border}>
        <Image
          source={require("../../../assets/home.png")}
        ></Image>
        <Text style={styles.moneypay}>Số tiền trong ví</Text>
        <View style={styles.start}>
          <Image
            source={require("../../../assets/start2.png")}
          ></Image>
          <Text style={styles.number}>560.00</Text>
        </View>
        <Text style={styles.numberone}>4428 1929 4939 9321</Text>
      </View>
      <Momo />
      <Momo />
      <Momo />
      <Momo />
      <Momo />
      <Momo />
    </View>
  );
};

export default Money;

const styles = StyleSheet.create({
  numberone : {
    marginTop : 5,
    fontSize : 23,
  },
  number : {
    marginLeft : 10,
    fontSize : 23,
  },
  start : {
    display : "flex",
    flexDirection : "row",
    marginTop : 5,
  },
  moneypay : {
    fontSize : 22,
    marginTop : 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingLeft: 26,
    paddingRight: 26,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 33,
  },
  text: {
    marginLeft: 10,
    color: "#2A7FF6",
    fontSize: 24,
  },
  border : {
    padding : 20,
  }
});
