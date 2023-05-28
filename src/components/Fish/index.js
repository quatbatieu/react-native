import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const Fish = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.img}
        source={require("../../../assets/fish.png")}
      ></Image>
      <View style={styles.right}>
        <Text style={styles.textOne}>Chơi bắn cá</Text>
        <Text style={styles.textTwo}>Tên trò chơi : Vui bắn cá</Text>
        <Text style={styles.textThree}>Mã công việc : MS493492</Text>
        <View style={styles.rank}>
          <Text style={styles.textFour}>Số tiền thưởng : </Text>
          <Image
            style={styles.imga}
            source={require("../../../assets/start.png")}
          ></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Fish;

const styles = StyleSheet.create({
  container: {
    height: 151,
    backgroundColor : "#FBFBFB",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
  },
  img: {
    marginLeft: 16,
    marginTop: 16,
  },
  right : {
    marginLeft: 16,
    marginTop : 24
  },
  textOne : {
    fontSize : 25,
    color : "#2871DD"
  },
  rank : {
    display : "flex",
    flexDirection : "row",
    marginTop : 10,
    position : "relative"
  },
  imga : {
    position : "absolute",
    top : -5,
    right : -25
  }
});
