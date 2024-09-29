import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CommonHeader from "../../components/CommonHeader";
import Colors from "../../assets/Colors";
import SVG from "../../assets/Images/SVG/SVG";
import HeaderProvider from "../../Provider/HeaderProvider";
import TextAura from "../../Wrappers/TextAura";
import FloatingLabelInputWithIcon from "../../components/FloatingLabelInput";
import TextButton from "../../components/TextButton";

const SignUpScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    if (!fullName) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!email) {
      newErrors.email = "Email Address is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    // Check if there are no errors before proceeding with signup
    if (
      !newErrors.fullName &&
      !newErrors.email &&
      !newErrors.password &&
      !newErrors.confirmPassword
    ) {
      // Proceed with signup logic
      Alert.alert("Sign Up Successful!");
    }
  };

  return (
    <HeaderProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextAura style={styles.title}>Create Account</TextAura>
          <FloatingLabelInputWithIcon
            icon={<SVG.PersonWithPencil />}
            label={"Full Name"}
            value={fullName}
            onChangeText={setFullName}
            containerStyles={styles.inputContainer}
          />
          {errors.fullName ? (
            <Text style={styles.errorText}>{errors.fullName}</Text>
          ) : null}

          <FloatingLabelInputWithIcon
            icon={<SVG.inboxIcon />}
            label={"Email Address"}
            value={email}
            onChangeText={setEmail}
            containerStyles={styles.inputContainer}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}

          <FloatingLabelInputWithIcon
            secureTextEntry
            label={"Password"}
            value={password}
            onChangeText={setPassword}
            containerStyles={styles.inputContainer}
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

          <FloatingLabelInputWithIcon
            secureTextEntry
            label={"Confirm Password"}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            containerStyles={styles.inputContainer}
          />
          {errors.confirmPassword ? (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          ) : null}
        </View>
        <View style={styles.footerContainer}>
          <TextButton title="SIGN UP" onPress={handleSignUp} />
          <TextAura style={styles.loginText}>
            If you already have an Account{" "}
            <TextAura
              onPress={() => {
                navigation?.navigate("LoginScreen");
              }}
              style={styles.loginLink}
            >
              Login Now
            </TextAura>
          </TextAura>
        </View>
      </View>
    </HeaderProvider>
  );
};

export default SignUpScreen;

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
  footerContainer: {
    alignItems: "center"
  },
  loginText: {
    fontWeight: "400",
    fontSize: 14,
    marginVertical: 10
  },
  loginLink: {
    fontWeight: "600",
    fontSize: 14,
    textDecorationLine: "underline",
    color: Colors.ButtonPrimary
  },
  errorText: {
    color: "red",
    fontSize: 12,
    alignSelf: "flex-end"
  },
  inputContainer: { marginVertical: 10 }
});
