import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import TabHeader from "./Tab";
import Fish from "../../../components/Fish";

const Succes = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={require("../../../../assets/vector.png")}
        ></Image>
        <Text style={styles.text}>Việc của tôi</Text>
      </View>
      <View style={styles.job}>
        <Text style={styles.slice}>Việc đã nhận</Text>
        <Text style={styles.slice}>Việc đã làm</Text>
        {/* <TabHeader /> */}
      </View>
      <Fish />
      <Fish />
      <Fish />
    </View>
  );
};

export default Succes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  job: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  slice: {
    color: "#2A7FF6",
    fontSize: 24,
    textDecorationLine: "underline",
  },
});
