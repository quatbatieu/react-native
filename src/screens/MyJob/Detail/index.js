import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import HeaderPersonal from "../../../components/HeaderPersonal";
import Fish from "../../../components/Fish";
import Status from "../../../components/status";
import BtnSection from "../../../components/BtnSection";
import { useNavigation } from "@react-navigation/native";

const Detail = () => {
  const navigate = useNavigation()
    const handleNavigate = () =>{
      navigate.navigate('Time')
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../../assets/brick.png")}
      ></Image>
      <HeaderPersonal style={styles.header}/>
      <Fish />
      <View style={styles.alles}>
        <Text style={styles.describe}>Mô tả : </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Text>
      </View>
      <View style={styles.alles}>
        <Text style={styles.regulations}>Quy định : </Text>
        <Text>{`
1. Hoàn thành trong 48 giờ 
2. Lorem isum dolor sit amet, Lorem isum dolor sit amet 
3. Lorem isum dolor sit amet Lorem isum dolor sit amet
4. Lorem isum dolor sit amet Lorem isum dolor sit amet
  `}</Text>
      </View>
      <Status />
      <BtnSection label={'Nhận việc'} onPress={handleNavigate}/>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 26,
    paddingRight: 26,
  },
  header : {
    marginTop : 0
  },
  img: {
    marginTop: 25,
  },
  alles: {
    backgroundColor: "#FBFBFB",
    paddingLeft: 15,
    borderRadius: 20,
    marginTop : 10
  },
  describe: {
    color: "#2A7FF6",
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 600,
  },
  regulations : {
    marginTop : 15,
    fontSize: 14,
    fontWeight: 600,
    color: "#2A7FF6",
  }
});
