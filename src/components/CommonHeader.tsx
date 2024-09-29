import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform
} from "react-native";
import SVG from "../assets/Images/SVG/SVG";
import TouchableAura from "../Wrappers/TouchableAura";
import { useNavigation } from "@react-navigation/native";

//Example Usage
// 1) <CommonHeader />
// 2)
// <CommonHeader
//   leftIcon={{ component: <SVG.CustomLeftIcon />, onPress: () => {} }}
//   rightIcon={{ component: <SVG.CustomRightIcon />, onPress: () => {}}}
//   centerText="Create Account"
// />

const CommonHeader = ({ leftIcon, rightIcon, centerText }: any) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          {/* Left Icon */}
          <TouchableAura
            onPress={
              leftIcon?.onPress ? leftIcon.onPress : () => navigation.goBack()
            }
          >
            {leftIcon?.component ? leftIcon.component : <SVG.ArrowLeft />}
          </TouchableAura>

          {/* Center Text */}
          {centerText && <Text style={styles.title}>{centerText}</Text>}

          {/* Right Icon */}
          {rightIcon && (
            <TouchableAura onPress={rightIcon.onPress}>
              {rightIcon.component}
            </TouchableAura>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"
  },
  header: {
    backgroundColor: "#3F0D5A",
    height: 93,
    paddingTop: Platform.OS === "ios" ? 50 : StatusBar.currentHeight,
    paddingHorizontal: 16,
    justifyContent: "center"
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1
  }
});

export default CommonHeader;
