import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import SVG from "../../assets/Images/SVG/SVG";
import HeaderProvider from "../../Provider/HeaderProvider";
import { useNavigation } from "@react-navigation/native";
import { MedicationScreenList } from "../../assets/MockData/mocks";
import CustomPicker from "../MedicationScreen/CustomPicker";

const InfantReportScreen = () => {
  const navigation = useNavigation();
  const [selectedChild, setSelectedChild] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState("Nap Time");

  const childOptions = ["All", "Child 1", "Child 2", "Child 3", "Child 4"];
  const childEventOptions = ["Bed", "BabyBottle", "Meal", "Diaper"];

  const filteredData =
    selectedChild === "All"
      ? MedicationScreenList
      : MedicationScreenList.filter((item) => item.childName === selectedChild);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          {selectedEvent === "Bed" ? (
            <SVG.BedClock />
          ) : selectedEvent === "BabyBottle" ? (
            <SVG.BabyBottle />
          ) : selectedEvent === "Meal" ? (
            <SVG.Meal />
          ) : (
            <SVG.Diaper />
          )}
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.childName}>{item.childName}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.reason}>{item.reason}</Text>
      </View>
      <View style={styles.rightSection}>
        <SVG.CalendarEdit height={25} width={25} />
        <SVG.DeleteRedOutlines height={25} width={25} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderProvider
        leftIcon={{
          component: <SVG.Menu />,
          onPress: () => navigation.openDrawer()
        }}
        centerText="Injury Log"
        rightIcon={{ component: <SVG.Bell />, onPress: () => {} }}
      >
        {/* Custom Picker */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={styles.filterContainer}>
            <Text style={styles.filterLabel}>Filter Childs</Text>
            <CustomPicker
              data={childOptions}
              selectedValue={selectedChild}
              onValueChange={(value) => setSelectedChild(value)}
            />
          </View>
          <View style={styles.filterContainer}>
            <Text style={styles.filterLabel}>Filter Events</Text>
            <CustomPicker
              data={childEventOptions}
              selectedValue={selectedEvent}
              onValueChange={(value) => setSelectedEvent(value)}
            />
          </View>
        </View>

        {/* Medication List */}
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      </HeaderProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9"
  },
  filterContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  filterLabel: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
    fontWeight: "500"
  },
  listContent: {
    paddingHorizontal: 20
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#D3C1A7",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10,
    alignItems: "center"
  },
  leftSection: {
    marginRight: 10
  },
  iconContainer: {
    backgroundColor: "#432C81",
    borderRadius: 25,
    padding: 15
  },
  middleSection: {
    flex: 1
  },
  childName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#432C81"
  },
  medication: {
    color: "#432C81",
    fontWeight: "normal"
  },
  date: {
    fontSize: 12,
    color: "#432C81",
    marginTop: 5
  },
  time: {
    fontSize: 12,
    color: "#432C81"
  },
  reason: {
    fontSize: 12,
    color: "#432C81"
  },
  rightSection: {
    alignItems: "center"
  }
});

export default InfantReportScreen;
