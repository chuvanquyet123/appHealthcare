import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TextInput,
  SectionList,
  Image,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ChatPage() {
  const dataChat = [
    {
      id: 1,
      imageUser:
        "https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww",
      nameUser: "Bác Sĩ Hải",
      messageContent: "Em dạo này ổn không, còn đi làm ở công ty cũ",
      time: "12:01",
    },
    {
      id: 2,
      imageUser:
        "https://media.istockphoto.com/id/1944704622/photo/successful-doctor-woman-standing-outside-at-front-of-medical-clinic-looking-at-camera.webp?b=1&s=612x612&w=0&k=20&c=GCN2H0bGVRd1gQgtLZtxTKGR2Hw9UyrMPj42rDRHE3Q=",
      nameUser: "Bác Sĩ Nhi",
      messageContent: "Còn đi sớm về khuya mà đồng lương vẫn không thể đủ",
      time: "14:30",
    },
    {
      id: 3,
      imageUser:
        "https://media.istockphoto.com/id/1494324933/photo/portrait-of-asian-chinese-mixed-race-senior-mature-man-doctor-in-collared-business-shirt.webp?b=1&s=612x612&w=0&k=20&c=CY6F5ldzz3xcC5KEbgx_r1ltOUMLaqzCsNnwtesf_28=",
      nameUser: "Bác Sĩ Hoàng",
      messageContent: "Em ngủ đi anh thấy yên lòng",
      time: "24:30",
    },
    {
      id: 4,
      imageUser:
        "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600",
      nameUser: "Bác Sĩ Trinh",
      messageContent: "Nay em ăn mấy bát",
      time: "08:30",
    },
    {
      id: 5,
      imageUser:
        "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600",
      nameUser: "Bác Sĩ Linh",
      messageContent: "Em ăn cơm chưa",
      time: "11:30",
    },
  ];

  const handleDataUser = ({ item }) => (
    <TouchableOpacity style={styles.chatView}>
      <Image
        style={{ width: 70, height: 70, borderRadius: 50 }}
        src={item.imageUser}
      />
      <View
        style={{
          flexDirection: "column",
          width: "65%",
          height: "100%",
          margin: 10,
          justifyContent: "space-evenly",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>{item.nameUser}</Text>
        <Text numberOfLines={1} style={{ fontSize: 13 }}>
          {item.messageContent}
        </Text>
      </View>
      <Text>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="menu" size={30} color={"#11548f"} />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Trò Chuyện</Text>
        <TouchableOpacity>
          <Feather name="edit" size={30} color={"#11548f"} />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Feather
          name="search"
          size={24}
          color="#a5a4a4"
          style={styles.micIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Bạn đang tìm ai?"
          placeholderTextColor={"#a5a4a4"}
        />
      </View>
      <FlatList
        style={{ width: "100%", height: "100%", marginTop: 20 }}
        horizontal={false}
        data={dataChat}
        renderItem={handleDataUser}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    height: "13%",
    width: "100%",
    backgroundColor: "#6ea8f3",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingBottom: 13,
    paddingHorizontal: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "rgba(158, 150, 200, .3)",
    borderWidth: 2,
    width: "95%",
    paddingLeft: 10,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingVertical: 7,
    paddingHorizontal: 7,
    fontSize: 16,
  },
  micIcon: {
    marginRight: 10,
  },
  chatView: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 100,
    //backgroundColor: "#727272",
    alignItems: "center",
    padding: 20,
  },
  itemChat: {},
});
