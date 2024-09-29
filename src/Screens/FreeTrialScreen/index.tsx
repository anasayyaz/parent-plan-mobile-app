import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderProvider from "../../Provider/HeaderProvider";
import TextAura from "../../Wrappers/TextAura";
import Colors from "../../assets/Colors";
import TextButton from "../../components/TextButton";
//@ts-ignore
import FreeTrialImage from "../../assets/Images/SVG/FreeTrial.svg";

const FreeTrialScreen = ({ navigation }: any) => {
  const handleNextPress = () => {
    navigation.navigate("SubscriptionPlansScreen");
  };
  return (
    <HeaderProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextAura style={styles.title}>
            Sign up today for a 30 days free trail
          </TextAura>
          <TextAura style={styles.subtitle}>
            We are giving you 30 days free trail with {"\n"} all the features of
            the app.
          </TextAura>
        </View>
        <FreeTrialImage />
        <View style={styles.footerContainer}>
          <TextButton title="START TRAIL" onPress={handleNextPress} />
          <TextAura style={styles.loginText}>
            After 30 days you need to buy our
          </TextAura>
          <TextAura
            onPress={() => {
              navigation?.navigate("LoginScreen");
            }}
            style={styles.loginLink}
          >
            Subscription Plan.
          </TextAura>
        </View>
      </View>
    </HeaderProvider>
  );
};

export default FreeTrialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },
  headerContainer: {
    alignItems: "center"
  },
  title: {
    color: Colors.Headings,
    fontWeight: "700",
    fontSize: 24,
    marginVertical: 30,
    textAlign: "center"
  },
  subtitle: {
    color: "#5B5B5B",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 30,
    lineHeight: 21
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 10
  },
  loginText: {
    fontWeight: "400",
    fontSize: 14,
    marginVertical: 10,
    marginTop: 30
  },
  loginLink: {
    fontWeight: "600",
    fontSize: 14,
    color: Colors.ButtonPrimary
  }
});
