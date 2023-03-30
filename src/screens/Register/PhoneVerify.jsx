import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
const PhoneVerify = () => {
  const navigation = useNavigation();

  return (
    <>
    
      <View className="bg-white h-full">
        <StatusBar hidden={true} />
        <View
          style={{ flex: 1 }}
          className="px-5 pt-[122px] flex justify-start items-center"
        >
          <View className="text-center flex justify-center items-center pb-6">
            <Text className="text-[24px] text-[#282B29] font-bold ">
              OTP Verification
            </Text>
          </View>

          <View className="flex justify-center items-center ">
            <Text className="  text-[16px] text-[#C2C2C2]">
              An authentication code has been sent to
            </Text>
            <Text className="  text-[16px]">(+880) 111 222 333</Text>
          </View>

          <View>
            <OTPInputView
              style={{ width: "80%", height: 200 }}
              pinCount={4}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
          </View>
          <View className="flex items-center justify-center flex-row text-center">
            <Text className="text-[#282B29] text-[16px]">
              I didn't receive code.
            </Text>
            <Text className="text-[#4965E0] text-[16px]">Resend Code</Text>
          </View>
          <View className="py-2">
            <Text className="text-[#EE6767] text-[16px]">1:20 Sec left</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <LinearGradient
              className=" w-[342px] mt-6 rounded-[12px] h-[51px] flex justify-center items-center"
              colors={["#4965E0", "#896CDD"]}
              end={[1, 0.1]}
            >
              <Text className="text-white text-[16px]">Verify</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
    display: "flex",
    justifyContent: "space-between",
  },

  borderStyleHighLighted: {
    borderColor: "#4965E0",
  },

  underlineStyleBase: {
    width: 66,
    height: 66,
    borderBottomWidth: 1,
    borderRadius: 15,
    backgroundColor: "#C2C2C2",
    color: "#4965E0",
    fontSize: 24,
    fontWeight: "bold",
  },

  underlineStyleHighLighted: {
    borderColor: "#4965E0",
  },
});

export default PhoneVerify;
