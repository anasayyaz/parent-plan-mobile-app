import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import HomeScreen from "../Screens/HomeScreen";
import CalenderScreen from "../Screens/CalenderScreen";
import Colors from "../assets/Colors";
import ChatScreen from "../Screens/ChatScreen/ChatScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import SVG from "../assets/Images/SVG/SVG";

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
            tabBarIcon: () => <SVG.Home height={30} width={30} />,
            tabBarLabel: "Home"
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={CalenderScreen}
          options={{
            tabBarIcon: () => <SVG.CalendarTab height={30} width={30} />,
            tabBarLabel: "Calendar"
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: () => <SVG.ChatTab height={30} width={30} />,
            tabBarLabel: "Chat"
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => <SVG.Person height={30} width={30} />,
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
    width: "100%",
    borderColor: Colors.Background
  }
});
