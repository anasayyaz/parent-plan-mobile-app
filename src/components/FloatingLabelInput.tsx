import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import Fonts from "../assets/fonts/Fonts";

const FloatingLabelInputWithIcon = ({
  label,
  value,
  onChangeText,
  placeholder,
  icon
}: any) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        isFocused ? styles.focusedContainer : styles.defaultContainer
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#9B9B9B"
        onChangeText={onChangeText}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        blurOnSubmit
      />
      {icon && (
        <TouchableOpacity style={styles.iconContainer}>{icon}</TouchableOpacity>
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
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center"
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
    color: "#5B5B5B",
    backgroundColor: "white",
    paddingHorizontal: 10
  },
  input: {
    height: 40,
    fontSize: 16,
    color: "#000",
    padding: 0,
    flex: 1,
    fontFamily: Fonts.Inter_Regular
  },
  iconContainer: {
    position: "absolute",
    right: 15,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default FloatingLabelInputWithIcon;
