import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import SVG from "../../assets/Images/SVG/SVG";
import HeaderProvider from "../../Provider/HeaderProvider";
import { useNavigation } from "@react-navigation/native";
import { MedicationScreenList } from "../../assets/MockData/mocks";

const MedicationScreen = () => {
  const navigation = useNavigation();
  const [selectedChild, setSelectedChild] = useState("Child 1");
  const filteredData = MedicationScreenList.filter(
    (item) => item.childName === selectedChild
  );
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <SVG.PillWhite />
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.childName}>
          {item.childName}{" "}
          <Text style={styles.medication}>({item.medication})</Text>
        </Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.reason}>{item.reason}</Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.iconButton}>
          <SVG.CalendarEdit height={25} width={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <SVG.DeleteRedOutlines height={25} width={25} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderProvider
        leftIcon={{
          component: <Ionicons name="arrow-back" size={24} color="white" />,
          onPress: () => {
            navigation.openDrawer();
          }
        }}
        centerText="Medication"
        rightIcon={{ component: <SVG.Bell />, onPress: () => {} }}
      >
        {/* Filter */}
        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Filter Childs</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedChild}
              onValueChange={(itemValue) => setSelectedChild(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Child 1" value="Child 1" />
              <Picker.Item label="Child 2" value="Child 2" />
              <Picker.Item label="Child 3" value="Child 3" />
              <Picker.Item label="Child 4" value="Child 4" />
              <Picker.Item label="Child 5" value="Child 5" />
              <Picker.Item label="Child 6" value="Child 6" />
            </Picker>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#432C81",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  headerTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  },
  filterContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  filterLabel: {
    fontSize: 16,
    color: "#432C81",
    marginBottom: 5
  },
  pickerContainer: {
    borderWidth: 1,
    width: "30%",
    borderColor: "#D3C1A7",
    borderRadius: 25,
    overflow: "hidden"
  },
  picker: {
    height: 40,
    backgroundColor: "#D3C1A7"
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
    // flexDirection: "row",
    alignItems: "center"
  },
  iconButton: {
    marginLeft: 10
  }
});

export default MedicationScreen;
