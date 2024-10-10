import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HeaderProvider from "../../Provider/HeaderProvider";
import SVG from "../../assets/Images/SVG/SVG";

const ProfileScreen = () => {
  // State for input values and errors
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    gender: "",
    address: ""
  });

  const [errors, setErrors] = useState({
    fullName: "",
    password: "",
    gender: "",
    address: ""
  });

  // Function to handle form validation
  const validate = () => {
    let valid = true;
    let newErrors = { fullName: "", password: "", gender: "", address: "" };

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
      valid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required";
      valid = false;
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Function to handle form submission
  const handleSave = () => {
    if (validate()) {
      // Proceed with form submission or any other logic
      console.log("Form is valid. Submitting...");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderProvider
        leftIcon={{
          component: <SVG.Menu />,
          onPress: () => {
            navigation.openDrawer();
          }
        }}
        rightIcon={{ component: <SVG.Bell />, onPress: () => {} }}
      >
        <View style={{ paddingHorizontal: 10 }}>
          {/* Profile Image */}
          <View style={styles.profileImageWrapper}>
            <Image
              source={{
                uri: "https://sabimages.com/wp-content/uploads/2024/07/girl-dp70.jpg"
              }}
              resizeMode={"contain"}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editIcon}>
              <FontAwesome name="pencil" size={16} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Input Fields */}
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name here"
                placeholderTextColor="#7c6b5a"
                value={formData.fullName}
                onChangeText={(text) =>
                  setFormData({ ...formData, fullName: text })
                }
              />
              <Icon name="person-outline" size={20} color="#7c6b5a" />
            </View>
            {errors.fullName ? (
              <Text style={styles.errorText}>{errors.fullName}</Text>
            ) : null}

            <Text style={styles.label}>Change Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="*****************"
                placeholderTextColor="#7c6b5a"
                secureTextEntry
                value={formData.password}
                onChangeText={(text) =>
                  setFormData({ ...formData, password: text })
                }
              />
              <Icon name="eye-off-outline" size={20} color="#7c6b5a" />
            </View>
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}

            <Text style={styles.label}>Gender</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Male"
                placeholderTextColor="#7c6b5a"
                value={formData.gender}
                onChangeText={(text) =>
                  setFormData({ ...formData, gender: text })
                }
              />
              <Icon name="chevron-down-outline" size={20} color="#7c6b5a" />
            </View>
            {errors.gender ? (
              <Text style={styles.errorText}>{errors.gender}</Text>
            ) : null}

            <Text style={styles.label}>Address</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="London"
                placeholderTextColor="#7c6b5a"
                value={formData.address}
                onChangeText={(text) =>
                  setFormData({ ...formData, address: text })
                }
              />
              <Icon name="location-outline" size={20} color="#7c6b5a" />
            </View>
            {errors.address ? (
              <Text style={styles.errorText}>{errors.address}</Text>
            ) : null}
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </HeaderProvider>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileImageWrapper: {
    top: 50,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "gray",
    alignSelf: "center"
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff"
  },
  editIcon: {
    position: "absolute",
    right: 5,
    bottom: 0,
    backgroundColor: "#52316b",
    borderRadius: 15,
    padding: 5
  },
  inputWrapper: {
    marginTop: 80,
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#52316b",
    marginBottom: 8
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0d7cd",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 5
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "#52316b"
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 15
  },
  saveButton: {
    backgroundColor: "#52316b",
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  }
});
