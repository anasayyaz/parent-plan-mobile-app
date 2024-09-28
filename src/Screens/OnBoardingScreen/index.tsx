import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import FloatingLabelInputWithIcon from "../../components/FloatingLabelInput";

const OnboardingScreen = () => {
  const [fullName, setFullName] = useState("");

  return (
    <View style={{ padding: 20, flex: 1, backgroundColor: "#fff" }}>
      <FloatingLabelInputWithIcon
        label="Full Name"
        value={fullName}
        onChangeText={setFullName}
        placeholder="Name Here"
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
