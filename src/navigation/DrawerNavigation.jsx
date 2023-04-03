import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthNavigator from "./AuthNavigator";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      
    >
      <Drawer.Screen
        name="Home"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
