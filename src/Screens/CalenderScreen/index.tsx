import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderProvider from "../../Provider/HeaderProvider";

const CalenderScreen = () => {
  return (
    <HeaderProvider>
      <View>
        <Text>CalenderScreen</Text>
      </View>
    </HeaderProvider>
  );
};

export default CalenderScreen;

const styles = StyleSheet.create({});
