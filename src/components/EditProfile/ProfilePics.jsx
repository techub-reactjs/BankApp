import { Image, Pressable, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import e1 from "../../assests/Images/e1.png";
import e2 from "../../assests/Images/e2.png";
import e3 from "../../assests/Images/e3.png";
import e4 from "../../assests/Images/e4.png";
import Icon from "react-native-vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
const ProfilePics = ({ setShowPop }) => {
  return (
    <>
      <View className="h-[398px] bg-white mx-5 py-2 px-5 shadow-md border border-gray-100 rounded-md">
        <Pressable
          onPress={() => setShowPop(false)}
          className="flex justify-end items-end  mt-2"
        >
          <Icon name="closecircle" color={"black"} size={25} />
        </Pressable>

        <View>
          <Text className="text-center text-[16px] font-medium text-[#282B29]">
            Select Image
          </Text>
        </View>

        <View className="flex flex-wrap flex-row justify-between pt-10  ">
          <Image source={e1} className="object-cover w-[82px] h-[82px] mb-3" />
          <Image source={e3} className="object-cover w-[82px] h-[82px] mb-3" />
          <Image source={e4} className="object-cover w-[82px] h-[82px] mb-3" />
          <Image source={e2} className="object-cover w-[82px] h-[82px] mb-3" />
          <Image source={e1} className="object-cover w-[82px] h-[82px] mb-3" />
          <Image source={e3} className="object-cover w-[82px] h-[82px] mb-3" />
        </View>
        <View className="flex justify-center items-center">
          <TouchableOpacity onPress={() => setShowPop(false)}>
            <LinearGradient
              className=" w-[186px] mt-[40px] rounded-full h-[50px] flex justify-center items-center"
              colors={["#4965E0", "#896CDD"]}
              end={[1, 0.1]}
            >
              <Text className="text-white text-[16px]">Done</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProfilePics;
