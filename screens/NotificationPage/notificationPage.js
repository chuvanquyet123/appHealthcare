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
        "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/457278646_490166013767325_3329867938515344392_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hy-LqJasi8wQ7kNvgE_O1Xy&_nc_ht=scontent.fhan5-2.fna&oh=00_AYB0f8iE9f6hyLRhIv-fHkWnzfYQt56yIK8tZKzC5EDuFw&oe=66D70D8E",
      nameUser: "Thông báo hệ thống",
      messageContent: "Bạn có lịch hẹn khám khoa ngoại vào ngày mai.",
      time: "2 giờ",
    },
    {
      id: 2,
      imageUser:
        "https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/457278646_490166013767325_3329867938515344392_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hy-LqJasi8wQ7kNvgE_O1Xy&_nc_ht=scontent.fhan5-2.fna&oh=00_AYB0f8iE9f6hyLRhIv-fHkWnzfYQt56yIK8tZKzC5EDuFw&oe=66D70D8E",
      nameUser: "Lời nhắc từ hệ thống",
      messageContent: "Bạn đã quên uống thuốc",
      time: "3 giờ",
    },
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
        <View style={{ width: "100%", marginTop: 10, padding: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Hôm Nay</Text>
        </View>
        <FlatList
          style={{ width: "100%", height: "100%", marginTop: 10 }}
          horizontal={false}
          data={dataChat}
          renderItem={handleDataUser}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity style={{ width: "30%", height: 50 }}>
          <Text>Xem Thêm Thông Báo Trước Đó</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3795BD",
  },
  header: {
    flexDirection: "row",
    marginTop: 20,
    width: "100%",
    backgroundColor: "#3795BD",
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
