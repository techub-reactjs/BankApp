import {
  View,
  Image,
  SafeAreaView,
  Text,
  Pressable,
  // TouchableOpacity,
} from "react-native";
import React, {  useEffect, useState } from "react";
import logo from "../../assests/Images/Logo-white.png";
import finger from "../../assests/Images/finger.png";
import facebook from "../../assests/Images/facebook.png";
import apple from "../../assests/Images/apple.png";
import google from "../../assests/Images/google.png";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

const Register = () => {
  const navigation = useNavigation();

  const names = ["Saving", "Banking", "Rewards"];
  const [newName, setnewName] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      let currentIdx = newName;
      setnewName(currentIdx + 1);
    }, 1000);
    return () => clearInterval(intervalID);
  }, [newName]);

  let textThatChanges = names[newName % names.length];

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
            <View className="text-center   max-w-[290px] top-[40px]">
              <Text className="text-[47px] uppercase font-bold text-white text-center">
                The Future of {textThatChanges}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 3 }}>
          <View className="flex-1 ">
            <View className="max-w-[200px] text-center items-center m-auto">
              <Text className="text-[20px] font-bold text-white">
                Welcome to BankRoll
              </Text>
              <Text className="text-center text-white leading-[18.75px]">
                Lorem Ipsum is simply dummy text of the printing and{" "}
              </Text>
            </View>
            <Pressable className="" onPress={() => navigation.navigate('EmailSignup')} >
              <Text className="text-[18px] text-center text-white">
                Register with Email
              </Text>
            </Pressable>
          </View>
          <View style={{ flex: 1}} className=" pt-3 justify-center max-w-[300px] m-auto">
            <View className="  flex flex-row justify-between items-center ">
              <View className="border bg-[#D6D6D6] border-[#D6D6D6] w-[30%]"></View>
              <Text className="text-center px-5 text-white">
                or sign up with
              </Text>
              <View className="border bg-[#D6D6D6] border-[#D6D6D6] w-[30%] "></View>
            </View>
            <View className="flex flex-row justify-center pt-8">
              <Image source={google} className="object-contain w-[56px] h-[56px]"/>
              <Image source={facebook} className="object-contain w-[56px] mx-5 h-[56px]"/>
              <Image source={apple} className="object-contain w-[56px] h-[56px]"/>
            </View>
            <View className="pt-3 left-[60px]">
              <Text className="text-white text-[14px]">Have an account? </Text>
            </View>
          </View>

          <View className=" justify-end" style={{flex:0}}>
            <View className="flex justify-center items-center pt-5">
              <Image source={finger} className="object-cover w-[48.21px] h-[41px]" />
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

export default Register;
