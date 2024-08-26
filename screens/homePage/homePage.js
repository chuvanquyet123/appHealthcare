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
  Image,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import itemHome from "./itemHome";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <FontAwesome name="heartbeat" size={45} color={"#F05A7E"} />
        <TextInput
          style={styles.input}
          placeholder="Bạn đang tìm gì?"
          placeholderTextColor={"#a5a4a4"}
        ></TextInput>
        <Ionicons name="mic" size={30} />
      </View>
      <Text>Đây này</Text>
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
  input: {
    height: 45,
    width: "82%",
    paddingVertical: 7,
    paddingHorizontal: 7,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    fontSize: 16,
    borderColor: "rgba(158, 150, 200, .3)",
    borderWidth: 2,
    opacity: 2,
    zIndex: -1,
    position: "absolute",
  },
});
