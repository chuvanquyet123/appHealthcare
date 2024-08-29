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

export default function NotificationPage() {
  const dataChat = [
    {
      id: 1,
      imageUser:
        "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/401592491_3659917990903986_4375874815423449447_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fJMq2JdDHCUQ7kNvgHiun7s&_nc_ht=scontent.fhan5-2.fna&oh=00_AYA0tu9ROYTrsmCfuVBIhiWgQBedguMGEZAshhYXDFeFsA&oe=66D373AF",
      nameUser: "Tin mới",
      messageContent: "Bác sĩ hải vừa đăng 1 bài viết mới.",
      time: "1 giờ",
    },
    {
      id: 2,
      imageUser:
        "https://media.istockphoto.com/id/1944704622/photo/successful-doctor-woman-standing-outside-at-front-of-medical-clinic-looking-at-camera.webp?b=1&s=612x612&w=0&k=20&c=GCN2H0bGVRd1gQgtLZtxTKGR2Hw9UyrMPj42rDRHE3Q=",
      nameUser: "Thông báo",
      messageContent: "Bác sĩ nhi đã chia sẻ 1 bài viết.",
      time: "2 giờ",
    },
    {
      id: 3,
      imageUser:
        "https://media.istockphoto.com/id/1494324933/photo/portrait-of-asian-chinese-mixed-race-senior-mature-man-doctor-in-collared-business-shirt.webp?b=1&s=612x612&w=0&k=20&c=CY6F5ldzz3xcC5KEbgx_r1ltOUMLaqzCsNnwtesf_28=",
      nameUser: "Lời nhắc",
      messageContent: "Bạn đã quên uống thuốc",
      time: "3 giờ",
    }
  ];

  const handleDataUser = ({ item }) => (
    <TouchableOpacity style={styles.chatView}>
      <Image
        style={{ width: 60, height: 60, borderRadius: 50 }}
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
          Thông Báo
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f0f0f0",
          alignItems: "center",
        }}
      >
        <View style={styles.inputContainer}>
          <Feather name="search" size={24} color="#a5a4a4" />
          <TextInput
            style={styles.input}
            placeholder="Tìm Kiếm"
            placeholderTextColor={"#a5a4a4"}
          />
        </View>
        <FlatList
          style={{ width: "100%", height: "100%", marginTop: 10 }}
          horizontal={false}
          data={dataChat}
          renderItem={handleDataUser}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b5f9b",
  },
  header: {
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
    backgroundColor: "#1b5f9b",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 13,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "rgba(255, 255, 255, 0.3)",
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
  chatView: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 80,
    //backgroundColor: "#727272",
    alignItems: "center",
    padding: 20,
  },
});
