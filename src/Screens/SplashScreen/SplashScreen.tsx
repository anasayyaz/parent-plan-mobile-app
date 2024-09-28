import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SVG from "../../assets/Images/SVG/SVG";

const SplashScreen = () => {
  return (
    <View>
      <Text>SplashScreen</Text>
      <SVG.AppLogo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
