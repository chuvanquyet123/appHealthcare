import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfilePage() {
  const data = [
    {
      key: "Quản lý xu",
      screen: "Coin",
      icon: <FontAwesome5 name="coins" size={24} color="#f45d22" />,
    },
    {
      key: "Hồ sơ người thân",
      icon: <MaterialIcons name="family-restroom" size={24} color="#3c89f5" />,
    },
    {
      key: "Nhắc nhở uống thuốc",
      icon: <MaterialIcons name="medication" size={24} color="#ff4d4f" />,
    },
    {
      key: "Tạo nhắc nhở",
      icon: <Feather name="bell" size={24} color="#4caf50" />,
    },
    {
      key: "Đổi mật khẩu",
      icon: <Feather name="lock" size={24} color="#009688" />,
    },
    {
      key: "Các thiết bị đã đăng nhập",
      icon: <Feather name="smartphone" size={24} color="#3c89f5" />,
    },
    {
      key: "Tùy chỉnh theo dõi sức khỏe",
      icon: <Feather name="activity" size={24} color="#ff5722" />,
    },
    {
      key: "Chính sách của công ty",
      icon: <MaterialIcons name="policy" size={24} color="#ff9800" />,
    },
    {
      key: "Giới thiệu bạn bè",
      screen: "ReferFriends",
      icon: <FontAwesome5 name="user-friends" size={24} color="#ff1744" />,
    },
    {
      key: "Về chúng tôi",
      icon: <Feather name="info" size={24} color="#009688" />,
    },
  ];
  const navigation = useNavigation();
  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handlePress(item.screen)}
    >
      {item.icon}
      <Text style={styles.text}>{item.key}</Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.profile}>
      <View style={styles.avatar}></View>
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Nguyễn Đình Kiên</Text>
        <Text style={styles.age}>Nam, 21 tuổi</Text>
      </View>
      <TouchableOpacity>
        <Feather name="edit" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Hồ sơ cá nhân</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#125B9A",
  },
  headerContainer: {
    paddingHorizontal: 16,
    backgroundColor: "#125B9A",
    elevation: 2,
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 20,
    textAlign: "center",
    color: "#fff",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "#c4c4c4",
    borderRadius: 25,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  age: {
    fontSize: 14,
    color: "#888",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    marginLeft: 8,
  },
  flatListContent: {
    paddingTop: 16,
  },
});
