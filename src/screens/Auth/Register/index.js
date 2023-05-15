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
import BtnRegister from "../../../components/BtnRegister";

const RegisterScreen = () => {
  const navigate = useNavigation()
  const handleLogin = () =>{
    navigate.navigate('OtpScreen')
}
  return (
    <View style={[styles.bg]}>
      <HeaderPersonal label="ĐĂNG KÝ" />
      <View style={styles.container}>
        <Text style={styles.label}>Họ và tên</Text>
        <TextInput style={styles.inputs} placeholder="VD : Nguyễn Văn A" />
        <Text style={styles.label}>Số điện thoại</Text>
        <TextInput style={styles.inputs} placeholder="VD : 049889xxx" />
        <Text style={styles.label}>Tài khoản</Text>
        <TextInput style={styles.inputs} placeholder="Nhập tên tài khoản" />
        <Text style={styles.label}>Mật khẩu</Text>
        <TextInput style={styles.inputs} placeholder="Nhập mật khẩu" />
        <Text style={styles.label}>Xác nhận mật khẩu</Text>
        <TextInput style={styles.inputs} placeholder="Nhập mật khẩu" />
      </View>
      <BtnRegister label='Đăng kí' onPress={handleLogin}/>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#fff",
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
  },
  inputs: {
    marginBottom: 10,
    paddingLeft: 15,
    backgroundColor: "#EBEBEB",
    marginVertical: 10,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});
