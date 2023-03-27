import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
// import facebook from "../../assests/Images/facebook-color.png";
// import apple from "../../assests/Images/apple-color.png";
// import google from "../../assests/Images/google-color.png";
import Popup from "../../util/Popup/Popup";
import OTPInputView from "@twotalltotems/react-native-otp-input";
// import { useNavigation } from "@react-navigation/native";
import MaskedView from '@react-native-masked-view/masked-view';
const NewPassword = () => {
  // const navigation = useNavigation();

  const [show, setShow] = useState(false);

  const users = [
    [1, 0.1],
    [0.1, 1],
  ];
  const [newUser, setnewUser] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      let currentIdx = newUser;
      setnewUser(currentIdx + 1);
    }, 2500);
    return () => clearInterval(intervalID);
  }, [newUser]);

  let textThatChanges = users[newUser % users.length];
  return (
    <>
      {show && <Popup modalVisible={show} setModalVisible={setShow} />}
      {/* <LinearGradient
        className="h-full flex-1"
        colors={["#4965E0", "#896CDD"]}
        end={textThatChanges}
      > */}
      <View className="bg-white h-full">
        <StatusBar hidden={true} />
        <View
          style={{ flex: 1 }}
          className="px-5 pt-[122px] flex justify-start items-center"
        >
          <View className="text-center flex justify-center items-center pb-6">
            <Text className="text-[20px] text-[#282B29] ">
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
            <MaskedView
              style={{ flex:1,  flexDirection: "row", height: "100%" }}
              maskElement={
                <View
                className=" "
                  
                >
                  <Text
                  
                  >
                    Resend Code
                  </Text>
                </View>
              }
            >
              {/* Shows behind the mask, you can put anything here, such as an image */}
              <View
                style={{ flex: 1, height: "100%", backgroundColor: "#4965E0" }}
              />
              <View
                style={{ flex: 1, height: "100%", backgroundColor: "#896CDD" }}
              />
             
            </MaskedView>
          </View>
          <View>
            <Text>1:20 Sec left</Text>
          </View>

          <LinearGradient
            className="h-full flex-1"
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
          >
            <TouchableOpacity>
              <Text>Verify</Text>
            </TouchableOpacity>
          </LinearGradient>
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

export default NewPassword;
