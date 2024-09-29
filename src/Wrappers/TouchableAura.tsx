import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps
} from "react-native";

interface TouchableAuraProps extends TouchableOpacityProps {
  children: ReactNode;
}

const TouchableAura: React.FC<TouchableAuraProps> = ({
  children,
  style,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[style]}
      activeOpacity={0.7}
      onPress={onPress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default TouchableAura;
