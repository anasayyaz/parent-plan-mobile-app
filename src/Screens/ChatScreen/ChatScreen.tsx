import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderProvider from "../../Provider/HeaderProvider";
import SVG from "../../assets/Images/SVG/SVG";
import { useNavigation } from "@react-navigation/native";

export default function ChatScreen() {
  const navigation = useNavigation();
  return (
    <HeaderProvider
      leftIcon={{
        component: <SVG.Menu />,
        onPress: () => navigation.openDrawer()
      }}
      centerText="Chat"
      rightIcon={{ component: <SVG.Bell />, onPress: () => {} }}
    ></HeaderProvider>
  );
}

const styles = StyleSheet.create({});
