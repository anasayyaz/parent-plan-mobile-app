import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderProvider from "../../Provider/HeaderProvider";
import TextAura from "../../Wrappers/TextAura";
import FloatingLabelInputWithIcon from "../../components/FloatingLabelInput";
import SVG from "../../assets/Images/SVG/SVG";
import Colors from "../../assets/Colors";
import TextButton from "../../components/TextButton";
import CheckBox from "@react-native-community/checkbox";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSignUp = () => {
    const newErrors = {
      email: "",
      password: ""
    };

    if (!email) {
      newErrors.email = "Email Address is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      navigation?.navigate("AddMemberScreen");
    }
  };
  return (
    <HeaderProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextAura style={styles.title}>Login To Your Account</TextAura>

          <FloatingLabelInputWithIcon
            icon={<SVG.inboxIcon />}
            label={"Email Address"}
            placeholder="contact@gmail.com"
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
            placeholder="************"
            value={password}
            onChangeText={setPassword}
            containerStyles={styles.inputContainer}
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              marginTop: 10
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <CheckBox
                disabled={false}
                onFillColor={Colors.PrimaryColor}
                value={toggleCheckBox}
                onTintColor={"#FFFFFf"}
                onCheckColor={"#FFFFFF"}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                animationDuration={0}
              />
              <TextAura
                style={{
                  color: Colors.PrimaryColor,
                  fontSize: 14,
                  fontWeight: "500",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10
                }}
              >
                Remember Me
              </TextAura>
            </View>
            <TextAura
              style={{
                color: Colors.SecoundryTextColor,
                fontSize: 14,
                fontWeight: "500"
              }}
            >
              Forget Password ?
            </TextAura>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <TextButton title="LOGIN" onPress={handleSignUp} />
          <TextAura style={styles.loginText}>
            If you Don’t have an Account{" "}
            <TextAura
              onPress={() => {
                navigation?.navigate("SignUpScreen");
              }}
              style={styles.loginLink}
            >
              Sign Up Now
            </TextAura>
          </TextAura>
        </View>
      </View>
    </HeaderProvider>
  );
};

export default LoginScreen;

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
