import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import HeaderProvider from "../../Provider/HeaderProvider";
import TextAura from "../../Wrappers/TextAura";
import Colors from "../../assets/Colors";
import Dropdown from "../../components/FloatingLabelDropdown";
import FloatingLabelInputWithIcon from "../../components/FloatingLabelInput";
import SVG from "../../assets/Images/SVG/SVG";
import TextButton from "../../components/TextButton";

const AddMedicationScreen = ({ navigation }: any) => {
  const handleNextPress = () => {
    navigation.navigate("SubscriptionPlansScreen");
  };
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const dropdownData = [
    { id: 1, title: "Child 1" },
    { id: 2, title: "Child 2" },
    { id: 3, title: "Child 3" },
    { id: 4, title: "Child 4" }
  ];

  return (
    <HeaderProvider>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextAura style={styles.title}>Add Medication</TextAura>
          <TextAura style={styles.subtitle}>
            You can add medication by providing these details.
          </TextAura>
          <View style={styles.container}>
            <Dropdown
              label="Select Child"
              data={dropdownData}
              value={selectedOption}
              onSelect={(item) => setSelectedOption(item)}
            />
            <FloatingLabelInputWithIcon
              icon={<SVG.inboxIcon />}
              label={"Name of Medicine"}
              placeholder="Brufen"
              containerStyles={styles.inputContainer}
            />
            <FloatingLabelInputWithIcon
              icon={<SVG.inboxIcon />}
              label={"Date"}
              placeholder="mm/dd/yy"
              containerStyles={styles.inputContainer}
            />
            <FloatingLabelInputWithIcon
              icon={<SVG.inboxIcon />}
              label={"Time"}
              placeholder="2 PM"
              containerStyles={styles.inputContainer}
            />
            <FloatingLabelInputWithIcon
              multiline
              inputStyles={{ height: 328, justifyContent: "flex-start" }}
              icon={<SVG.inboxIcon />}
              label={"Reason"}
              placeholder="Due to fever."
              containerStyles={[styles.inputContainer]}
            />
            <TextButton title="ADD MEDICATION" onPress={() => {}} />
          </View>
        </View>
      </View>
    </HeaderProvider>
  );
};

export default AddMedicationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
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
  },
  inputContainer: { marginVertical: 10, height: 50 }
});
