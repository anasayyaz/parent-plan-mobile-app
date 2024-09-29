import React, { ReactNode } from "react";
import { View, SafeAreaView, StyleSheet, ViewStyle } from "react-native";
import CommonHeader from "../components/CommonHeader";
import Colors from "../assets/Colors";

// Example Usage
{
  /* <HeaderProvider
  leftIcon={{
    component: <SVG.CustomLeftIcon />,
    onPress: () => alert("Left Icon Pressed")
  }}
  rightIcon={{
    component: <SVG.CustomRightIcon />,
    onPress: () => alert("Right Icon Pressed")
  }}
  centerText="Create Account"
>
  {/* Your screen content goes here */
}
// </HeaderProvider> */}
interface HeaderProviderProps {
  children: any;
  leftIcon?: any;
  rightIcon?: any;
  centerText?: string;
  style?: ViewStyle; // Optional style prop for the container View
}
const HeaderProvider = ({
  children,
  leftIcon,
  rightIcon,
  centerText,
  style
}: HeaderProviderProps) => {
  return (
    <View style={[{ flex: 1 }, style]}>
      <CommonHeader
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        centerText={centerText}
      />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
};

export default HeaderProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Background
  }
});
