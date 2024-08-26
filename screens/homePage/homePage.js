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
      id: 1,
      title: "VITAMIN B12 VÀ UNG THƯ",
      content:
        " Vitamin B12 là một loại vitamin tan trong nước mà cơ thể cần với lượng nhỏ để duy trì hoạt động. Tuy nhiên có nhiều thông tin liên quan giữa ung thư và vitamin B12 khiến cho nhiều người còn băn khoăn về việc sử dụng vitamin này.",
      imageDT: "../../assets/img/content/image1.jpg",
      categories: "Ung Bướu",
      date: "15/08/2024",
      view: 34767,
      shared: 100,
      iconView: <Ionicons name="eye" size={20} />,
      iconShared: <FontAwesome name="share-alt" size={20} />,
    },
    {
      id: 2,
      title: "VITAMIN B12 VÀ UNG THƯ",
      content:
        " Vitamin B12 là một loại vitamin tan trong nước mà cơ thể cần với lượng nhỏ để duy trì hoạt động. Tuy nhiên có nhiều thông tin liên quan giữa ung thư và vitamin B12 khiến cho nhiều người còn băn khoăn về việc sử dụng vitamin này.",
      imageDT: "../../assets/img/content/image1.jpg",
      categories: "Ung Bướu",
      date: "15/08/2024",
      view: 34767,
      shared: 100,
      iconView: <Ionicons name="eye" size={20} />,
      iconShared: <FontAwesome name="share-alt" size={20} />,
    },
    {
      id: 3,
      title: "VITAMIN B12 VÀ UNG THƯ",
      content:
        " Vitamin B12 là một loại vitamin tan trong nước mà cơ thể cần với lượng nhỏ để duy trì hoạt động. Tuy nhiên có nhiều thông tin liên quan giữa ung thư và vitamin B12 khiến cho nhiều người còn băn khoăn về việc sử dụng vitamin này.",
      imageDT: "../../assets/img/content/image1.jpg",
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
      buttonName: "Đặt Khám",
      icon: <FontAwesome name="calendar-plus-o" size={30} color={"#125B9A"} />,
    },
    {
      id: 2,
      buttonName: "Kết Quả",
      icon: (
        <MaterialIcons
          name="screen-search-desktop"
          size={30}
          color={"#125B9A"}
        />
      ),
    },
    {
      id: 3,
      buttonName: "Thứ Tự",
      icon: <FontAwesome5 name="hospital-user" size={30} color={"#125B9A"} />,
    },
    {
      id: 4,
      buttonName: "Quy Trình",
      icon: <Octicons name="workflow" size={30} color={"#125B9A"} />,
    },
  ];

  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.itemOption}>
      {item.icon}
      <Text style={{ top: 10, fontSize: 11 }}>{item.buttonName}</Text>
    </TouchableOpacity>
  );

  const rederData = ({ item }) => (
    <TouchableOpacity style={styles.itemData}>
      <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text>{item.title}</Text>
          <Text>{item.content}</Text>
        </View>
        <View style={{ width: "100%", height: "100%" }}>
          <Image style={{ width: 30, height: 30 }} source={item.imageDT} />
        </View>
      </View>
    </TouchableOpacity>
  );

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
          style={{ width: "100%", height: "100%" }}
          horizontal={true}
          data={buttonData}
          renderItem={renderOption}
          keyExtractor={(item) => item.id}
          scrollEnabled="false"
        />
      </View>
      <View style={styles.newsView}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Text style={{ fontSize: 16 }}>Bài Viết Nổi Bật</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: "#307ec2" }}>Xem Thêm</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{ width: "100%", height: "100%" }}
          horizontal={false}
          data={data}
          renderItem={rederData}
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
    width: "95%",
    height: "15%",
    alignContent: "center",
    justifyContent: "center",
    top: 10,
  },
  itemOption: {
    width: 80,
    height: 80,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    margin: 9,
    shadowOpacity: 0.5,
    shadowColor: "#0c66af",
    shadowRadius: 4,
  },
  newsView: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  itemData: {
    display: "flex",
    flexDirection: "row",
    height: 80,
    width: 80,
  },
});
