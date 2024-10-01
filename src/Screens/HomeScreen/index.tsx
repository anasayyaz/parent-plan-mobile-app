import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import SVG from "../../assets/Images/SVG/SVG";
import HeaderProvider from "../../Provider/HeaderProvider";
import Ionicons from "react-native-vector-icons/Ionicons"; // For icons like menu, bell, and event

const HomeScreen = () => {
  const navigation = useNavigation();
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
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {/* Upcoming Events Section */}
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <View style={styles.eventCard}>
            <View style={styles.eventIconWrapper}>
              <SVG.CalendarClock />
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Medication of Child 1</Text>
              <Text style={styles.eventDetails}>Sept 5th, 2024 </Text>
              <Text style={styles.eventDetails}>4:15 PM</Text>
            </View>
          </View>

          {/* Copy the event card for other events */}
          <View style={styles.eventCard}>
            <View style={styles.eventIconWrapper}>
              <SVG.CalendarClock />
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Home Work of Child 2</Text>
              <Text style={styles.eventDetails}>Sept 6th, 2024 - 4:00 PM</Text>
            </View>
          </View>

          <View style={styles.eventCard}>
            <View style={styles.eventIconWrapper}>
              <SVG.CalendarClock />
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Nap Time of Child 1</Text>
              <Text style={styles.eventDetails}>Sept 5th, 2024 - 2:00 PM</Text>
            </View>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterText}>Filter Childs</Text>
            <View style={styles.filterDropdown}>
              <Text style={styles.filterText}>All</Text>
            </View>
          </View>
          {/**Calendar section */}
          {/* Calendar Section */}
          <View style={styles.calendarContainer}>
            <View style={styles.calendarHeader}>
              <TouchableOpacity style={styles.calendarFilter}>
                <Text style={styles.calendarFilterText}>All</Text>
                <Ionicons name="chevron-down" size={16} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.calendarMonth}>September 2024</Text>
            </View>
            <View style={styles.calendarGrid}>
              {/* Sample calendar days - make sure to handle real dates dynamically */}
              {Array.from({ length: 30 }, (_, i) => (
                <View key={i} style={styles.calendarDayWrapper}>
                  <Text style={styles.calendarDayText}>{i + 1}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Today's Schedule Section */}
          <Text style={styles.sectionTitle}>Today's Schedule</Text>
          <View style={styles.eventCard}>
            <View style={styles.eventIconWrapper}>
              <SVG.CalendarClock />
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Medication of Child 1</Text>
              <Text style={styles.eventDetails}>Sept 5th, 2024 - 4:15 PM</Text>
            </View>
          </View>
          <View style={styles.eventCard}>
            <View style={styles.eventIconWrapper}>
              <SVG.CalendarClock />
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Medication of Child 1</Text>
              <Text style={styles.eventDetails}>Sept 5th, 2024 - 4:15 PM</Text>
            </View>
          </View>
          <View style={styles.eventCard}>
            <View style={styles.eventIconWrapper}>
              <SVG.CalendarClock />
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Medication of Child 1</Text>
              <Text style={styles.eventDetails}>Sept 5th, 2024 - 4:15 PM</Text>
            </View>
          </View>
          <View style={styles.eventCard}>
            <View style={styles.eventIconWrapper}>
              <SVG.CalendarClock />
            </View>
            <View style={styles.eventInfo}>
              <Text style={styles.eventTitle}>Medication of Child 1</Text>
              <Text style={styles.eventDetails}>Sept 5th, 2024 - 4:15 PM</Text>
            </View>
          </View>
        </ScrollView>
      </HeaderProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure it takes full height
    backgroundColor: "#f8f8f8"
  },
  contentContainer: {
    flexGrow: 1, // Ensure scrollable content expands beyond the screen
    paddingBottom: 20 // Add padding at the bottom
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 20
  },
  eventCard: {
    flexDirection: "row",
    backgroundColor: "#e0d7cd",
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingHorizontal: 30,
    paddingVertical: 30
  },
  eventIconWrapper: {
    backgroundColor: "#52316b",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30
  },
  eventIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain"
  },
  eventInfo: {
    marginLeft: 10,
    justifyContent: "center"
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  eventDetails: {
    fontSize: 14,
    color: "#999"
  },
  filterSection: {
    marginVertical: 20,
    paddingHorizontal: 20
  },
  filterText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  filterDropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10
  },
  calendarContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 20
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  calendarFilter: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#af9467",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8
  },
  calendarFilterText: {
    color: "#fff",
    marginRight: 5
  },
  calendarMonth: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#52316b"
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  calendarDayWrapper: {
    width: "14%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#e0d7cd",
    borderRadius: 10
  },

  calendarDayText: {
    color: "#52316b",
    fontWeight: "600"
  },
  calendarWrapper: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10
  },
  monthText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10
  },
  calendar: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  calendarDay: {
    fontSize: 16,
    color: "#52316b"
  },
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#52316b"
  },
  tabButton: {
    flex: 1,
    alignItems: "center"
  },
  tabIcon: {
    color: "#fff",
    fontSize: 14
  }
});

export default HomeScreen;
