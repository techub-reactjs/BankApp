import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AccountCreated = () => {
  return (
    <>
      <View className="bg-white h-full" >
        <View className="flex justify-center items-center top-[30px]" style={{flex:1}}>
        <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 100, height: 194, width:194 }}
          >
          </LinearGradient>
        </View>
        <View  className="flex justify-center items-center" style={{flex:2}}>
          <Text className="text-[22px] font-bold">Account Created!</Text>
          <Text className="py-6 text-[16px] text-center">
            Your account had beed created successfully.{" "}
          </Text>
          <Text className="text-center max-w-[350px] pb-6 text-[16px]">
            Please click on the link and verify the email address to complete
            the registration{" "}
          </Text>
        </View>
        <View style={{flex:1}} >
          <View className="px-5">
            <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 25, height: 50 }}
          >
            <View className=" h-[50px] rounded-full flex justify-center items-center">
              <Text className="text-white text-[16px] font-bold">Take me to sign in</Text>
            </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    </>
  );
};

export default AccountCreated;
