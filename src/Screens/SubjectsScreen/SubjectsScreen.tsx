import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import CustomPicker from "../Medication/CustomPicker";
import HeaderProvider from "../../Provider/HeaderProvider";
import SVG from "../../assets/Images/SVG/SVG";
import { useNavigation } from "@react-navigation/native";

const SubjectsScreen = () => {
  const navigation = useNavigation();
  const [selectedChild, setSelectedChild] = useState("All");
  const [subjects, setSubjects] = useState([
    { id: "1", name: "English", icon: "ios-text-outline" },
    { id: "2", name: "Math", icon: "ios-calculator-outline" },
    { id: "3", name: "Science", icon: "ios-flask-outline" },
    {}
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newSubject, setNewSubject] = useState("");
  const childOptions = ["All", "Child 1", "Child 2", "Child 3", "Child 4"];

  const addNewSubject = () => {
    if (newSubject.trim()) {
      const updatedSubjects = subjects.filter((subject) => subject.id);

      setSubjects([
        ...updatedSubjects,
        {
          id: (updatedSubjects.length + 1).toString(),
          name: newSubject,
          icon: "ios-add-outline"
        },
        {}
      ]);

      setNewSubject("");
      setModalVisible(false);
    }
  };

  const renderItem = ({ item }) => {
    if (!item.id) {
      return (
        <TouchableOpacity
          style={styles.addCard}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="add-outline" size={32} color="white" />
          <Text style={styles.addText}>Add Subject</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.card}>
        <Feather name="smile" size={24} color="#5B3E90" />
        <Text style={styles.subjectText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <HeaderProvider
      leftIcon={{
        component: <Ionicons name="arrow-back" size={24} color="white" />,
        onPress: () => navigation.openDrawer()
      }}
      centerText="Medication"
      rightIcon={{ component: <SVG.Bell />, onPress: () => {} }}
    >
      <View style={styles.container}>
        {/* Custom Picker */}
        <View style={styles.filterContainer}>
          <Text style={styles.filterLabel}>Filter Childs</Text>
          <CustomPicker
            data={childOptions}
            selectedValue={selectedChild}
            onValueChange={(value) => setSelectedChild(value)}
          />
        </View>

        {/* Subjects Grid */}
        <FlatList
          data={subjects}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />

        {/* Modal for Adding New Subject */}
        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add New Subject</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter subject name"
                value={newSubject}
                onChangeText={setNewSubject}
              />
              <TouchableOpacity
                style={styles.addButton}
                onPress={addNewSubject}
              >
                <Text style={styles.addButtonText}>Add Subject</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </HeaderProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#5B3E90"
  },
  filterLabel: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
    fontWeight: "500"
  },
  title: {
    fontSize: 20,
    color: "white"
  },
  filterContainer: {
    padding: 16
  },
  filterText: {
    fontSize: 16,
    color: "#5B3E90"
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D2C1A7",
    padding: 10,
    borderRadius: 20,
    marginTop: 8
  },
  filterButtonText: {
    fontSize: 16,
    color: "#5B3E90",
    marginRight: 8
  },
  grid: {
    paddingHorizontal: 16,
    paddingBottom: 16
  },
  card: {
    backgroundColor: "#D2C1A7",
    paddingHorizontal: 10,
    paddingVertical: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginRight: 8,
    marginBottom: 8
  },
  subjectText: {
    fontSize: 16,
    color: "#5B5B5B",
    marginTop: 8,
    fontWeight: "600"
  },
  addCard: {
    backgroundColor: "#5B3E90",
    paddingHorizontal: 55,
    paddingVertical: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    marginBottom: 8
  },
  addText: {
    fontSize: 16,
    color: "white",
    marginTop: 8,
    fontWeight: "600"
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center"
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10
  },
  textInput: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#5B3E90",
    marginBottom: 20,
    padding: 8
  },
  addButton: {
    backgroundColor: "#5B3E90",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  addButtonText: {
    color: "white",
    fontSize: 16
  },
  closeButton: {
    padding: 10
  },
  closeButtonText: {
    color: "#5B3E90",
    fontSize: 16
  }
});

export default SubjectsScreen;
