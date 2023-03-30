import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useNavigation } from "@react-navigation/native";
const ForgotVerify = () => {
  const navigation = useNavigation();

  return (
    <>
      <View className="bg-white h-full">
        <StatusBar hidden={true} />
        <View
          style={{ flex: 1 }}
          className="px-5 pt-[122px] flex justify-start items-center"
        >
          <View className="flex justify-center items-center ">
            <Text className=" text-[16px] text-[#282B29] leading-[18.75px]">
              We will send a mail to
            </Text>
            <Text className=" text-[16px] text-[#282B29] leading-[18.75px] max-w-[240px] m-auto text-center">
              the email address you registered to regain your password
            </Text>
          </View>

          <View className="">
            <OTPInputView
              style={{ width: "80%", height: 150 }}
              pinCount={4}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
          </View>
          <View className="flex items-center  justify-center flex-row text-center">
            <Text className="text-[#282B29] text-[16px] ">Not Yet Code</Text>
            <Text className="text-[#4965E0] font-bold text-[16px] px-3">
              Resend Now!
            </Text>
          </View>
          <View className="">
            <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
              <LinearGradient
                className=" w-[342px] mt-[58px] rounded-[12px] h-[51px] flex justify-center items-center"
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

export default ForgotVerify;
