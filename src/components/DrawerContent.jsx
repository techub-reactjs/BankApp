import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  useTheme,
  Title,
  Caption,
  Drawer,

} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import user from "../assests/Images/Mask.png";
import doller from "../assests/Images/doller.png";
import trans from "../assests/Images/trans.png";
import card from "../assests/Images/card.png";
import pay from "../assests/Images/pay.png";
import save from "../assests/Images/save.png";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/Fontisto";
const DrawerContent = (props) => {
  const paperTheme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Image source={user} size={50} />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icons
                name="dollar"
                color={color}
                size={size}
                />

                // <Image source={doller} resizeMode="cover" />
              )}
              inactiveTintColor="#4965E0"
            
              label="Payment"
              style={{ backgroundColor: "#E7F0FF" }}
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icons
                name="arrow-swap"
                color={color}
                size={size}
                />
                // <Image source={trans} resizeMode="cover" />
              )}
              label="Transaction"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Image source={card} resizeMode="cover" />
              )}
              label="My Card"
              onPress={() => {
                props.navigation.navigate("BookmarkScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                // <Icons
                // name="settings-outline"
                // color={color}
                // size={size}
                // />
                <Image source={pay} resizeMode="cover" />
              )}
              label="Promossion"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                // <Icon
                // name="account-check-outline"
                // color={color}
                // size={size}
                // />
                <Image source={save} resizeMode="cover" />
              )}
              label="Saving"
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={"white"} size={size} />
          )}
          label="Sign Out"
          inactiveTintColor="white"
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingVertical: 50,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    marginHorizontal:15,
    backgroundColor: "#4965E0",
    borderRadius: 10,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
