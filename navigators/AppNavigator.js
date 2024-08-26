import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Entypo } from "@expo/vector-icons";
import LogIn from "../screens/LogInPage/loginPage";
import HomePage from "../screens/HomePage/homePage";
import ProfilePage from "../screens/ProfilePage/profilePage";
import ChatPage from "../screens/chatPage/chatPage";
import CalendarPage from "../screens/CalendarPage/calendarPage";
import ReminderPage from "../screens/ReminderPage/reminderPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Trang Chủ"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Hội Thoại"
        component={ChatPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lịch Uống Thuốc"
        component={CalendarPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cá Nhân"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LogIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MainTabs"
          component={MainTabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Reminder"
          component={ReminderPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
