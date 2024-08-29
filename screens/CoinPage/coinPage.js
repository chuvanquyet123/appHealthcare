import React, { useState } from "react";
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
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Coin() {
  const navigation = useNavigation();
  const [showCoin, setShowCoin] = useState(false);
  function handleShowCoin() {
    setShowCoin(!showCoin);
  }

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
            width: "65%",
          }}
        >
          Quản Lý Xu
        </Text>
      </View>
      <View
        style={{ backgroundColor: "#f0f0f0", width: "100%", height: "100%" }}
      >
        <View style={styles.profile}>
          <View style={styles.avatar}></View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Nguyễn Đình Kiên</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                height: "50%",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.age}>Số dư tài Khoản (Xu)</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "30%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {showCoin ? (
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#1b5f9b",
                    }}
                  >
                    652
                  </Text>
                ) : (
                  <Text>****</Text>
                )}
                <TouchableOpacity onPress={handleShowCoin}>
                  {showCoin ? (
                    <Ionicons name="eye-outline" size={26} />
                  ) : (
                    <Ionicons name="eye-off-outline" size={26} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.CoinButtonView}>
          <TouchableOpacity style={[styles.button, styles.buttonColor]}>
            <Text style={{ fontWeight: "bold", color: "white" }}>Nạp Xu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontWeight: "bold", color: "white" }}>Tặng Xu</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            height: "5%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Lịch Sử Giao Dịch</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              width: "20%",
            }}
          >
            <MaterialCommunityIcons name="filter" size={28} color={"#1b428b"} />
            <Text style={{ fontWeight: "bold", color: "#2366e0" }}>Bộ Lọc</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: "space-between",
    paddingBottom: 13,
    paddingHorizontal: 16,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    height: "10%",
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "#c4c4c4",
    borderRadius: 25,
  },
  profileInfo: {
    flex: 1,
    height: "100%",
    marginLeft: 16,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  age: {
    fontSize: 14,
    color: "#030303",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  CoinButtonView: {
    flexDirection: "row",
    width: "100%",
    height: "8%",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffff",
  },
  button: {
    width: "35%",
    height: "70%",
    backgroundColor: "#1b5f9b",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonColor: {
    backgroundColor: "#797979",
  },
});
