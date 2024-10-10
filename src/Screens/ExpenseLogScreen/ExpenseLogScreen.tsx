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
import Png from "../../assets/Images/Png/Png";
import SVG from "../../assets/Images/SVG/SVG";
import HeaderProvider from "../../Provider/HeaderProvider";
import { useNavigation } from "@react-navigation/native";

const expensesData = [
  {
    id: "1",
    title: "Expense of Child 1",
    totalPrice: "£200",
    splitPrice: "£70",
    receiptImage: Png.ExpenseReceipt
  },
  {
    id: "2",
    title: "Expense of Child 1",
    totalPrice: "£200",
    splitPrice: "£70",
    receiptImage: Png.ExpenseReceipt
  },
  {
    id: "3",
    title: "Expense of Child 1",
    totalPrice: "£200",
    splitPrice: "£70",
    receiptImage: Png.ExpenseReceipt
  },
  {
    id: "4",
    title: "Expense of Child 1",
    totalPrice: "£200",
    splitPrice: "£70",
    receiptImage: Png.ExpenseReceipt
  }
];

const ExpenseItem = ({ item }) => (
  <View style={styles.expenseContainer}>
    <View style={styles.leftSection}>
      <View style={styles.iconContainer}>
        <Text style={styles.poundIcon}>£</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.expenseText}>{item.title}</Text>
        <Text style={styles.totalPriceText}>
          Total Price: {item.totalPrice}
        </Text>
        <Text style={styles.splitPriceText}>
          Split Price: {item.splitPrice}
        </Text>
      </View>
    </View>
    <View>
      <Image
        source={item.receiptImage}
        style={{ height: 100, width: 100 }}
        resizeMode="contain"
      />
    </View>
    <View style={styles.rightSection}>
      <TouchableOpacity>
        <SVG.Calendar />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          name="trash-outline"
          size={24}
          color="red"
          style={styles.trashIcon}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const ExpenseLogScreen = () => {
  const navigation = useNavigation();

  const renderExpense = ({ item }) => <ExpenseItem item={item} />;

  return (
    <HeaderProvider
      leftIcon={{
        component: <SVG.Menu />,
        onPress: () => navigation.openDrawer()
      }}
      centerText="Expense Log"
      rightIcon={{
        component: (
          <TouchableOpacity>
            <Icon name="add-outline" size={24} color="white" />
          </TouchableOpacity>
        ),
        onPress: () => {}
      }}
    >
      <View style={styles.container}>
        {/* Filter Section */}
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Filter Childs</Text>
          <TouchableOpacity style={styles.childSelector}>
            <Text style={styles.childSelectorText}>Child 1</Text>
            <Icon name="chevron-down-outline" size={16} color="black" />
          </TouchableOpacity>
        </View>

        {/* Expense List */}
        <FlatList
          data={expensesData}
          renderItem={renderExpense}
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
  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10
  },
  filterText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10
  },
  childSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D2C1A7",
    padding: 8,
    borderRadius: 20,
    justifyContent: "space-between",
    width: "35%"
  },
  childSelectorText: {
    fontSize: 16,
    color: "#000"
  },
  listContainer: {
    paddingHorizontal: 16,
    marginBottom: 20
  },
  expenseContainer: {
    backgroundColor: "#D2C1A7",
    borderRadius: 15,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center"
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
  poundIcon: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  },
  textContainer: {
    justifyContent: "center"
  },
  expenseText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 4
  },
  totalPriceText: {
    fontSize: 14,
    color: "#808080"
  },
  splitPriceText: {
    fontSize: 14,
    color: "#808080"
  },
  rightSection: {
    alignItems: "center"
  },
  receiptImage: {
    width: "18%",
    height: "18%",
    marginBottom: 8
  },
  trashIcon: {
    marginTop: 4
  }
});

export default ExpenseLogScreen;
