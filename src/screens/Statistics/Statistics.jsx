import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { StatusBar } from "expo-status-bar";

const Statistics = ({ navigation }) => {
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

export default Statistics;

const styles = StyleSheet.create({});
