import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileDetail() {
  const [gender, setGender] = useState("Nam");
  const [city, setCity] = useState("Tỉnh Bắc Ninh");
  const [district, setDistrict] = useState("Quận/Huyện");
  const [ward, setWard] = useState("Xã/Phường");

  const [openGender, setOpenGender] = useState(false);
  const [openCity, setOpenCity] = useState(false);
  const [openDistrict, setOpenDistrict] = useState(false);
  const [openWard, setOpenWard] = useState(false);
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={{ left: 0 }} onPress={handleBackPress}>
          <Ionicons name="chevron-back" size={25} color={"white"} />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "white",
            width: "70%",
          }}
        >
          Thông tin người bệnh
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.inputFull}
          placeholder="Họ tên"
          defaultValue="Nguyễn Đình Kiên"
        />

        <View style={styles.row}>
          <TextInput
            style={styles.inputHalf}
            placeholder="Ngày sinh"
            defaultValue="16/05/2004"
          />
          <DropDownPicker
            open={openGender}
            value={gender}
            items={[
              { label: "Nam", value: "Nam" },
              { label: "Nữ", value: "Nữ" },
            ]}
            setOpen={setOpenGender}
            setValue={setGender}
            style={styles.dropdownHalf}
            containerStyle={{ width: "48%" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <TextInput
            style={styles.inputHalf}
            placeholder="Số điện thoại"
            defaultValue="0345611350"
            keyboardType="phone-pad"
          />

          <TextInput
            style={styles.inputHalf}
            placeholder="CMT/CCCD"
            keyboardType="number-pad"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <DropDownPicker
            open={openCity}
            value={city}
            items={[
              { label: "Tỉnh Bắc Ninh", value: "Tỉnh Bắc Ninh" },
              // Add more cities here
            ]}
            setOpen={setOpenCity}
            setValue={setCity}
            style={{ marginBottom: 15 }}
            containerStyle={{ width: "48%" }}
          />

          <DropDownPicker
            open={openDistrict}
            value={district}
            items={[
              { label: "Huyện Yên Phong", value: "Quận/Huyện" },
              // Add more districts here
            ]}
            setOpen={setOpenDistrict}
            setValue={setDistrict}
            style={{ marginBottom: 15 }}
            containerStyle={{ width: "48%" }}
          />
        </View>
        <DropDownPicker
          open={openWard}
          value={ward}
          items={[
            { label: "Xã Đông Tiến", value: "Xã/Phường" },
            // Add more wards here
          ]}
          setOpen={setOpenWard}
          setValue={setWard}
          style={styles.dropdownFull}
        />

        <TextInput style={styles.inputFull} placeholder="Địa chỉ" />

        <TextInput style={styles.inputFull} placeholder="Người giám hộ" />

        <TextInput
          style={styles.inputFull}
          placeholder="SDT người giám hộ"
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Lưu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputFull: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  inputHalf: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "48%",
  },
  dropdownFull: {
    marginBottom: 15,
  },
  dropdownHalf: {
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#3795BD",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "50%",
    justifyContent: "center",
    alignSelf: "center",
    margin: 40,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
