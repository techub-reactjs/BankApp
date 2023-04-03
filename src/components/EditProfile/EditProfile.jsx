import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import user from "../../assests/Images/User.png";
import edit from "../../assests/Images/edit.png";
import Icon from "react-native-vector-icons/Feather";
import Popup from "../../util/Popup/Popup";
import ProfilePics from "./ProfilePics";
const EditProfile = ({ setIsEdit }) => {
  const [show, setShow] = useState(false);
  const [showpop, setShowPop] = useState(false);
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        {showpop && (
          <Popup
            modalVisible={showpop}
            data={<ProfilePics setShowPop={(val) => setShowPop(val)} />}
            setModalVisible={setShowPop}
          />
        )}
        <View>
          <View className="flex flex-row justify-between px-5 py-10">
            <Pressable onPress={() => setIsEdit(false)}>
              <Icon name="arrow-left" size={30} />
            </Pressable>
            <Text className="text-[#282B29] text-[16px] font-medium">
              Edit Profile
            </Text>
            <Icon name="share-2" size={30} />
          </View>
          <View
            className="flex justify-center items-center top-[14px]"
            style={{ flex: 1 }}
          >
            <View className=" w-[140px] h-[140px]  rounded-full">
              <LinearGradient
                colors={["#4965E0", "#896CDD"]}
                end={[1, 0.1]}
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
                <View className="bg-white w-[140px] h-[140px] flex justify-center items-center rounded-full">
                  <Image source={user} className="object-cover" />
                </View>
              </LinearGradient>

              <Pressable
                onPress={() => setShowPop(true)}
                className="flex items-center flex-row pt-[22px]"
              >
                <Text className="pr-2 text-[#4965E0] text-[16px] font-medium">
                  Change Picture
                </Text>
                <Image source={edit} className="object-cover" />
              </Pressable>
            </View>
          </View>
          <View className="px-5 pt-[90px]" style={{ flex: 1 }}>
            <View className="pb-[10px]">
              <Text className="text-[#C2C2C2] text-[12px] py-2 font-medium">
                First Name
              </Text>
              <TextInput
                placeholder="Gladys"
                type="text"
                className={` border border-[#A9A9A9]  rounded-[12px] placeholder:text-[16px] h-[44px] px-2`}
              />
            </View>
            <View className="pb-[10px]">
              <Text className="text-[#C2C2C2] text-[12px] py-2 font-medium">
                Last Name
              </Text>

              <TextInput
                placeholder="Warren"
                type="text"
                className={` border border-[#A9A9A9]  rounded-[12px] placeholder:text-[16px] h-[44px] px-2`}
              />
            </View>

            <View className="pb-[10px]">
              <Text className="text-[#C2C2C2] text-[12px] py-2 font-medium">
                Username
              </Text>
              <TextInput
                placeholder="Gladys"
                type="text"
                className={` border border-[#A9A9A9]  rounded-[12px] placeholder:text-[16px] h-[44px] px-2`}
              />
            </View>
            <View className="pb-[10px]">
              <Text className="text-[#C2C2C2] text-[12px] py-2 font-medium">
                Email
              </Text>
              <TextInput
                placeholder="gladys.warren@email.com"
                type="email"
                className={` border border-[#A9A9A9]  rounded-[12px] placeholder:text-[16px] h-[44px] px-2`}
              />
            </View>

            <View className="pb-[10px]">
              <Text className="text-[#C2C2C2] text-[12px] py-2 font-medium">
                Password
              </Text>

              <View className=" justify-between flex-row border border-[#A9A9A9]  items-center flex w-full bg-white rounded-[12px] placeholder:text-[16px] h-[44px] px-2">
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
            </View>

            <View className="pb-[10px]">
              <Text className="text-[#C2C2C2] text-[12px] py-2 font-medium">
                Phone Number
              </Text>
              <TextInput
                placeholder="(219) 555-0114"
                type="tel"
                className={` border border-[#A9A9A9]  rounded-[12px] placeholder:text-[16px] h-[44px] px-2`}
              />
            </View>
            {/* <View className="pb-[10px]">
              <View className=" justify-between flex-row border border-[#A9A9A9] items-center flex w-full bg-white rounded-[12px] placeholder:text-[16px] h-[44px] px-2">
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
            </View> */}
            {/* <Pressable onPress={() => activeData(true)}>
                <Image source={finger} className="object-cover" />
              </Pressable> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default EditProfile;
