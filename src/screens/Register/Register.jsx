import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import logo from "../../assests/Images/Logo-white.png";
import finger from "../../assests/Images/finger.png";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
const Register = () => {
  const navigation = useNavigation();

  const names = ["Saving", "Banking", "Rewards"];
  const [newName, setnewName] = useState(0);

  // const shuffle = useCallback(() => {
  //   const index = Math.floor(Math.random() * names.length);
  //   setnewName(names[index]);
  // }, []);

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
            <View className="">
              <Text className="text-[18px] text-center text-white">
                Register with Email
              </Text>
            </View>
          </View>
          <View style={{ flex: 2 ,   }} className="border  justify-center">
            <View className=" border ">
              <Text className="text-center">or sign up with</Text>
            </View>
          </View>

          <View className=" border justify-center" style={{ flex: 1 }} >
            <View className="flex justify-center items-center ">
              <Image source={finger} className="object-cover" />
            </View>
            <View className=" flex justify-center items-center top-[10px]">
              <Text className="w-[120px] m-auto h-[4px] rounded-full  bg-white"></Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Register;
