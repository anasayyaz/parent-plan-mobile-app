import React, { useState } from "react";
import { View, StyleSheet, TextStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import Colors from "../assets/Colors";
import Fonts from "../assets/fonts/Fonts";
import TouchableAura from "../Wrappers/TouchableAura";
import SVG from "../assets/Images/SVG/SVG"; // Replace with your custom icon if needed
import TextAura from "../Wrappers/TextAura";

const FloatingLabelDropdown = ({
  label,
  data,
  value,
  onChange,
  placeholder = "Select",
  containerStyles,
  labelStyles,
  dropdownStyles
}: {
  label?: string;
  data: Array<{ label: string; value: any }>;
  value?: any;
  onChange?: (value: any) => void;
  placeholder?: string;
  containerStyles?: object;
  labelStyles?: TextStyle;
  dropdownStyles?: object;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        containerStyles,
        isFocused ? styles.focusedContainer : styles.defaultContainer
      ]}
    >
      <TextAura style={[styles.label, labelStyles]}>{label}</TextAura>
      <Dropdown
        style={[styles.dropdown, dropdownStyles]}
        containerStyle={{ borderRadius: 10 }}
        data={data}
        value={value}
        placeholder={placeholder}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        renderRightIcon={() =>
          isFocused ? <SVG.ArrowDownExpand /> : <SVG.ArrowDownExpand />
        }
      />
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

    justifyContent: "center",
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
    color: Colors.SecoundryTextColor,
    backgroundColor: "white",
    paddingHorizontal: 10,
    fontFamily: Fonts.Inter_Regular
  },
  dropdown: {
    flex: 1,
    height: 40,
    padding: 0,
    color: "#000",
    backgroundColor: "red"
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#9B9B9B"
  },
  selectedTextStyle: {
    fontSize: 14,
    color: "#000000"
  }
});

export default FloatingLabelDropdown;
