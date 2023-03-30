import React, {  useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native'
import AccountCreated from "../../components/AccountCreated";
// import ERegister from "../../components/ERegister";

const EmailRegister = () => {
  // const [active, setActive] = useState(false);

  return (
    <View className="bg-white" style={{flex:1}}>
      <StatusBar hidden={true} />
      <AccountCreated  />
      
      {/* {active === true ? <AccountCreated  /> : <ERegister activeData={setActive} />} */}
    </View>
  );
};

export default EmailRegister;
