import { StyleSheet, TextI, TextInput, View, Image } from "react-native";
import React from "react";
import Fish from "../../../components/Fish";
import { useNavigation } from "@react-navigation/native";

const Job = () => {
    const navigate = useNavigation()
    const handleNavigate = () =>{
      navigate.navigate('Detail')
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../../assets/brick.png")}
      ></Image>
      <View style={styles.pos}>
        <TextInput style={styles.input} placeholder="Tìm kiếm việc..." />
        <Image
          style={styles.search}
          source={require("../../../../assets/search.png")}
        ></Image>
      </View>
      <Fish onPress={handleNavigate}/>
      <Fish onPress={handleNavigate}/>
      <Fish onPress={handleNavigate}/>
    </View>
  );
};

export default Job;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 26,
    paddingRight: 26,
  },
  img: {
    marginTop: 25,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#eeeeee",
    paddingVertical: 15,
    marginTop: 36,
    paddingLeft: 50,
    paddingRight: 26,
    borderRadius: 40,
    borderColor: "#ddd",
  },
  pos: {
    position : "relative"
  },
  search : {
    position : "absolute",
    top : 57,
    left : 20
  }
});
