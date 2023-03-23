import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Login from '../screens/login/Login';
import BottomTabNavigator from './BottomTabNavigator';
import Splash from '../screens/splash/Splash';
import Register from '../screens/Register/Register';


const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="splash" component={Splash} options={{headerShown:false}} />
      {/* <Stack.Screen name="login" component={Login}  options={{headerShown:false}}/> */}
      <Stack.Screen name="Dashboard" component={BottomTabNavigator}  options={{headerShown:false}}/>
      <Stack.Screen name="register" component={Register}  options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
export default AuthNavigator
