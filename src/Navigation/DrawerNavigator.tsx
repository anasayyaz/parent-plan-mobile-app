import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import CalenderScreen from "../Screens/CalenderScreen";
import { TabNavigator } from "./TabNavigator";
import CustomDrawerContent from "./DrawerContent";
import MedicationScreen from "../Screens/Medication/MedicationScreen";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      {/* <Drawer.Screen name="MedicationScreen" component={MedicationScreen} /> */}

      <Drawer.Screen name="MyTabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
