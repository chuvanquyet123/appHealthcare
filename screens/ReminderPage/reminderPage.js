// AddReminderScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddReminderScreen = () => {
  const [description, setDescription] = useState('');
  const [time, setTime] = useState(new Date());
  const [repeat, setRepeat] = useState('Không lặp lại');
  const [sound, setSound] = useState('Mặc định');
  const [vibrate, setVibrate] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentTime);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Thêm nhắc nhở</Text>
      </View>

      {/* Reminder Description Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mô tả nhắc nhở</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập nhắc nhở"
          value={description}
          onChangeText={setDescription}
        />
      </View>

      {/* Time Picker */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Thời gian nhắc nhở</Text>
        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={styles.timePicker}>
          <Text style={styles.timeText}>{time.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DateTimePicker
            value={time}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}
      </View>

      {/* Repeat Option */}
      <View style={styles.optionContainer}>
        <Text style={styles.label}>Lặp lại</Text>
        <Picker
          selectedValue={repeat}
          onValueChange={(itemValue) => setRepeat(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Không lặp lại" value="Không lặp lại" />
          <Picker.Item label="Hàng ngày" value="Hàng ngày" />
          <Picker.Item label="Hàng tuần" value="Hàng tuần" />
        </Picker>
      </View>

      {/* Sound Option */}
      <View style={styles.optionContainer}>
        <Text style={styles.label}>Âm báo</Text>
        <Picker
          selectedValue={sound}
          onValueChange={(itemValue) => setSound(itemValue)}
          style={styles.picker}>
          <Picker.Item label="Mặc định" value="Mặc định" />
          <Picker.Item label="Chuông 1" value="Chuông 1" />
          <Picker.Item label="Chuông 2" value="Chuông 2" />
        </Picker>
      </View>

      {/* Vibration Toggle */}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Rung</Text>
        <Switch
          value={vibrate}
          onValueChange={setVibrate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
  },
  timePicker: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  timeText: {
    fontSize: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 150,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default AddReminderScreen;
