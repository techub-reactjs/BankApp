import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";

const Notification = () => {
  return (
    <>
      <StatusBar
        animated={false}
        hidden={true}
        backgroundColor="white"
        barStyle={"dark-content"}
      />
<>
      <StatusBar
        animated={false}
        hidden={true}
        backgroundColor="white"
        barStyle={"dark-content"}
      />
      <View>
        <Text>Messages</Text>
      </View>
    </>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({});
