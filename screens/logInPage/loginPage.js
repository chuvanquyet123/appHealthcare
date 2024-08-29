import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("MainTabs");
    // if (username === "abc@gmail.com" && password === "abcabcabc") {
    //   navigation.navigate("MainTabs");
    // } else {
    //   alert("Sai tài khoản hoặc mật khẩu!");
    // }
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{ width: "100%", height: 200 }}
          source={require("../../assets/img/logo/logo.jpg")}
        ></Image>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder="Nhập số điện thoại hoặc email"
          placeholderTextColor={"#a5a4a4"}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Nhập mật khẩu"
          secureTextEntry={true}
          placeholderTextColor={"#a5a4a4"}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.text}>Đăng Nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="fingerprint"
              size={45}
              color={"#616161"}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ height: 50, alignItems: "center" }}>
          <Text style={{ fontFamily: "cursive" }}>Bạn Quên Mật Khẩu..?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.otherOption}>
        <Text style={{ fontFamily: "cursive" }}>Bạn chưa có tài khoản..?</Text>
        <TouchableOpacity>
          <Text style={{ color: "#327fb3", fontFamily: "cursive" }}>
            Đăng Ký
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    alignItems: "flex-start",
    justifyContent: "flex-end",
    width: 150,
    height: "37%",
  },
  inputContainer: {
    display: "flex",
    alignItems: "stretch",
    width: "80%",
    height: "40%",
    justifyContent: "space-evenly",
  },

  input: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    fontSize: 16,
    borderColor: "rgba(158, 150, 200, .3)",
    borderWidth: 2,
    opacity: 2,
  },
  font_text: {
    fontSize: 20,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#096aac",
    width: "80%",
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  otherOption: {
    display: "flex",
    flexDirection: "row",
    Height: "50%",
    width: "60%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
