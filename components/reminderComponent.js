import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

export default function ReminderComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const monthNames = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  //const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

  const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

  const navigation = useNavigation();
    const handleClick = () => {
        const dateToSend = selectedDate || new Date().toISOString().split('T')[0]; // Lấy ngày hiện tại nếu không có ngày được chọn
        const [year, month, day] = dateToSend.split('-');
        // Chuyển tới Reminder screen và truyền dữ liệu ngày tháng năm
        navigation.navigate("Reminder", {
            year: parseInt(year, 10),
            month: parseInt(month, 10),
            day: parseInt(day, 10),
        });
    };
  const handleTimeClick = (time) => {
    setSelectedTime(time === selectedTime ? null : time); // Toggle visibility
  };
  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#007BFF",
            selectedTextColor: "#ffffff",
          },
        }}
        theme={{
          arrowColor: "#007BFF",
          todayTextColor: "#007BFF",
        }}
        renderHeader={(date) => {
          const month = date.toLocaleString("default", { month: "long" });
          return (
            <Text style={styles.headerText}>
              {monthNames[date.getMonth()]} {date.getFullYear()}
            </Text>
          );
        }}
      />
      <Text style={styles.currentDayText}>
        Hôm nay, {dayNames[new Date().getDay()]}, {new Date().getDate()}/
        {new Date().getMonth() + 1}
      </Text>

      <View style={styles.reminderTimes}>
        <Text style={styles.reminderText}>Lịch uống thuốc hôm nay:</Text>
        {["7:00", "13:00", "20:00"].map((time, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => handleTimeClick(time)}>
              <Text style={styles.timeText}>{`> ${time}`}</Text>
            </TouchableOpacity>

            {selectedTime === time && (
              <View style={styles.additionalInfo}>
                <Text style={styles.additionalText}>
                  Bạn đã uống thuốc chưa?
                </Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.buttonGreen}>
                    <Text style={styles.buttonText}>Đã uống</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonRed}>
                    <Text style={styles.buttonText}>Chưa uống</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.manageButton} onPress={handleClick}>
        <Ionicons name="alarm-outline" size={24} color="#FFF" />
        <Text style={styles.manageButtonText}>Quản lý nhắc nhở</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  calendar: {
    width: "100%",
    height: 350,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
    textAlign: "center",
    paddingVertical: 10,
  },
  dayContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    fontSize: 16,
  },
  dayWeekText: {
    fontSize: 14,
    color: "#707070",
  },
  currentDayText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 10,
  },
  reminderTimes: {
    paddingVertical: 20,
  },
  reminderText: {
    fontSize: 16,
    fontWeight: "600",
  },
  timeText: {
    fontSize: 16,
    marginVertical: 5,
  },
  additionalInfo: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  additionalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonGreen: {
    backgroundColor: "#5cb85c",
    padding: 10,
    borderRadius: 5,
  },
  buttonRed: {
    backgroundColor: "#d9534f",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  manageButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#007BFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  manageButtonText: {
    color: "#FFF",
    fontSize: 24,
    marginLeft: 5,
    fontWeight: "600",
  },
});
