import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HistoryComponent() {
  const dataHistory = [
    {
      id: 1,
      title: "Đơn thuốc đau dạ dày",
      time: "25-08-2024 đến 30-08-2024",
      total: 10,
      perday: "Mỗi ngày 2 liều, mỗi loại 1 viên( cho 1 liều), sáng và tối",
      medicine_name: "Nova Curmin, Cumargold",
      status: "Đã xong",
      color: "#2ca015",
    },
    {
      id: 2,
      title: "Đơn thuốc cao huyết áp",
      time: "30-08-2024 đến 10-09-2024",
      total: 22,
      perday: "Mỗi ngày 2 liều, mỗi loại 1 viên( cho 1 liều), sáng và tối",
      medicine_name: "Stadovas, Kavasdin",
      status: "Trong quá trình",
      color: "#b1395d",
    },
  ];

  const handleData = ({ item }) => (
    <View
      style={{
        width: "100%",
        height: 150,
        //backgroundColor: "#5e5d5d62",
        flexDirection: "row",
        padding: 10,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          width: "50%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
        <Text>
          <Text style={{ fontWeight: "700" }}>Tổng Liều:</Text> {item.total}
        </Text>
        <Text>
          <Text style={{ fontWeight: "700" }}>Cách Uống:</Text> {item.perday}
        </Text>
        <Text>
          <Text style={{ fontWeight: "700" }}>Tên thuốc:</Text>{" "}
          {item.medicine_name}
        </Text>
      </View>
      <View
        style={{
          width: "50%",
          height: "100%",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", color: item.color }}>
          {item.status}
        </Text>
        <Text>{item.time}</Text>
      </View>
    </View>
  );
  return (
    <View style={{ width: "auto", height: "100%", backgroundColor: "#f0f0f0" }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Lịch Sử</Text>
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
      <FlatList
        //style={{ width: "100%", height: "100%" }}
        horizontal={false}
        data={dataHistory}
        renderItem={handleData}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
