import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Notifications from "expo-notifications";
import { Feather, Entypo } from "@expo/vector-icons";
import LogIn from "../screens/LogInPage/loginPage";
import HomePage from "../screens/HomePage/homePage";
import ProfilePage from "../screens/ProfilePage/profilePage";
import ChatPage from "../screens/chatPage/chatPage";
import CalendarPage from "../screens/CalendarPage/calendarPage";
import ReminderPage from "../screens/ReminderPage/reminderPage";
import Repeat from "../components/repeatComponent";
import Alarm from "../components/alarmComponent";
import Coin from "../screens/CoinPage/coinPage";
import ReferFriends from "../screens/ReferFriendsPage/referFriendsPage";
import ProfileDetail from "../components/profileDetailComponent";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const CalendarStack = createNativeStackNavigator();

function CalendarStackScreen() {
  return (
    <CalendarStack.Navigator screenOptions={{ headerShown: false }}>
      <CalendarStack.Screen name="CalendarPage" component={CalendarPage} />
      <CalendarStack.Screen name="Reminder" component={ReminderPage} />
      <CalendarStack.Screen name="Repeat" component={Repeat} />
      <CalendarStack.Screen name="Alarm" component={Alarm} />
    </CalendarStack.Navigator>
  );
}
function ProfileScreen() {
  return (
    <CalendarStack.Navigator screenOptions={{ headerShown: false }}>
      <CalendarStack.Screen name="Profile" component={ProfilePage} />
      <CalendarStack.Screen name="Coin" component={Coin} />
      <CalendarStack.Screen name="ReferFriends" component={ReferFriends} />
      <CalendarStack.Screen name="ProfileDetail" component={ProfileDetail} />
    </CalendarStack.Navigator>
  );
}

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
        name="Đoạn Chat"
        component={ChatPage}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="chat" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lịch Uống Thuốc"
        component={CalendarStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cá Nhân"
        component={ProfileScreen}
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
  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const { status: newStatus } =
          await Notifications.requestPermissionsAsync();
        if (newStatus !== "granted") {
          alert("Bạn cần cấp quyền thông báo để sử dụng tính năng này.");
          return;
        }
      }
    };

    requestPermissions();

    const notificationListener = Notifications.addNotificationReceivedListener(
      (notification) => {}
    );

    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {});

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
