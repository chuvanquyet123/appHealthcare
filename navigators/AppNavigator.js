import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/LogInPage/loginPage";
import homePage from "../screens/HomePage/homePage";
import profilePage from "../screens/ProfilePage/profilePage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false,}}>
      <Tab.Screen name="Trang Chủ" component={homePage} options={{tabBarIcon:({}) =>(<Feather name="home" size={25} color={'black'}/>),}}/>
      <Tab.Screen name="Profile" component={profilePage} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
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
