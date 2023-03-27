import { View, Image, TextInput } from "react-native";
import React, {  useState } from "react";
import user from "../../assests/Images/signup1.png";
import finger from "../../assests/Images/EmailFinger.png";
import Icon from "react-native-vector-icons/Feather";
const ERegister = () => {
  const [show, setShow] = useState(false);
   
  return (
    <>
        <View className="" style={{ flex: 0 }}>
        <View className="flex justify-center items-center top-[14px]">
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
          </View>
        </View>
      </View>
      <View style={{ flex: 2 }} className="px-5 pt-8">
        <View className="pb-[10px]">
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 12, height: 50 }}
          >
            <TextInput
              placeholder="Gladys"
              type="text"
              className={`${
                color === 3 ? "bg-white" : "bg-transparent"
              } rounded-[12px] placeholder:text-[16px] h-[46px] px-2`}
            />
          </LinearGradient>
        </View>
        <View className="pb-[10px]">
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 12, height: 50 }}
          >
            <TextInput
              placeholder="Warren"
              type="text"
              className={`${
                color === 3 ? "bg-white" : "bg-transparent"
              } rounded-[12px] placeholder:text-[16px] h-[46px] px-2`}
            />
          </LinearGradient>
        </View>
        <View className="pb-[10px]">
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 12, height: 50 }}
          >
            <TextInput
              placeholder="gladys.warren@email.com"
              type="email"
              className={`${
                color === 3 ? "bg-white" : "bg-transparent"
              } rounded-[12px] placeholder:text-[16px] h-[46px] px-2`}
            />
          </LinearGradient>
        </View>
        <View className="pb-[10px]">
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 12, height: 50 }}
          >
            <TextInput
              placeholder="(219) 555-0114"
              type="tel"
              className={`${
                color === 3 ? "bg-white" : "bg-transparent"
              } rounded-[12px] placeholder:text-[16px] h-[46px] px-2`}
            />
          </LinearGradient>
        </View>
        <View className="pb-[10px]">
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 12, height: 50 }}
          >
            <TextInput
              placeholder="12304959-65945-232"
              type="numeric"
              className={`${
                color === 3 ? "bg-white" : "bg-transparent"
              } rounded-[12px] placeholder:text-[16px] h-[46px] px-2`}
            />
          </LinearGradient>
        </View>
        <View className="pb-[10px]">
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 12, height: 50 }}
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
          </LinearGradient>
        </View>
        <View className="pb-[10px]">
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            style={{ padding: 2, borderRadius: 12, height: 50 }}
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
          </LinearGradient>
        </View>
        <View>
          <Image source={finger} className="object-cover" />
        </View>
      </View>
    </>
  )
}

export default ERegister