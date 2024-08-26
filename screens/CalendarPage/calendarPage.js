import React from "react";
import { View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ReminderComponent from "../../components/reminderComponent";
import HistoryComponent from "../../components/historyComponent";

export default function CalendarPage() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: { backgroundColor: '#FFF' },
          tabBarIndicatorStyle: { backgroundColor: '#007BFF' },
        }}
      >
        <Tab.Screen name="Nhắc nhở" component={ReminderComponent} />
        <Tab.Screen name="Lịch sử uống thuốc" component={HistoryComponent} />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
})