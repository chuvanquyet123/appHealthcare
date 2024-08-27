import React, { useState, useEffect } from "react";
import AppNavigator from "./navigators/AppNavigator";
import * as Notifications from "expo-notifications";

// Lắng nghe khi notification được nhận
useEffect(() => {
  // Trường hợp foreground
  const foregroundSubscription = Notifications.addNotificationReceivedListener(
    () => {
      navigation.navigate("GiaoDien");
    }
  );

  // Trường hợp background hoặc khi ứng dụng bị đóng
  const backgroundSubscription =
    Notifications.addNotificationResponseReceivedListener(() => {
      navigation.navigate("GiaoDien");
    });

  return () => {
    foregroundSubscription.remove();
    backgroundSubscription.remove();
  };
}, [navigation]);
export default function App() {
  return <AppNavigator />;
}
