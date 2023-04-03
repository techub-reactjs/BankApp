import { View, Text, SafeAreaView  } from "react-native";
import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import Header from "../../components/HomeComp/Header";
import Transaction from "../../components/HomeComp/Transaction";
import EditProfile from "../../components/EditProfile/EditProfile";

const Home = () => {
  const [isEdit , setIsEdit] = useState(false)
  return (
    <>
      <SafeAreaView className="bg-white h-full flex-1">
        <StatusBar
          animated={false}
          hidden={true}
          backgroundColor="white"
          barStyle={"dark-content"}
        />
        {/* Home section */}
        {isEdit === false ? (
          <>
            <View>
              <Header setIsEdit={setIsEdit} />
            </View>
            <View className="">
              <Transaction />
            </View>
          </>
        ) : (
          <>
          <EditProfile  setIsEdit={setIsEdit}/>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default Home;
