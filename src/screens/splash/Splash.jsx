import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import logo from "../../assests/Images/Logo-white.png";
import finger from "../../assests/Images/finger.png";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
const Splash = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 h-full">
      <StatusBar hidden={true} />
      <LinearGradient
        // Background Linear Gradient
        colors={["#4965E0", "#896CDD"]}
        end={[1, 0.1]}
        className="h-full "
      >
        <View className="justify-center items-center top-[63px] ">
          <Image source={logo} className="object-contain w-[219px] h-[53px]" />
          <View className="text-center  top-[60px]">
            <Text className="text-[47px] font-bold text-white text-center">
              Secure your money for free and get rewards
            </Text>
          </View>
          <View className="  top-[120px] ">
            <View className="max-w-[200px] text-center items-center m-auto">
              <Text className="text-[20px] font-bold text-white">
                Welcome to BankRoll
              </Text>
              <Text className="text-center text-white leading-[18.75px]">
                Lorem Ipsum is simply dummy text of the printing and{" "}
              </Text>
            </View>
            <View className="top-[30px]">
            <TouchableOpacity className=" rounded-full h-[50px] w-[315px] bg-[#7853FF] mt-[20px] text-center text-white">
              <Text className="text-center items-center pt-3 text-white font-medium">
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="relative" onPress={() => navigation.navigate('register')}>
              <View className=" rounded-full h-[50px] w-[315px] bg-white opacity-[0.25px] mt-[20px] text-center text-white"></View>
              <Text className="text-center w-full  items-center top-[35px] text-white font-medium absolute z-50 opacity-1">
                Register
              </Text>
            </TouchableOpacity>
            </View>
            <View className="flex justify-center items-center top-[50px]">
              <Image source={finger} className="object-cover" />
            </View>
            <View className="top-[85px] flex justify-center items-center">
              <Text className="w-[120px] m-auto h-[4px] rounded-full  bg-white"></Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Splash;
