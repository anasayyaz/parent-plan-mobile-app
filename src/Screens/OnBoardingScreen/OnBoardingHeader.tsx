import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextAura from "../../Wrappers/TextAura";
import SVG from "../../assets/Images/SVG/SVG";
import TouchableAura from "../../Wrappers/TouchableAura";

interface OnBoardingHeaderProps {
  onPress?: () => void;
}

const OnBoardingHeader: React.FC<OnBoardingHeaderProps> = ({ onPress }) => {
  return (
    <TouchableAura style={styles.container} onPress={onPress}>
      <TextAura style={styles.skipText}>SKIP</TextAura>
      <SVG.ArrowRightGray />
    </TouchableAura>
  );
};

export default OnBoardingHeader;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: "rgba(217, 217, 217, 1)",
    alignSelf: "flex-end",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 27
  },
  skipText: {
    color: "rgba(91, 91, 91, 1)",
    marginHorizontal: 5
  }
});
