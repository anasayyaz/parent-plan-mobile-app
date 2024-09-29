import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderProvider from "../../Provider/HeaderProvider";
import SVG from "../../assets/Images/SVG/SVG";

const HomeScreen = () => {
  return (
    <HeaderProvider
      leftIcon={{ component: <SVG.Menu />, onPress: () => {} }}
      rightIcon={{ component: <SVG.Bell />, onPress: () => {} }}
    >
      <View></View>
    </HeaderProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
