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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import HeaderProvider from "../../Provider/HeaderProvider";
import SVG from "../../assets/Images/SVG/SVG";
import { useNavigation } from "@react-navigation/native";

const cardData = [
  {
    id: "1",
    cardNumber: "************9457",
    expiryDate: "Sunday, Sep 1, 2024",
    cvv: "246",
    icon: "https://via.placeholder.com/150" // Placeholder for card icon image
  },
  {
    id: "2",
    cardNumber: "************9457",
    expiryDate: "Sunday, Sep 1, 2024",
    cvv: "246",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "3",
    cardNumber: "************9457",
    expiryDate: "Sunday, Sep 1, 2024",
    cvv: "246",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "4",
    cardNumber: "************9457",
    expiryDate: "Sunday, Sep 1, 2024",
    cvv: "246",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "5",
    cardNumber: "************9457",
    expiryDate: "Sunday, Sep 1, 2024",
    cvv: "246",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "6",
    cardNumber: "************9457",
    expiryDate: "Sunday, Sep 1, 2024",
    cvv: "246",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "7",
    cardNumber: "************9457",
    expiryDate: "Sunday, Sep 1, 2024",
    cvv: "246",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "8",
    cardNumber: "************9457",
    expiryDate: "Sunday, Sep 1, 2024",
    cvv: "246",
    icon: "https://via.placeholder.com/150"
  }
];

const CardDetailsScreen = () => {
  const navigation = useNavigation();

  const renderCard = ({ item }) => (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.cardIcon}>
        <SVG.CardAccountDetails />
      </TouchableOpacity>
      <View style={styles.cardDetails}>
        <Text style={styles.cardNumber}>{item.cardNumber}</Text>
        <View style={styles.row}>
          <Text style={styles.expiryDate}>{item.expiryDate}</Text>
          <Feather name="eye-off" size={16} color="#808080" />
        </View>
        <Text style={styles.cvv}>{item.cvv}</Text>
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
      centerText="Card Details"
      rightIcon={{ component: <SVG.Bell />, onPress: () => {} }}
    >
      <View style={styles.container}>
        {/* Cards List */}
        <FlatList
          data={cardData}
          renderItem={renderCard}
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
  cardContainer: {
    backgroundColor: "#D2C1A7",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 16
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#5B3E90",
    justifyContent: "center",
    alignItems: "center"
  },
  cardDetails: {
    flex: 1,
    marginLeft: 16
  },
  cardNumber: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4
  },
  expiryDate: {
    fontSize: 12,
    color: "#808080",
    marginRight: 8
  },
  cvv: {
    fontSize: 14,
    color: "#333",
    marginTop: 4
  },
  actions: {
    flexDirection: "row"
  },
  actionButton: {
    marginLeft: 8
  }
});

export default CardDetailsScreen;
