import {
  View,
  Image,
  SafeAreaView,
  Text,
  Pressable,
  // TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import logo from "../../assests/Images/Logo-white.png";
import finger from "../../assests/Images/finger.png";
import facebook from "../../assests/Images/facebook.png";
import apple from "../../assests/Images/apple.png";
import google from "../../assests/Images/google.png";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";

const Splash = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={["#4965E0", "#896CDD"]}
        end={[1, 0.1]}
        className="h-full "
      >
        <View style={{ flex: 2 }}>
          <View className=" justify-center items-center top-[50px]">
            <Image
              source={logo}
              className="object-contain w-[219px] h-[53px]"
            />
            <View className="text-center  top-[40px]">
              <Text className="text-[40px]  uppercase font-bold text-white text-center">
                Secure your money for free and get rewards
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <View className="flex-1 ">
            <View className="max-w-[200px] text-center items-center m-auto ">
              <Text className="text-[20px] font-bold text-white leading-[24px] ">
                Welcome to BankRoll
              </Text>
              <Text className="text-center text-white leading-[18.75px] pt-3">
                Lorem Ipsum is simply dummy text of the printing and{" "}
              </Text>
            </View>
           
          </View>

          <View className=" flex justify-center items-center">
            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              className=" rounded-full h-[50px] w-[315px] bg-[#7853FF] mt-[20px] text-center text-white"
            >
              <Text className="text-center items-center pt-3 text-white font-medium">
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="relative"
              onPress={() => navigation.navigate("register")}
            >
              <View className=" rounded-full h-[50px] w-[315px] bg-white opacity-[0.25px] mt-[20px] text-center text-white"></View>
              <Text className="text-center w-full  items-center self-center  top-[35px] text-white font-medium absolute z-50 opacity-1">
                Register
              </Text>
            </TouchableOpacity>
          </View>

          <View className=" justify-end" style={{ flex: 0 }}>
            <View className="flex justify-center items-center pt-5">
              <Image
                source={finger}
                className="object-cover w-[48.21px] h-[41px]"
              />
            </View>
            <View className=" flex pt-[50px] pb-2 ">
              <Text className="w-[116px] m-auto h-[8.07px] rounded-full  bg-white"></Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Splash;
