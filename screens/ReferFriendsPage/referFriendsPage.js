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
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function ReferFriends() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ left: 0 }} onPress={handleBackPress}>
          <Ionicons name="chevron-back" size={25} color={"white"} />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "white",
            width: "60%",
          }}
        >
          Mời Bạn
        </Text>
      </View>
      <ScrollView
        style={styles.referList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }} // paddingBottom để tránh dính vào bottom tab
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: "column", width: "100%", padding: 10 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: "#2787b4",
            }}
          >
            Hãy giới thiệu My HealUP tới bạn bè ngay!
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, top: 20 }}>
            Để cùng trải nghiệm dịch vụ tư vấn từ xa và chăm sóc sức khoẻ hiệu
            quả mọi lúc mọi nơi ngay trên điện thoại
          </Text>
        </View>
        <View style={{ marginTop: 30, width: "100%", height: "15%" }}>
          <Text style={{ fontWeight: "bold" }}>Gửi mã giới thiệu của bạn</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: "60%",
              alignItems: "center",
              borderBottomColor: "#797878",
              borderBottomWidth: 1,
            }}
          >
            <Text>0332123459988</Text>
            <TouchableOpacity
              style={{
                width: "35%",
                height: "70%",
                backgroundColor: "#3795BD",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>
                Sao Chép
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itemRefer}>
          <View
            style={{
              width: "47%",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#3795BD", fontWeight: "800" }}>
              Tải ứng dụng Bệnh nhân
            </Text>
            <Text>
              Quét mã QR bên cạnh hoặc tìm kiếm từ khoá{" "}
              <Text style={{ fontWeight: "bold", fontSize: 12.5 }}>
                My HealUP
              </Text>{" "}
              trên CH Play hoặc Apps Store
            </Text>
            <TouchableOpacity
              style={{
                width: "90%",
                height: 40,
                backgroundColor: "#3795BD",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Chia sẻ Link</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "55%",
              height: "100%",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Image
              style={{ width: "80%", height: "85%" }}
              source={require("../../assets/img/content/info.jpg")}
            />
            <TouchableOpacity>
              <Text style={{ textDecorationLine: "underline" }}>Phóng to</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itemRefer}>
          <View
            style={{
              width: "47%",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#3795BD", fontWeight: "800" }}>
              Tải ứng dụng Bác sĩ
            </Text>
            <Text>
              Quét mã QR bên cạnh hoặc tìm kiếm từ khoá{" "}
              <Text style={{ fontWeight: "bold", fontSize: 12.5 }}>
                Our Health Doctor
              </Text>{" "}
              trên CH Play hoặc Apps Store
            </Text>
            <TouchableOpacity
              style={{
                width: "90%",
                height: 40,
                backgroundColor: "#3795BD",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white" }}>Chia sẻ Link</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "55%",
              height: "100%",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Image
              style={{ width: "80%", height: "85%" }}
              source={require("../../assets/img/content/info.jpg")}
            />
            <TouchableOpacity>
              <Text style={{ textDecorationLine: "underline" }}>Phóng to</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    justifyContent: "space-between",
    paddingBottom: 13,
    paddingHorizontal: 16,
  },
  referList: {
    flex: 1,
    height: "100%",
    backgroundColor: "#f0f0f0",
  },
  itemRefer: {
    flexDirection: "row",
    width: "100%",
    height: "35%",
    padding: 10,
    marginBottom: 20,
  },
});
