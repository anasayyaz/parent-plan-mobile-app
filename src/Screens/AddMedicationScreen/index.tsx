import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderProvider from "../../Provider/HeaderProvider";
import TextAura from "../../Wrappers/TextAura";
import TextButton from "../../components/TextButton";
import Colors from "../../assets/Colors";
import FloatingLabelDropdown from "../../components/FloatingLabelDropdown";

const AddMedicationScreen = ({ navigation }: any) => {
  const handleNextPress = () => {
    navigation.navigate("SubscriptionPlansScreen");
  };
  const [selectedValue, setSelectedValue] = useState();
  return (
    <HeaderProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextAura style={styles.title}>Add Medication</TextAura>
          <TextAura style={styles.subtitle}>
            You can add medication by providing these details.
          </TextAura>
          <FloatingLabelDropdown
            label="Select Category"
            data={[
              { label: "Category 1", value: "1" },
              { label: "Category 2", value: "2" },
              { label: "Category 3", value: "3" }
            ]}
            value={selectedValue}
            onChange={(item) => setSelectedValue(item.value)}
          />
        </View>
      </View>
    </HeaderProvider>
  );
};

export default AddMedicationScreen;

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
    fontWeight: "800",
    fontSize: 14,
    color: Colors.ButtonPrimary
  }
});
