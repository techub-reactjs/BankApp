
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import AccountCreated from "../../components/AccountCreated";

const EmailRegister = () => {

  const users = [
    [1, 0.1],
    [0.1, 1],
  ];
  const [newUser, setnewUser] = useState(0);
  const [color, setColor] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      let currentIdx = newUser;
      setnewUser(currentIdx + 1);
    
    }, 2500);
    return () => clearInterval(intervalID);
  }, [newUser]);

  let textThatChanges = users[newUser % users.length];
  return (
    <LinearGradient
      className="h-full flex-1"
      colors={["#4965E0", "#896CDD"]}
      end={textThatChanges}
    >
      {/* <View className="bg-white "> */}
      <StatusBar hidden={true} />
      <AccountCreated/>
    
      {/* </View> */}
    </LinearGradient>
  );
};

export default EmailRegister;
