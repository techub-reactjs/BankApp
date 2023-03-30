import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const PasswordResetInfo = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.modalView}>
        <LinearGradient
          colors={["#4965E0", "#896CDD"]}
          end={[1, 0.1]}
          className="h-[50px] rounded-t-[10px] w-full flex items-center justify-center "
        >
          <Text className="text-white text-center text-[20px] font-bold ">
            Password Reset Email Sent
          </Text>
        </LinearGradient>

        <View className="text-center pt-[24px] items-center">
          <Text className="leading-[18px] text-[16px]">
            An email has been sent to
          </Text>
          <Text className="max-w-[250px] text-[16px] leading-[19px] text-center">
            you Follow direction in the email to reset password
          </Text>
        </View>

        <TouchableOpacity onPress={() =>  navigation.navigate('forgotVerify')}>
          <LinearGradient
            className=" w-[190px] mt-[13px] rounded-full h-[41px] flex justify-center items-center"
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
          >
            <Text className="text-white text-[16px]">OK</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalView: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
    height: 220,
    width: 336,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default PasswordResetInfo;
