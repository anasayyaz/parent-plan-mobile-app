import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SVG from "../../assets/Images/SVG/SVG";
import Colors from "../../assets/Colors";
import FloatingLabelInput from "../../components/FloatingLabelInput";

const SplashScreen = ({ navigation, route }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("OnBoardingScreen");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.background}>
      <SVG.AppLogo />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.PrimaryColor,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
