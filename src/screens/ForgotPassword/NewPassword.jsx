import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const NewPassword = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);

  return (
    <>
      <View className="bg-white h-full">
        <StatusBar hidden={true} />
        <View
          style={{ flex: 1 }}
          className="px-5 pt-[122px] flex justify-start items-center "
        >
          <View className=" px-2 flex items-center justify-center  h-[50px] rounded-full bg-[#C2C2C2] w-[315px]">
            <View className=" justify-between flex-row  items-center flex w-full bg-transparent rounded-[12px] placeholder:text-[16px] pt  px-2">
              <TextInput
                placeholder="Password"
                secureTextEntry={show ? true : false}
                type="text"
                className=""
              />

              <Icon
                onPress={() => setShow(!show)}
                name={show ? "eye-off" : "eye"}
                size={20}
                color={"black"}
              />
            </View>
          </View>

          <View className=" mt-[35px] px-2 flex items-center justify-center  h-[50px] rounded-full bg-[#C2C2C2] w-[315px]">
            <View className=" justify-between flex-row  items-center flex w-full bg-transparent rounded-[12px] placeholder:text-[16px] pt  px-2">
              <TextInput
                placeholder="Password"
                secureTextEntry={show ? true : false}
                type="text"
                className=""
              />

              <Icon
                onPress={() => setShow(!show)}
                name={show ? "eye-off" : "eye"}
                size={20}
                color={"black"}
              />
            </View>
          </View>

       

          <View className="">
            <TouchableOpacity
              onPress={() => navigation.navigate("ChangePassword")}
            >
              <LinearGradient
                className=" w-[342px] mt-[104px] rounded-[12px] h-[51px] flex justify-center items-center"
                colors={["#4965E0", "#896CDD"]}
                end={[1, 0.1]}
              >
                <Text className="text-white text-[16px]">Send</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </LinearGradient> */}
    </>
  );
};

export default NewPassword;
