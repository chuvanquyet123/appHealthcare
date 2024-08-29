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
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function HomePage() {
  const data = [
    {
      id: 1,
      title: "VITAMIN B12 VÀ UNG THƯ",
      content:
        "Vitamin B12 là một loại vitamin tan trong nước mà cơ thể cần với lượng nhỏ để duy trì hoạt động. Tuy nhiên có nhiều thông tin liên quan giữa ung thư và vitamin B12 khiến cho nhiều người còn băn khoăn về việc sử dụng vitamin này.",
      imageDT:
        "https://benhvienk.vn/data/media/1601/images/301613023_1745507439143960_3302390759148731262_n.jpg",
      categories: "Ung Bướu",
      date: "15/08/2024",
      view: 34767,
      shared: 100,
      iconView: <Ionicons name="eye" size={20} />,
      iconShared: <FontAwesome name="share-alt" size={20} />,
    },
    {
      id: 2,
      title: "ĂN MẶN LÀ THÓI QUEN GÂY HẠI CHO SỨC KHOẺ",
      content:
        "Hiện nay, người Việt Nam đang ăn khoảng 12-15g muối/ngày, cao gấp 2-3 lần khuyến cáo của Tổ chức Y tế thế giới. Theo khuyến cáo của WHO, người trưởng thành khỏe mạnh nên ăn dưới 5g muối/ngày. Đối với trẻ nhỏ dưới 1 tuổi, chỉ nên ăn dưới 1g muối/ngày, trẻ từ 1-3 tuổi nên ăn 3g/ngày, trẻ > 7 tuổi thì ăn lượng muối như người trưởng thành. ",
      imageDT: "https://benhvienk.vn/data/media/1601/images/mu%E1%BB%91i.jpg",
      categories: "Sống Khoẻ",
      date: "27/06/2024",
      view: 45347,
      shared: 189,
      iconView: <Ionicons name="eye" size={20} />,
      iconShared: <FontAwesome name="share-alt" size={20} />,
    },
    {
      id: 3,
      title: "LÁ ĐU ĐỦ VÀ UNG THƯ",
      content:
        "Cây đu đủ rất phổ biến ở các nước vùng nhiệt đới. Toàn thân cây đu đủ đều có thể sử dụng được để làm thực phẩm hoặc thuốc, mỹ phẩm. Lá của đu đủ chứa nhiều vitamin tan trong chất béo (A, D, E và K); vitamin B và C; và các khoáng chất như sắt, natri và magiê.",
      imageDT:
        "https://benhvienk.vn/data/media/1601/images/la-du-du-ok_yofu.jpg",
      categories: "Ung Bướu",
      date: "20/08/2024",
      view: 56127,
      shared: 130,
      iconView: <Ionicons name="eye" size={20} />,
      iconShared: <FontAwesome name="share-alt" size={20} />,
    },
  ];

  const buttonData = [
    {
      id: 1,
      buttonName: "Lịch Khám",
      icon: <FontAwesome name="calendar-plus-o" size={30} color={"#3795BD"} />,
    },
    {
      id: 2,
      buttonName: "Kết Quả",
      icon: (
        <MaterialIcons
          name="screen-search-desktop"
          size={30}
          color={"#3795BD"}
        />
      ),
    },
    {
      id: 3,
      buttonName: "Thứ Tự",
      icon: <FontAwesome5 name="hospital-user" size={30} color={"#3795BD"} />,
    },
    {
      id: 4,
      buttonName: "Quy Trình",
      icon: <Octicons name="workflow" size={30} color={"#3795BD"} />,
    },
  ];

  const renderOption = ({ item }) => (
    <TouchableOpacity style={styles.itemOption}>
      {item.icon}
      <Text style={{ top: 10, fontSize: 11 }}>{item.buttonName}</Text>
    </TouchableOpacity>
  );

  const rederData = ({ item }) => (
    <TouchableOpacity style={styles.itemView}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ height: 100, width: "70%" }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 18,
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
              lineHeight: 21,
              fontWeight: "bold",
              letterSpacing: 0.25,
            }}
          >
            {item.title}
          </Text>
          <Text numberOfLines={4} ellipsizeMode="tail">
            {item.content}
          </Text>
        </View>
        <Image style={{ width: 100, height: 100 }} src={item.imageDT} />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item.categories}</Text>
        <View style={styles.iconItem}>
          <Text>{item.date}</Text>
          {item.iconView}
          <Text>{item.view}</Text>
          {item.iconShared}
          <Text>{item.shared}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={{ width: 50, height: 50, top: 5, tintColor: "#ffffff" }}
          source={require("../../assets/img/logo/logo.png")}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Bạn đang tìm gì?"
            placeholderTextColor={"#cac8c8"}
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
            height: 30,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Bài Viết Nổi Bật
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: "#3795BD",
                textDecorationLine: "underline",
              }}
            >
              Xem Thêm
            </Text>
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
    height: "13.2%",
    backgroundColor: "#3795BD",
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
    shadowColor: "#4a5540a6",
    shadowRadius: 4,
  },
  newsView: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  itemView: {
    display: "flex",
    width: "95%",
    height: 150,
    shadowRadius: 10,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    left: 10,
  },
  iconItem: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
