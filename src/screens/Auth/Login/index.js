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
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
  const navigate = useNavigation()
  const handleLogin = () =>{
    navigate.navigate('RegisterScreen')
}

  return (
    <View style={[styles.bg]}>
      <HeaderPersonal label="ĐĂNG NHẬP" />
      <View style={styles.container}>
        <Text style={styles.label}>Tài khoản</Text>
        <TextInput style={styles.inputs} placeholder="Nhập tên tài khoản" />
        <Text style={styles.label}>Mật khẩu</Text>
        <TextInput style={styles.inputs} placeholder="Nhập mật khẩu" />
        <View style={styles.forget}>
          <View style={styles.remember}>
            <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
            <Text>Ghi nhớ</Text>
          </View>
          <Text style={styles.number}>Quên mật khẩu?</Text>
        </View>
      </View>
      <BtnSection label="Đăng nhập" style={styles.btnlogin} onPress={handleLogin}/>
      <View style={styles.res}>
        <Text style={styles.account}>Bạn chưa có tài khoản?</Text>
        <Text style={styles.number}>Đăng ký ngay</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  res : {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  account: {
    marginRight : 5
  },
  btnlogin: {
    marginLeft: 25,
    marginRight: 25,
  },
  number: {
    fontSize: 16,
    color: "#0054D9",
    textDecorationLine: "underline",
    fontWeight: 700,
  },
  forget: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bg: {
    backgroundColor: "#fff",
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  remember: {
    flexDirection: "row",
  },
  container: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
  },
  inputs: {
    marginBottom: 30,
    paddingLeft: 15,
    backgroundColor: "#EBEBEB",
    marginVertical: 10,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  checkbox: {
    width: 20,
    height: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    marginRight: 10,
  },
});
