import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SVG from "../../assets/Images/SVG/SVG";
import Colors from "../../assets/Colors";
import FloatingLabelInput from "../../components/FloatingLabelInput";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = ({ route }: any) => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      //@ts-ignore
      navigation.replace("OnBoardingScreen");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
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
