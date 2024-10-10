import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HeaderProvider from "../../Provider/HeaderProvider";
import SVG from "../../assets/Images/SVG/SVG";
import { useNavigation } from "@react-navigation/native";

const contactData = [
  {
    id: "1",
    name: "Mr. Josif",
    phone: "+44 4595 4954393",
    address: "127 Ledbury Rd, London W11 2AQ, UK",
    avatar: "https://via.placeholder.com/150" // Placeholder for avatar image
  },
  // Add more data if needed
  {
    id: "2",
    name: "Mr. Josif",
    phone: "+44 4595 4954393",
    address: "127 Ledbury Rd, London W11 2AQ, UK",
    avatar: "https://via.placeholder.com/150"
  },
  {
    id: "3",
    name: "Mr. Josif",
    phone: "+44 4595 4954393",
    address: "127 Ledbury Rd, London W11 2AQ, UK",
    avatar: "https://via.placeholder.com/150"
  },
  {
    id: "4",
    name: "Mr. Josif",
    phone: "+44 4595 4954393",
    address: "127 Ledbury Rd, London W11 2AQ, UK",
    avatar: "https://via.placeholder.com/150"
  },
  {
    id: "5",
    name: "Mr. Josif",
    phone: "+44 4595 4954393",
    address: "127 Ledbury Rd, London W11 2AQ, UK",
    avatar: "https://via.placeholder.com/150"
  },
  {
    id: "6",
    name: "Mr. Josif",
    phone: "+44 4595 4954393",
    address: "127 Ledbury Rd, London W11 2AQ, UK",
    avatar: "https://via.placeholder.com/150"
  },
  {
    id: "7",
    name: "Mr. Josif",
    phone: "+44 4595 4954393",
    address: "127 Ledbury Rd, London W11 2AQ, UK",
    avatar: "https://via.placeholder.com/150"
  },
  {
    id: "8",
    name: "Mr. Josif",
    phone: "+44 4595 4954393",
    address: "127 Ledbury Rd, London W11 2AQ, UK",
    avatar: "https://via.placeholder.com/150"
  }
];

const ContactBookScreen = () => {
  const navigation = useNavigation();

  const renderContact = ({ item }) => (
    <View style={styles.contactCard}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.contactDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
        <Text style={styles.address}>{item.address}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="edit" size={24} color="#5B3E90" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="delete" size={24} color="#D9534F" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <HeaderProvider
      leftIcon={{
        component: <SVG.Menu />,
        onPress: () => navigation.openDrawer()
      }}
      centerText="Contact Book"
      rightIcon={{ component: <SVG.Bell />, onPress: () => {} }}
    >
      <View style={styles.container}>
        {/* Contact List */}
        <FlatList
          data={contactData}
          renderItem={renderContact}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </HeaderProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  header: {
    backgroundColor: "#5B3E90",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16
  },
  headerTitle: {
    fontSize: 20,
    color: "white"
  },
  listContainer: {
    padding: 16
  },
  contactCard: {
    backgroundColor: "#D2C1A7",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 16
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#5B3E90"
  },
  contactDetails: {
    flex: 1,
    marginLeft: 16
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5B3E90"
  },
  phone: {
    fontSize: 14,
    color: "#333",
    marginVertical: 4
  },
  address: {
    fontSize: 12,
    color: "#888"
  },
  actions: {
    flexDirection: "row"
  },
  actionButton: {
    marginLeft: 8
  }
});

export default ContactBookScreen;
