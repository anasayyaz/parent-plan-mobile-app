import React from "react";
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
              />
              <Icon name="person-outline" size={20} color="#7c6b5a" />
            </View>

            <Text style={styles.label}>Change Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="*****************"
                placeholderTextColor="#7c6b5a"
                secureTextEntry
              />
              <Icon name="eye-off-outline" size={20} color="#7c6b5a" />
            </View>

            <Text style={styles.label}>Gender</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Male"
                placeholderTextColor="#7c6b5a"
              />
              <Icon name="chevron-down-outline" size={20} color="#7c6b5a" />
            </View>

            <Text style={styles.label}>Address</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="London"
                placeholderTextColor="#7c6b5a"
              />
              <Icon name="location-outline" size={20} color="#7c6b5a" />
            </View>
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>SAVE</Text>
          </TouchableOpacity>
        </View>
      </HeaderProvider>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20
  },
  header: {
    backgroundColor: "#52316b",
    height: 180,
    paddingHorizontal: 15,
    paddingTop: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10
  },
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
    // borderWidth: 3
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
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 15
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "#52316b"
  },
  saveButton: {
    backgroundColor: "#52316b",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  }
});
