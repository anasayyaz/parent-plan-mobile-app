import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextStyle,
  ViewStyle
} from "react-native";
import Colors from "../assets/Colors";
import Fonts from "../assets/fonts/Fonts";
import TouchableAura from "../Wrappers/TouchableAura";
import SVG from "../assets/Images/SVG/SVG"; // Import your dropdown icons

const Dropdown = ({
  label,
  data,
  value,
  onSelect,
  labelStyles,
  containerStyles,
  dropdownStyles
}: {
  label?: string;
  data: Array<string>;
  value?: string;
  onSelect?: (item: string) => void;
  labelStyles?: TextStyle;
  containerStyles?: ViewStyle;
  dropdownStyles?: ViewStyle;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    onSelect && onSelect(item);
    setIsOpen(false);
  };

  return (
    <View style={[styles.container, containerStyles]}>
      {/* Label */}
      <Text style={[styles.label, labelStyles]}>{label}</Text>

      <TouchableAura
        style={[
          styles.dropdownButton,
          isOpen ? styles.focusedDropdown : styles.defaultDropdown
        ]}
        onPress={toggleDropdown}
      >
        <Text style={styles.selectedText}>
          {value?.title || "Select an option"}
        </Text>
        <SVG.ArrowDownExpand />
      </TouchableAura>

      {isOpen && (
        <View style={[styles.dropdown, dropdownStyles]}>
          <FlatList
            data={data}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.itemText}>{item?.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: "white",
    position: "relative",
    justifyContent: "center",
    width: "100%",
    borderColor: "rgba(155, 155, 155, 0.5)"
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
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40
  },
  defaultDropdown: {
    borderColor: "rgba(155, 155, 155, 0.5)"
  },
  focusedDropdown: {
    borderColor: "black"
  },
  selectedText: {
    fontSize: 14,
    color: "#000",
    fontFamily: Fonts.Inter_Regular
  },
  dropdown: {
    position: "absolute",
    top: 45,
    left: 0,
    right: 0,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(155, 155, 155, 0.5)",
    backgroundColor: "white",
    zIndex: 1000
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  itemText: {
    fontSize: 14,
    color: "#000",
    fontFamily: Fonts.Inter_Regular
  }
});

export default Dropdown;
