import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {  Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons'
import Home from '../screens/Home/Home';
import plus from '../assests/Images/center.png'
import homeActive from '../assests/Images/homeActive.png'
import home from '../assests/Images/home.png'
import barActive from '../assests/Images/barsActive.png'
import bar from '../assests/Images/bar.png'
import notifActive from '../assests/Images/notifActive.png'
import notif from '../assests/Images/notif.png'
import mesActive from '../assests/Images/mesActive.png'
import mes from '../assests/Images/mes.png'
import Statistics from '../screens/Statistics/Statistics';
import Notification from '../screens/Notification/Notification';
import Messages from '../screens/Messages/Messages';
import QraScaan from '../screens/QraScaan/QraScaan';
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  // const navigation = useNavigation();

  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle:{
        backgroundColor:'white',
        height:78
      }
    }}>

   
      <Tab.Screen name={"Home"} component={Home} options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 30
          }}>
           <Image source={focused ?  homeActive : home} style={{
                width: 22,
                height: 22,
                // tintColor: 'white',
              }}/>
          </View>
        )
      }}></Tab.Screen>

      <Tab.Screen name={"Statistics"} component={Statistics} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 30
          }}>
             <Image source={focused ?  barActive : bar} style={{
                width: 22,
                height: 22,
                // tintColor: 'white',
              }}/>
          </View>
        )
      }} ></Tab.Screen>


      {

        // Extra Tab Screen For Action Button..
      }

      <Tab.Screen name={"QraScaan"} component={QraScaan} options={{
        tabBarIcon: () => (
          <TouchableOpacity>
            <View style={{
              width: 55,
              height: 55,
              backgroundColor: '#4965E0',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: Platform.OS == "android" ? 75 : 30
            }}>
              <Image source={plus} style={{
                width: 22,
                height: 22,
                tintColor: 'white',
              }}/>
            </View>
          </TouchableOpacity>
        )
      }}></Tab.Screen>

      <Tab.Screen name={"Notifications"} component={Notification} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 30
          }}>
            <Image source={focused ?  notifActive : notif} style={{
                width: 22,
                height: 22,
                // tintColor: 'white',
              }}/>
          </View>
        )
      }} ></Tab.Screen>

      <Tab.Screen name={"Messages"} component={Messages} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 30
            
          }}>
              <Image source={focused ?  mesActive : mes} style={{
                width: 22,
                height: 22,
                // tintColor: 'white',
              }}/>
          </View>
        )
      }} ></Tab.Screen>

    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#0000',
    borderTopWidth: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: 60,
  },
});