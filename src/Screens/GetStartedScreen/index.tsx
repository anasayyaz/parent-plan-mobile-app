import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SVG from "../../assets/Images/SVG/SVG";
import Colors from "../../assets/Colors";
import TextAura from "../../Wrappers/TextAura";
import TextButton from "../../components/TextButton";

const GetStartedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <SVG.GetStartedImage />
        <View style={{ width: "100%" }}>
          <TextAura style={styles.welcomeText}>
            Welcome to{" "}
            <TextAura style={styles.appNameText}>Parent {"\n"} Plan</TextAura>{" "}
            app
          </TextAura>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TextButton title="SIGN UP" />
        <TextButton
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
          title="LOGIN"
        />
      </View>

      <TextAura style={styles.agreementText}>
        By
        <TextAura style={styles.boldText}> Sign Up</TextAura> Or{" "}
        <TextAura style={styles.boldText}>Login</TextAura> you are agreed to our
      </TextAura>
      <TextAura style={styles.termsText}>Terms and Conditions.</TextAura>
    </SafeAreaView>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.Background
  },
  welcomeText: {
    fontWeight: "700",
    color: "rgba(45, 45, 45, 1)",
    fontSize: 24,
    lineHeight: 36,
    width: "50%",
    textAlign: "center"
  },
  appNameText: {
    fontWeight: "800",
    color: "rgba(45, 45, 45, 1)",
    fontSize: 24,
    lineHeight: 36
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 10
  },
  loginButton: {
    backgroundColor: Colors.Background,
    borderColor: Colors.ButtonPrimary,
    borderWidth: 1,
    marginVertical: 20
  },
  loginButtonText: {
    color: Colors.ButtonPrimary
  },
  agreementText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    marginVertical: 5
  },
  boldText: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 18
  },
  termsText: {
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 18
  }
});
