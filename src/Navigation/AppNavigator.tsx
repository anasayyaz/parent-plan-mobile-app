import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/SplashScreen/SplashScreen";
import OnboardingScreen from "../Screens/OnBoardingScreen";
import GetStartedScreen from "../Screens/GetStartedScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import AddMemberScreen from "../Screens/AddMemberScreen";
import FreeTrialScreen from "../Screens/FreeTrialScreen";
import SubscriptionPlansScreen from "../Screens/SubscriptionPlansScreen";
import { TabNavigator } from "./TabNavigator";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="GetStartedScreen" component={GetStartedScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="AddMemberScreen" component={AddMemberScreen} />
        <Stack.Screen name="FreeTrialScreen" component={FreeTrialScreen} />
        <Stack.Screen
          name="SubscriptionPlansScreen"
          component={SubscriptionPlansScreen}
        />
        <Stack.Screen name="Tab" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
