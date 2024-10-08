import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import AppDrawer from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppDrawer"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AppDrawer" component={AppDrawer} />
        {/* Uncomment and add other screens as needed */}
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />
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
        <Stack.Screen name="Tab" component={TabNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
