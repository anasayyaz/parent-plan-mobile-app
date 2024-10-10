import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import HeaderProvider from "../../Provider/HeaderProvider";
import SVG from "../../assets/Images/SVG/SVG";
import { useNavigation } from "@react-navigation/native";

const notificationsData = [
  {
    id: "1",
    title: "Medication of Child 1",
    timeAgo: "15 mins ago",
    type: "recent"
  },
  {
    id: "2",
    title: "Home Work of Child 2",
    timeAgo: "30 mins ago",
    type: "recent"
  },
  {
    id: "3",
    title: "Nap Time of Child 2",
    timeAgo: "20 mins ago",
    type: "recent"
  },
  {
    id: "4",
    title: "Nap Time of Child 2",
    timeAgo: "20 mins ago",
    type: "recent"
  },
  {
    id: "5",
    title: "Nap Time of Child 2",
    timeAgo: "20 mins ago",
    type: "recent"
  },
  {
    id: "4",
    title: "Nap Time of Child 2",
    timeAgo: "2 hours ago",
    type: "previous"
  },
  {
    id: "5",
    title: "Home Work of Child 2",
    timeAgo: "4 hours ago",
    type: "previous"
  },
  {
    id: "6",
    title: "Medication of Child 1",
    timeAgo: "1 day ago",
    type: "previous"
  },
  {
    id: "7",
    title: "Medication of Child 2",
    timeAgo: "2 days ago",
    type: "previous"
  }
];

const NotificationItem = ({ item }) => (
  <View style={styles.notificationContainer}>
    <View style={styles.iconContainer}>
      <Icon name="notifications-outline" size={24} color="white" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.notificationText}>{item.title}</Text>
      <Text style={styles.timeText}>{item.timeAgo}</Text>
    </View>
  </View>
);

const NotificationsScreen = () => {
  const navigation = useNavigation();

  const renderNotification = ({ item }) => <NotificationItem item={item} />;

  return (
    <HeaderProvider
      leftIcon={{
        component: <SVG.Menu />,
        onPress: () => navigation.openDrawer()
      }}
      centerText="Notifications"
      rightIcon={{ component: <SVG.Bell />, onPress: () => {} }}
    >
      <View style={styles.container}>
        {/* Section Title: Recent Notifications */}
        <Text style={styles.sectionTitle}>Recent Notifications</Text>
        <FlatList
          data={notificationsData.filter((notif) => notif.type === "recent")}
          renderItem={renderNotification}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />

        {/* Section Title: Previous Notifications */}
        <Text style={styles.sectionTitle}>Previous Notifications</Text>
        <FlatList
          data={notificationsData.filter((notif) => notif.type === "previous")}
          renderItem={renderNotification}
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
    backgroundColor: "white"
  },
  header: {
    backgroundColor: "#4B225E",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16
  },
  headerTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    paddingHorizontal: 16,
    marginTop: 20
  },
  listContainer: {
    paddingHorizontal: 16,
    marginBottom: 20
  },
  notificationContainer: {
    backgroundColor: "#D2C1A7",
    borderRadius: 15,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  iconContainer: {
    backgroundColor: "#4B225E",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16
  },
  textContainer: {
    flex: 1
  },
  notificationText: {
    fontSize: 16,
    color: "#333"
  },
  timeText: {
    fontSize: 12,
    color: "#808080",
    marginTop: 4
  }
});

export default NotificationsScreen;
