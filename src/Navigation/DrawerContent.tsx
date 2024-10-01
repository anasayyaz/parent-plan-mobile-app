import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SVG from "../assets/Images/SVG/SVG";
import TextAura from "../Wrappers/TextAura";
import Fonts from "../assets/fonts/Fonts";

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/happy-business-man-standing-smiling-against-red-wall_155003-9367.jpg?w=826&t=st=1727640989~exp=1727641589~hmac=b41c49ad9e2a6920a8fe8eb2417b6fff6b5dbeba38387d080e62f56e646c5978",
          }}
          style={styles.profileImage}
        />
        <TextAura style={styles.profileName}>John</TextAura>
        <TextAura style={styles.profileEmail}>john@gmail.com</TextAura>
      </View>

      <View style={styles.drawerItemsContainer}>
        <DrawerItem
          label="Add Child"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.Add />}
          onPress={() => console.log("Add Child")}
        />
        <DrawerItem
          label="Calendar"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.Calendar />}
          onPress={() => console.log("Calendar")}
        />
        <DrawerItem
          label="Medication"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.Pill />}
          onPress={() => console.log("Medication")}
        />
        <DrawerItem
          label="Educational Details"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.Bag />}
          onPress={() => console.log("Educational Details")}
        />
        <DrawerItem
          label="Infant Report"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.Infant />}
          onPress={() => console.log("Infant Report")}
        />
        <DrawerItem
          label="Injury Log"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.Injury />}
          onPress={() => console.log("Injury Log")}
        />
        <DrawerItem
          label="Contact Book"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.ContactBook />}
          onPress={() => console.log("Contact Book")}
        />
        <DrawerItem
          label="Expense Logs"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.Currency />}
          onPress={() => console.log("Expense Logs")}
        />
        <DrawerItem
          label="Chat"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.Chat />}
          onPress={() => console.log("Chat")}
        />
        <DrawerItem
          label="Personal Notes"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.Notes />}
          onPress={() => console.log("Personal Notes")}
        />
        <DrawerItem
          label="Card Details"
          labelStyle={styles.drawerItemLabel}
          icon={() => <SVG.Card />}
          onPress={() => console.log("Card Details")}
        />
      </View>

      <DrawerItem
        label="Log Out"
        labelStyle={styles.logoutLabel}
        icon={() => <SVG.Logout />}
        onPress={() => console.log("Log Out")}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#391448",
  },
  profileContainer: {
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  profileEmail: {
    color: "#B3B3B3",
    fontSize: 14,
  },
  drawerItemsContainer: {
    flex: 1,
    paddingVertical: 10,
    fontFamily: Fonts.Inter_Regular,
  },
  drawerItemLabel: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  logoutLabel: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CustomDrawerContent;
