import { View, Image, TextInput, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import logo from "../../assests/Images/Logo-color.png";
import Icon from "react-native-vector-icons/Feather";
import facebook from "../../assests/Images/facebook-color.png";
import apple from "../../assests/Images/apple-color.png";
import google from "../../assests/Images/google-color.png";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const [show, setShow] = useState(false);

  const users = [
    [1, 0.1],
    [0.1, 1],
  ];
  const [newUser, setnewUser] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      let currentIdx = newUser;
      setnewUser(currentIdx + 1);
    }, 2500);
    return () => clearInterval(intervalID);
  }, [newUser]);

  let textThatChanges = users[newUser % users.length];
  return (
    <LinearGradient
      className="h-full flex-1"
      colors={["#4965E0", "#896CDD"]}
      end={textThatChanges}
    >
      {/* <View className="bg-white "> */}
      <StatusBar hidden={true} />
      <View className="" style={{ flex: 2 }}>
        <View className="flex justify-center items-center top-[33px]">
          <View>
            <Image
              source={logo}
              className="object-contain w-[219px] h-[53px]"
            />
          </View>
        </View>
      </View>

      <View style={{ flex: 2 }} className="px-5 pt-8">
        <View className="text-center flex justify-center items-center pb-6">
          <Text className="text-[20px] ">Sign in to continue</Text>
        </View>

        <View className="pb-[10px]">
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            className="relative"
            style={{ padding: 2, borderRadius: 12, height: 50 }}
          >
            <TextInput
              placeholder="gladys.warren@email.com"
              type="email"
              className={`${
                color === 3 ? "bg-white" : "bg-transparent"
              } rounded-[12px] placeholder:text-[16px] h-[46px] px-2`}
            />

            <Text className="absolute bg-white px-2 left-6 -top-2 text-[14px]">
              Email
            </Text>
          </LinearGradient>
        </View>

        <View className="pb-[10px]">
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 12, height: 50 }}
            className="relative"
          >
            <View className=" justify-between flex-row  items-center flex w-full bg-white rounded-[12px] placeholder:text-[16px] h-[46px] px-2">
              <TextInput
                placeholder="......"
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
            <Text className="absolute bg-white px-2 left-6 -top-2 text-[14px]">
              Password
            </Text>
          </LinearGradient>
        </View>

        <View className="flex justify-end items-end pb-[20px]">
          <Text className="  text-[14px]">Forgot Password?</Text>
        </View>

        <Pressable className="pb-[10px]" onPress={() => navigation.navigate('phoneVerify')}>
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 12, height: 50 }}
            className="flex justify-center items-center"
          >
            <Text className=" text-white text-[14px]" >Sign in</Text>
          </LinearGradient>
        </Pressable>
      </View>

      <View
        style={{ flex: 0 }}
        className=" pt-32 justify-center max-w-[300px] m-auto"
      >
        <View className="  flex flex-row justify-between items-center ">
          <View className="border bg-[#D6D6D6] border-[#D6D6D6] w-[30%]"></View>
          <Text className="text-center px-5 text-white">or sign in with</Text>
          <View className="border bg-[#D6D6D6] border-[#D6D6D6] w-[30%] "></View>
        </View>
        <View className="flex flex-row justify-center pt-8">
          <Image source={google} className="object-contain w-[56px] h-[56px]" />
          <Image
            source={facebook}
            className="object-contain w-[56px] mx-5 h-[56px]"
          />
          <Image source={apple} className="object-contain w-[56px] h-[56px]" />
        </View>
      </View>

      <View className=" justify-end" style={{ flex: 0 }}>
        <View className="flex justify-center items-center pt-5">
          <Text className="text-white text-[14px]">
            Don’t have account? Sign up.{" "}
          </Text>
        </View>
        <View className=" flex pt-[50px] pb-2 ">
          <Text className="w-[116px] m-auto h-[8.07px] rounded-full  bg-white"></Text>
        </View>
      </View>
      {/* </View> */}
    </LinearGradient>
  );
};

export default Login;
