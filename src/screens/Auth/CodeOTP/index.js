import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HeaderPersonal from "../../../components/HeaderPersonal";
import BtnSection from "../../../components/BtnSection";
import { useNavigation } from "@react-navigation/native";
import InputNumber from "../../../components/InputNumber";

const OtpScreen = () => {
  const navigate = useNavigation()
  const handleLogin = () =>{
    navigate.navigate('SuccessScreen')
}
  return (
    <View style={[styles.bg]}>
      <HeaderPersonal label="NHẬP MÃ OTP" />
      <Text style={styles.text}>
        Chúng tôi sẽ gửi cho bạn mã OTP kích hoạt tài khoản qua số điện thoại
      </Text>
      <Text style={styles.phone}>+91 - 12989200823</Text>
      <InputNumber />
      <View style={styles.res}>
        <Text style={styles.account} opacity={0.5}>Không nhận được mã?</Text>
        <Text style={styles.number} opacity={0.5}>Gửi lại</Text>
      </View>
      <BtnSection label="Xác nhận" onPress={handleLogin}/>
    </View>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  res : {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  account: {
    marginRight : 5,
  },
  number: {
    fontSize: 16,
    color: "#0054D9",
    textDecorationLine: "underline",
    fontWeight: 700,
  },
  phone : {
    marginTop : 20,
    fontSize : 16,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign : "center",
    fontSize : 18,
    fontWeight: 600,
    marginBottom : 20
  },
  text : {
    marginTop : 20,
    fontSize : 16,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign : "center"
  },
  bg: {
    backgroundColor: "#fff",
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
