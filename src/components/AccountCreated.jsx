import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AccountCreated = () => {
  return (
    <>
      <View style={{ flex: 2 }}>
        <View className="flex justify-center items-center top-[30px]">
            <View className=" w-[140px] bg-blue-300 h-[140px]  rounded-full">
            {/* <LinearGradient
              colors={["#4965E0", "#896CDD"]}
              style={{
                height: 145,
                width: 145,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#4965E0",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.5,
                shadowRadius: 12,
              }}
            >
             
            </LinearGradient> */}
          </View>
        </View>
      </View>
      <View style={{ flex: 4 }} className="flex justify-center items-center">
        <Text className="text-[22px] font-bold">Account Created!</Text>
        <Text className="py-6 text-[16px] text-center">Your account had beed created successfully. </Text>
        <Text className="text-center max-w-[350px] pb-6 text-[16px]">
          Please click on the link and verify the email address to complete the
          registration{" "}
        </Text>

      </View>
      <View style={{flex:2}}>
      <View className="px-5">
          {/* <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 12, height: 50 }}
          > */}
          <View className="bg-white h-[50px] rounded-full flex justify-center items-center">
            <Text>Take me to sign in</Text>
          </View>
          {/* </LinearGradient> */}
        </View>
      </View>
    </>
  );
};

export default AccountCreated;
