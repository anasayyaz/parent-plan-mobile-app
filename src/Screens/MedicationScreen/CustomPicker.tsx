import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomPicker = ({ data, selectedValue, onValueChange }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (value) => {
    onValueChange(value);
    setModalVisible(false);
  };

  return (
    <View>
      {/* Button to open the picker modal */}
      <TouchableOpacity
        style={styles.pickerButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.pickerText}>{selectedValue}</Text>
        <Ionicons name="chevron-down" size={20} color="#432C81" />
      </TouchableOpacity>

      {/* Modal for displaying options */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        />
        <View style={styles.modalContent}>
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#D3C1A7",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#D3C1A7",
    width: 150
  },
  pickerText: {
    fontSize: 16,
    color: "#432C81"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  },
  optionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D3C1A7"
  },
  optionText: {
    fontSize: 16,
    color: "#432C81"
  }
});

export default CustomPicker;
