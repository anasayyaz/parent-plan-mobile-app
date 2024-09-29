import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  TextStyle,
  ViewStyle
} from "react-native";
import Colors from "../assets/Colors";
import TextAura from "../Wrappers/TextAura";
import TouchableAura from "../Wrappers/TouchableAura";

interface TextButtonProps {
  title: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

const TextButton: React.FC<TextButtonProps> = ({
  title,
  style,
  textStyle,
  onPress,
  disabled = false
}) => {
  const handlePress = (event: GestureResponderEvent) => {
    if (!disabled && onPress) {
      onPress(event);
    }
  };

  return (
    <TouchableAura
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? Colors.ButtonPrimaryDisabled
            : Colors.ButtonPrimary
        },
        style
      ]}
      onPress={handlePress}
    >
      {/* @ts-ignore */}
      <TextAura style={[styles.buttonText, textStyle]}>{title}</TextAura>
    </TouchableAura>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.ButtonPrimary,
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  buttonText: {
    color: Colors.ButtonPrimaryText,
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default TextButton;
