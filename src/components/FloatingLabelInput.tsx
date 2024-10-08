import React, { useState } from "react";
import { View, TextInput, StyleSheet, TextStyle } from "react-native";
import Fonts from "../assets/fonts/Fonts";
import TouchableAura from "../Wrappers/TouchableAura";
import SVG from "../assets/Images/SVG/SVG"; // Import your eye icons
import TextAura from "../Wrappers/TextAura";
import Colors from "../assets/Colors";

const FloatingLabelInputWithIcon = ({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  secureTextEntry = false,
  labelStyles,
  inputStyles,
  containerStyles,
  multiline = false
}: {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyles?: TextStyle;
  inputStyles?: object;
  containerStyles?: Object;
  multiline?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View
      style={[
        styles.container,
        containerStyles,
        isFocused ? styles.focusedContainer : styles.defaultContainer
      ]}
    >
      {/* @ts-ignore */}
      <TextAura style={[styles.label, labelStyles]}>{label}</TextAura>
      <TextInput
        multiline={multiline}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#9B9B9B"
        onChangeText={onChangeText}
        style={[styles.input, inputStyles]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        blurOnSubmit
        secureTextEntry={!isPasswordVisible && secureTextEntry}
      />
      {secureTextEntry ? (
        <TouchableAura
          style={styles.iconContainer}
          onPress={togglePasswordVisibility}
        >
          {isPasswordVisible ? <SVG.eyeOn /> : <SVG.eyeoff />}
        </TouchableAura>
      ) : (
        icon && (
          <TouchableAura style={styles.iconContainer}>{icon}</TouchableAura>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 15,
    position: "relative",
    justifyContent: "center",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    height: 50
  },
  defaultContainer: {
    borderColor: "rgba(155, 155, 155, 0.5)"
  },
  focusedContainer: {
    borderColor: "black"
  },
  label: {
    position: "absolute",
    top: -10,
    left: 10,
    color: Colors.SecoundryTextColor,
    backgroundColor: "white",
    paddingHorizontal: 10,
    fontFamily: Fonts.Inter_Regular
  },
  input: {
    height: 40,
    fontSize: 14,
    color: "#000",
    padding: 0,
    flex: 1,
    fontFamily: Fonts.Inter_Regular,
    paddingRight: 20
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FloatingLabelInputWithIcon;
