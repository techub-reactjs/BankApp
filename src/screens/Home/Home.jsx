import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
} from "react-native";
import React from "react";
import mapImg from "../../assests/Images/map.png";
import user from "../../assests/Images/Mask.png";
import transfer from "../../assests/Images/Vector.png";
import file from "../../assests/Images/file.png";
import refr from "../../assests/Images/ref.png";
import more from "../../assests/Images/mor.png";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar
        animated={false}
        hidden={true}
        backgroundColor="white"
        barStyle={"dark-content"}
      />
      {/* <ImageBackground
        source={mapImg}
        resizeMode="cover"
        style={{ height: 263, flex: 1, position: "relative" }}
      > */}
      <View style={{ backgroundColor: "#4965E0", height: 263 }}>
        <Image source={mapImg} resizeMode="cover" />
      </View>
      <View
        style={{
          position: "absolute",
          width: "90%",
          top: 60,
          left: 20,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Image source={user} resizeMode="cover" />
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ color: "white", fontSize: 14 }}>Ahmad F</Text>
              <View>
                <Text style={{ fontSize: 10, color: "white", paddingTop: 4 }}>
                  Personal Account
                </Text>
              </View>
            </View>
          </View>
          <Pressable onPress={() => navigation.openDrawer()}>
            <View>
              <FontAwesome5 name="bars" color="white" size={20}></FontAwesome5>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 20,
              color: "white",
              fontSize: 20,
            }}
          >
            Ballance
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            $ 2.000.000
          </Text>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 15,
            flexDirection: "row",
          }}
        >
          <View>
            <View
              style={{
                borderRadius: 7,
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                padding: 8,
              }}
            >
              <Image source={transfer} resizeMode="cover" />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                paddingVertical: 5,
                color: "white",
                fontWeight: "500",
              }}
            >
              Transfer
            </Text>
          </View>
          <View>
            <View
              style={{
                borderRadius: 7,
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                padding: 8,
              }}
            >
              <Image source={file} resizeMode="cover" />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                paddingVertical: 5,
                color: "white",
                fontWeight: "500",
              }}
            >
              Withdraw
            </Text>
          </View>
          <View>
            <View
              style={{
                borderRadius: 7,
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                padding: 8,
              }}
            >
              <Image source={refr} resizeMode="cover" />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                paddingVertical: 5,
                color: "white",
                fontWeight: "500",
              }}
            >
              Referral{" "}
            </Text>
          </View>
          <View>
            <View
              style={{
                borderRadius: 7,
                height: 40,
                width: 40,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                padding: 8,
              }}
            >
              <Image source={more} resizeMode="cover" />
            </View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                paddingVertical: 5,
                color: "white",
                fontWeight: "500",
              }}
            >
              More
            </Text>
          </View>
        </View>
      </View>
      {/* </ImageBackground> */}

      <View></View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
