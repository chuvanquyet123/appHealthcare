import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HistoryComponent() {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        backgroundColor: "#f0f0f0",
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
  );
}

const styles = StyleSheet.create({});
