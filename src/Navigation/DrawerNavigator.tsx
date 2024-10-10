import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import EducationalDetailsScreen from "../Screens/EducationalDetailsScreen/EducationalDetailsScreen";
import ExpenseLogScreen from "../Screens/ExpenseLogScreen/ExpenseLogScreen";
import InfantReportScreen from "../Screens/InfantReportScreen/InfantReportScree";
import InjuryLogScreen from "../Screens/InjuryLogScreen/InjuryLogScreen";
import CustomDrawerContent from "./DrawerContent";
import { TabNavigator } from "./TabNavigator";
import ContactBookScreen from "../Screens/ContactBookScreen/ContactBookScreen";
import PersonalNotesScreen from "../Screens/PersonalNotesScreen/PersonalNotesScreen";
import CardDetailsScreen from "../Screens/CradDetailsScreen/CradDetailsScreen";
import ChatScreen from "../Screens/ChatScreen/ChatScreen";
import MedicationScreen from "../Screens/MedicationScreen/MedicationScreen";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="MyTabs" component={TabNavigator} />
      <Drawer.Screen name="MedicationScreen" component={MedicationScreen} />
      <Drawer.Screen
        name="EducationalDetailsScreen"
        component={EducationalDetailsScreen}
      />
      <Drawer.Screen name="InfantReportScreen" component={InfantReportScreen} />
      <Drawer.Screen name="InjuryLogScreen" component={InjuryLogScreen} />
      <Drawer.Screen name="ContactBookScreen" component={ContactBookScreen} />
      <Drawer.Screen name="ExpenseLogScreen" component={ExpenseLogScreen} />
      <Drawer.Screen name="ChatScreen" component={ChatScreen} />
      <Drawer.Screen
        name="PersonalNotesScreen"
        component={PersonalNotesScreen}
      />
      <Drawer.Screen name="CardDetailsScreen" component={CardDetailsScreen} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
