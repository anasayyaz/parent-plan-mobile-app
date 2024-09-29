import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import HeaderProvider from "../../Provider/HeaderProvider";
import FloatingLabelInputWithIcon from "../../components/FloatingLabelInput";
import TextAura from "../../Wrappers/TextAura";
import TextButton from "../../components/TextButton";
import Colors from "../../assets/Colors";
import SVG from "../../assets/Images/SVG/SVG";

const AddMemberScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "" });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleAddPress = () => {
    // const emailError = !email
    //   ? "Email Address is required."
    //   : !validateEmail(email)
    //   ? "Invalid email format."
    //   : "";
    // setErrors({ email: emailError });
    // if (!emailError) {
    // Alert.alert("Login Successful!");
    // }
    navigation.navigate("FreeTrialScreen");
  };

  return (
    <HeaderProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextAura style={styles.title}>Add Member</TextAura>
          <TextAura style={styles.subtitle}>
            Enter the email of that person you want {"\n"} to add
          </TextAura>
          <FloatingLabelInputWithIcon
            icon={<SVG.inboxIcon />}
            placeholder="contact@gmail.com"
            label={"Email Address"}
            value={email}
            onChangeText={setEmail}
            containerStyles={styles.inputContainer}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
        </View>
        <View style={styles.footerContainer}>
          <TextButton title="ADD MEMBER" onPress={handleAddPress} />
        </View>
      </View>
    </HeaderProvider>
  );
};

export default AddMemberScreen;

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
    marginVertical: 30
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
  errorText: {
    color: "red",
    fontSize: 12,
    alignSelf: "flex-end"
  },
  inputContainer: {
    marginVertical: 10
  }
});
