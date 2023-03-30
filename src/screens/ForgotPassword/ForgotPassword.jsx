import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Popup from "../../util/Popup/Popup";
import PasswordResetInfo from "./PasswordResetInfo";
// import { useNavigation } from "@react-navigation/native";
const ForgotPassword = () => {
  // const navigation = useNavigation();
  const [show, setShow] = useState(false);

  return (
    <>
      {show && (
        <Popup
          modalVisible={show}
          data={<PasswordResetInfo />}
          setModalVisible={setShow}
        />
      )}

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

          <View className="bg-[#C2C2C2] mt-[35px] px-4 py-3 w-[315px] rounded-full h-[50px]">
            <TextInput
              placeholder="Email Address"
              className="placeholder:text-[#282B29]"
            />
          </View>

          <View className="mt-[36px]">
            <Text className=" text-[16px] text-[#282B29] leading-[18.75px]">
              Email sent to ex*****@gmail.com
            </Text>
          </View>

          <TouchableOpacity onPress={() => setShow(true)}>
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
      {/* </LinearGradient> */}
    </>
  );
};

export default ForgotPassword;
