// TextAura.tsx
import React from "react";
import { Text, TextStyle, StyleSheet, TextProps } from "react-native";
import Colors from "../assets/Colors";
import Fonts from "../assets/fonts/Fonts";

interface TextAuraProps extends TextProps {
  style?: TextStyle;
  children: React.ReactNode;
}

const TextAura: React.FC<TextAuraProps> = ({ style, children, ...props }) => {
  return (
    <Text style={[styles.defaultText, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: Colors.Headings,
    fontFamily: Fonts.Inter_Regular
  }
});

export default TextAura;
