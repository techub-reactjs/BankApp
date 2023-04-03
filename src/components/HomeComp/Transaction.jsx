import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import trade from "../../assests/Images/world.png";
import trade2 from "../../assests/Images/trade2.png";
import trade3 from "../../assests/Images/trade3.png";
const Transaction = () => {
  let Data = [
    {
      pic: trade,
      hading: "Transfer to BRI ",
      nextHeading: "Wade Warren",
      dateHeading: "7 March 2022",
      price: "$ 150.000",
    },
    {
      pic: trade2,
      hading: "Transfer to BRI ",
      nextHeading: "Wade Warren",
      dateHeading: "7 March 2022",
      price: "$ 150.000",
    },
    {
      pic: trade3,
      hading: "Transfer to BRI ",
      nextHeading: "Wade Warren",
      dateHeading: "7 March 2022",
      price: "$ 150.000",
    },
    {
      pic: trade,
      hading: "Transfer to BRI ",
      nextHeading: "Wade Warren",
      dateHeading: "7 March 2022",
      price: "$ 150.000",
    },
   
  ];

  return (
    <>
      <View className="shadow-md border-t mt-4 border-gray-200"></View>
      <View className="px-8 py-5">
        <Text className="text-[#151D3B] text-[16px] font-medium">
          Transactions
        </Text>
        <View className="flex justify-between items-center flex-row py-5">
          <LinearGradient
            colors={["#4965E0", "#896CDD"]}
            end={[1, 0.1]}
            className="h-full rounded-md"
          >
            <View className=" rounded-md px-2 py-1">
              <Text className="text-white text-center text-[12px] font-medium">
                All
              </Text>
            </View>
          </LinearGradient>
          <View className="border border-gray-300 rounded-md px-2 py-1">
            <Text className="text-[#151D3B] text-center text-[12px] font-medium">
              Transfer
            </Text>
          </View>
          <View className="border border-gray-300 rounded-md px-2 py-1">
            <Text className="text-[#151D3B] text-center text-[12px] font-medium">
              Withdraw
            </Text>
          </View>
          <View className="border border-gray-300 rounded-md px-2 py-1">
            <Text className="text-[#151D3B] text-center text-[12px] font-medium">
              More
            </Text>
          </View>
        </View>

        <View className="pt-[29px]">
          <View className="flex justify-between flex-row items-center">
            <Text className="text-[#151D3B] text-[16px] font-medium">
              Current Transaction
            </Text>
            <Text className="text-[#4965E0] text-[15px] font-medium">
              See all
            </Text>
          </View>
          <View className="pt-[14px]">
            <ScrollView >
              {Data.map((item, i) => (
                <View className="flex justify-between h-[87px] flex-row mt-[9px] " key={i}>
                  <View className="flex flex-row">
                    <Image
                      source={item?.pic}
                      className="object-contain w-[57px] h-[57px]"
                    />
                    <View className="pl-[9px]">
                      <Text className="text-[#151D3B] text-[12px] font-medium">
                        Transfer to BRI
                      </Text>
                      <Text className="text-[#151D3B] text-[12px] py-[8px] font-medium">
                        Wade Warren
                      </Text>
                      <Text className="text-[#151D3B] opacity-[0.5px]  text-[10px] font-medium">
                        7 March 2022
                      </Text>
                    </View>
                  </View>
                  <Text className="text-[#151D3B] text-[14px] font-medium">
                    $ 150.000
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </>
  );
};

export default Transaction;
