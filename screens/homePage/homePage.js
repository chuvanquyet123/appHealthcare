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
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
  Octicons,
} from "@expo/vector-icons";

export default function HomePage() {
  const data = [
    {
      title: "VITAMIN B12 VÀ UNG THƯ",
      content:
        " Vitamin B12 là một loại vitamin tan trong nước mà cơ thể cần với lượng nhỏ để duy trì hoạt động. Tuy nhiên có nhiều thông tin liên quan giữa ung thư và vitamin B12 khiến cho nhiều người còn băn khoăn về việc sử dụng vitamin này.",
      imageDT: "image1.jpg",
      categories: "Ung Bướu",
      date: "15/08/2024",
      view: 34767,
      shared: 100,
      iconView: <Ionicons name="eye" size={20} />,
      iconShared: <FontAwesome name="share-alt" size={20} />,
    },
    {
      title: "VITAMIN B12 VÀ UNG THƯ",
      content:
        " Vitamin B12 là một loại vitamin tan trong nước mà cơ thể cần với lượng nhỏ để duy trì hoạt động. Tuy nhiên có nhiều thông tin liên quan giữa ung thư và vitamin B12 khiến cho nhiều người còn băn khoăn về việc sử dụng vitamin này.",
      imageDT: "image1.jpg",
      categories: "Ung Bướu",
      date: "15/08/2024",
      view: 34767,
      shared: 100,
      iconView: <Ionicons name="eye" size={20} />,
      iconShared: <FontAwesome name="share-alt" size={20} />,
    },
    {
      title: "VITAMIN B12 VÀ UNG THƯ",
      content:
        " Vitamin B12 là một loại vitamin tan trong nước mà cơ thể cần với lượng nhỏ để duy trì hoạt động. Tuy nhiên có nhiều thông tin liên quan giữa ung thư và vitamin B12 khiến cho nhiều người còn băn khoăn về việc sử dụng vitamin này.",
      imageDT: "image1.jpg",
      categories: "Ung Bướu",
      date: "15/08/2024",
      view: 34767,
      shared: 100,
      iconView: <Ionicons name="eye" size={20} />,
      iconShared: <FontAwesome name="share-alt" size={20} />,
    },
  ];

  const buttonData = [
    {
      id: 1,
      buttonName: "Đặt Khám Tại Bệnh Viện",
      icon: <FontAwesome name="calendar-plus-o" size={25} />,
    },
    {
      id: 2,
      buttonName: "Xem Kết Quả Khám",
      icon: <MaterialIcons name="screen-search-desktop" size={25} />,
    },
    {
      id: 3,
      buttonName: "Đặt Khám Tại Bệnh Viện",
      icon: <FontAwesome5 name="hospital-user" size={25} />,
    },
    {
      id: 4,
      buttonName: "Quy Trình Khám",
      icon: <Octicons name="workflow" size={25} />,
    },
  ];

  const renderOption = ({ item }) => {
    <TouchableOpacity style={styles.itemOption}>
      {item.icon}
      <Text>{item.buttonName}</Text>
    </TouchableOpacity>;
  };
  console.log(buttonData);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FontAwesome name="heartbeat" size={45} color={"#F05A7E"} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Bạn đang tìm gì?"
            placeholderTextColor={"#a5a4a4"}
          />
          <Ionicons
            name="mic"
            size={24}
            color="#a5a4a4"
            style={styles.micIcon}
          />
        </View>
      </View>
      <View style={styles.viewOption}>
        <FlatList
          data={buttonData}
          renderItem={renderOption}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: "100%",
    height: "14%",
    backgroundColor: "#125B9A",
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "rgba(158, 150, 200, .3)",
    borderWidth: 2,
    width: "82%",
    height: 45,
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

  viewOption: {
    flexDirection: "row",
    width: "100%",
    height: "13%",
    backgroundColor: "#009688",
  },
  itemOption: {
    width: 40,
    height: 60,
    flexDirection: "column",
    alignItems: "center",
  },
});
