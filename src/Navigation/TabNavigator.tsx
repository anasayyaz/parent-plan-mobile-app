import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import CalenderScreen from "../Screens/CalenderScreen";
import Colors from "../assets/Colors";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: styles.tabBarStyles,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {
            fontWeight: route.name === "active" ? "bold" : "normal"
          }
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            // tabBarIcon: ({ color }) => <Home fill={color} />,
            tabBarLabel: "Home"
          }}
        />
        <Tab.Screen
          name="Calender"
          component={CalenderScreen}
          options={{
            // tabBarIcon: ({ color }) => <Profile fill={color} />,
            tabBarLabel: "Profile"
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBarStyles: {
    backgroundColor: Colors.PrimaryColor,
    paddingHorizontal: 20,
    width: "100%",
    borderColor: Colors.Background
  }
});
