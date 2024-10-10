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
import HeaderProvider from "../../Provider/HeaderProvider";
import SVG from "../../assets/Images/SVG/SVG";
import { useNavigation } from "@react-navigation/native";

const notesData = [
  {
    id: "1",
    note: "Lorem ipsum dolor sit amet valt ab consectetur. Non viverra nascetur tincidunt diam orci sagittis enim id mattis. pharetra rutrum arcu sudg fermentum diam non tempor anh rutrum hendrerit mattis nisl.",
    icon: "https://via.placeholder.com/150" // Placeholder for icon image
  },
  // Add more data if needed
  {
    id: "2",
    note: "Lorem ipsum dolor sit amet valt ab consectetur. Non viverra nascetur tincidunt diam orci sagittis enim id mattis. pharetra rutrum arcu sudg fermentum diam non tempor anh rutrum hendrerit mattis nisl.",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "3",
    note: "Lorem ipsum dolor sit amet valt ab consectetur. Non viverra nascetur tincidunt diam orci sagittis enim id mattis. pharetra rutrum arcu sudg fermentum diam non tempor anh rutrum hendrerit mattis nisl.",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "4",
    note: "Lorem ipsum dolor sit amet valt ab consectetur. Non viverra nascetur tincidunt diam orci sagittis enim id mattis. pharetra rutrum arcu sudg fermentum diam non tempor anh rutrum hendrerit mattis nisl.",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "5",
    note: "Lorem ipsum dolor sit amet valt ab consectetur. Non viverra nascetur tincidunt diam orci sagittis enim id mattis. pharetra rutrum arcu sudg fermentum diam non tempor anh rutrum hendrerit mattis nisl.",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "6",
    note: "Lorem ipsum dolor sit amet valt ab consectetur. Non viverra nascetur tincidunt diam orci sagittis enim id mattis. pharetra rutrum arcu sudg fermentum diam non tempor anh rutrum hendrerit mattis nisl.",
    icon: "https://via.placeholder.com/150"
  },
  {
    id: "7",
    note: "Lorem ipsum dolor sit amet valt ab consectetur. Non viverra nascetur tincidunt diam orci sagittis enim id mattis. pharetra rutrum arcu sudg fermentum diam non tempor anh rutrum hendrerit mattis nisl.",
    icon: "https://via.placeholder.com/150"
  }
];

const PersonalNotesScreen = () => {
  const navigation = useNavigation();

  const renderNote = ({ item }) => (
    <View style={styles.noteCard}>
      <Image source={{ uri: item.icon }} style={styles.noteIcon} />
      <View style={styles.noteDetails}>
        <Text style={styles.noteText}>{item.note}</Text>
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
      centerText="Personal Note"
      rightIcon={{ component: <SVG.Bell />, onPress: () => {} }}
    >
      <View style={styles.container}>
        {/* Notes List */}
        <FlatList
          data={notesData}
          renderItem={renderNote}
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
  noteCard: {
    backgroundColor: "#D2C1A7",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 16
  },
  noteIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#5B3E90"
  },
  noteDetails: {
    flex: 1,
    marginLeft: 16
  },
  noteText: {
    fontSize: 14,
    color: "#333"
  },
  actions: {
    flexDirection: "row"
  },
  actionButton: {
    marginLeft: 8
  }
});

export default PersonalNotesScreen;
