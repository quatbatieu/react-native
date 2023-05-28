import { StyleSheet, Text, View, Image, Modal, Pressable } from "react-native";
import React,{useState} from "react";
import HeaderPersonal from "../../../components/HeaderPersonal";
import Fish from "../../../components/Fish";
import Status from "../../../components/status";
import BtnSection from "../../../components/BtnSection";
import { useNavigation } from "@react-navigation/native";

const Time = () => {
  const navigate = useNavigation();
  const handleNavigate = () => {
    navigate.navigate("Succes");
  };
  const [modal, setModal] = useState(false)
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../../assets/brick.png")}
      ></Image>
      <HeaderPersonal style={styles.header} />
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
      <View style={styles.time}>
        <View style={styles.untime}>
          <Text>Thời gian còn lại</Text>
          <Text style={styles.change}>47 : 59 : 59</Text>
        </View>
        <View>
          <Status />
        </View>
      </View>
      <BtnSection label={"Hoàn thành"} onPress={() =>setModal(true)} />
      <Modal 
      visible = {modal}
      animationType="fade"
      transparent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bạn chắc chắn đã hoàn thành chứ ?</Text>
            <Text>Vui lòng up ảnh để admin duyệt</Text>
            <Image
        style={styles.imgup}
        source={require("../../../../assets/fourimg.png")}
      ></Image>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModal(false)
                handleNavigate()
                }}>
              <Text style={styles.textStyle}>Hoàn thành</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Time;

const styles = StyleSheet.create({
  imgup : {
    marginBottom : 10,
    marginTop : 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: "#2A7FF6",
    fontSize : 18,
  },
  time: {
    position : "relative",
    alignItems :'baseline',
    justifyContent: 'space-between',
  },
  untime : {
    position : "absolute",
    right : 20
  },
  change : {
    marginTop : 10,
    color: "#2A7FF6",
    fontSize : 30,
    fontWeight : 600,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 26,
    paddingRight: 26,
  },
  header: {
    marginTop: 0,
  },
  img: {
    marginTop: 25,
  },
  alles: {
    backgroundColor: "#FBFBFB",
    paddingLeft: 15,
    borderRadius: 20,
    marginTop: 10,
  },
  describe: {
    color: "#2A7FF6",
    marginBottom: 10,
    fontSize: 14,
    fontWeight: 600,
  },
  regulations: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: 600,
    color: "#2A7FF6",
  },
});
