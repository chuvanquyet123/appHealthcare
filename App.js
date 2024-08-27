import React,{useEffect} from "react";
import AppNavigator from "./navigators/AppNavigator";
import * as Notifications from 'expo-notifications';
import { useNavigation, useRoute } from "@react-navigation/native";

const navigation = useNavigation();

// Lắng nghe khi notification được nhận
useEffect(() => {
  // Trường hợp foreground
  const foregroundSubscription = Notifications.addNotificationReceivedListener(() => {
    navigation.navigate('Alarm');
  });

  // Trường hợp background hoặc khi ứng dụng bị đóng
  const backgroundSubscription = Notifications.addNotificationResponseReceivedListener(() => {
    navigation.navigate('Alarm');
  });

  return () => {
    foregroundSubscription.remove();
    backgroundSubscription.remove();
  };
}, [navigation]);
export default function App() {
  return <AppNavigator />;
}