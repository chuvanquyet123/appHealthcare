import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ReminderComponent() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
        {/* Calendar Navigation */}
        <View style={styles.calendarNav}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
          <Text style={styles.monthText}>Tháng 08/2024</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </View>
  
        {/* Date Picker */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.datePicker}>
          {['Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7', 'CN'].map((day, index) => (
            <View key={index} style={index === 1 ? styles.dateItemSelected : styles.dateItem}>
              <Text style={styles.dateText}>{day}</Text>
              <Text style={styles.dateNumber}>{19 + index}</Text>
            </View>
          ))}
        </ScrollView>
  
        {/* Current Day Reminder */}
        <Text style={styles.currentDayText}>Hôm nay, Th 3, 20/08</Text>
  
        {/* Reminder Times */}
        <View style={styles.reminderTimes}>
          <Text style={styles.reminderText}>Lịch uống thuốc hôm nay:</Text>
          {['7:00', '13:00', '20:00'].map((time, index) => (
            <Text key={index} style={styles.timeText}>{`> ${time}`}</Text>
          ))}
        </View>
  
        {/* Manage Reminders Button */}
        <TouchableOpacity style={styles.manageButton}>
          <Ionicons name="alarm-outline" size={18} color="#FFF" />
          <Text style={styles.manageButtonText}>Quản lý nhắc nhở</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5',
    },
    header: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    datePicker: {
      flexDirection: 'row',
      marginVertical: 20,
    },
    dateItem: {
      alignItems: 'center',
      marginHorizontal: 10,
    },
    dateText: {
      fontSize: 16,
      color: '#000',
    },
    dateNumber: {
      fontSize: 16,
      color: '#000',
    },
    reminderTimes: {
      paddingVertical: 20,
    },
    reminderText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    timeText: {
      fontSize: 16,
      marginVertical: 5,
    },
    manageButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    manageButtonText: {
      color: '#FFF',
      fontSize: 16,
    },
  })