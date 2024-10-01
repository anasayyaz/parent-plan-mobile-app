import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons"; // For icons like menu, bell, and event
import SVG from "../../assets/Images/SVG/SVG";
import HeaderProvider from "../../Provider/HeaderProvider";
import { scheduleData } from "../../assets/MockData/mocks";

const CalendarScreen = () => {
  const navigation = useNavigation();

  const renderEventItem = ({ item }) => (
    <View style={styles.eventCard}>
      <View style={styles.iconWrapper}>
        <SVG.CalendarClock />
      </View>
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
        <Text style={styles.eventTime}>{item.time}</Text>
      </View>
    </View>
  );

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
          {/* Header Section */}

          {/* Buttons for Past & Upcoming Events */}
          <View style={styles.eventTabs}>
            <TouchableOpacity style={styles.tabButton}>
              <Text style={styles.tabButtonText}>PAST EVENTS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, styles.activeTabButton]}
            >
              <Text style={styles.activeTabButtonText}>UPCOMING EVENTS</Text>
            </TouchableOpacity>
          </View>

          {/* Filter Section */}
          <View style={styles.filterSection}>
            <Text style={styles.filterText}>Filter Childs</Text>
            <TouchableOpacity>
              <Ionicons
                name="add-circle-outline"
                size={24}
                color="#391448;
"
              />
            </TouchableOpacity>
          </View>

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
          <FlatList
            data={scheduleData}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.scheduleList}
          />
        </ScrollView>
      </HeaderProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8f8f8"
  },
  contentContainer: {
    padding: 20
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#52316b",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  eventTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#52316b"
  },
  activeTabButton: {
    backgroundColor: "#391448"
  },
  tabButtonText: {
    color: "#52316b",
    fontWeight: "600"
  },
  activeTabButtonText: {
    color: "#fff",
    fontWeight: "600"
  },
  filterSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  filterText: {
    fontSize: 16,
    fontWeight: "bold"
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#52316b",
    marginBottom: 10
  },
  scheduleList: {
    paddingBottom: 20
  },
  eventCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0d7cd",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15
  },
  iconWrapper: {
    backgroundColor: "#391448",
    padding: 10,
    borderRadius: 30,
    marginRight: 15
  },
  eventDetails: {
    flex: 1
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#52316b"
  },
  eventDate: {
    fontSize: 12,
    color: "#7c6b5a",
    marginTop: 5
  },
  eventTime: {
    fontSize: 12,
    color: "#7c6b5a",
    marginTop: 5
  }
});

export default CalendarScreen;
