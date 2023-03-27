import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Login from '../screens/login/Login';
import BottomTabNavigator from "./BottomTabNavigator";
import Splash from "../screens/splash/Splash";
import Register from "../screens/Register/Register";
import EmailRegister from "../screens/Register/EmailRegister";
import { LinearGradient } from "expo-linear-gradient";
import Login from "../screens/Register/Login";
import PhoneVerify from "../screens/Register/PhoneVerify";

const Stack = createStackNavigator();

// const DefaultHeaderOptions = {
//   headerBackground: (

//   ),
//   headerTintColor: "black",
//   headerLargeTitle: true,
// };

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="login" component={Login}  options={{headerShown:false}}/> */}
      <Stack.Screen
        name="Dashboard"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={{  headerStyle: { backgroundColor: "#4965E0", height: 90 }}}
      >
        <Stack.Screen
          name="EmailSignup"
          component={EmailRegister}
          options={{
            title: "SignUp",
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "Login",
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />
         <Stack.Screen
          name="phoneVerify"
          component={PhoneVerify}
          options={{
            title: "Phone verification",
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
export default AuthNavigator;
