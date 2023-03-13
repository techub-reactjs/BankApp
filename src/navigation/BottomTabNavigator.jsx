import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Animated, Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'
import Home from '../screens/Home/Home';
import plus from '../assests/Images/plus.png'
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  // const navigation = useNavigation();

  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      style: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 40,
        marginHorizontal: 20,
        height: 70,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {
          width: 10,
          height: 10
        },
        paddingHorizontal: 20,
      }
    }}>

   
      <Tab.Screen name={"Home"} component={Home} options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome5
              name="home"
              size={20}
              color={focused ? '#4965E0' : 'gray'}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: 0,
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>

      <Tab.Screen name={"Search"} component={""} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome5
              name="search"
              size={20}
              color={focused ? '#4965E0' : 'gray'}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth(),
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>


      {

        // Extra Tab Screen For Action Button..
      }

      <Tab.Screen name={"ActionButton"} component={""} options={{
        tabBarIcon: ({ focused }) => (

          <TouchableOpacity>
            <View style={{
              width: 55,
              height: 55,
              backgroundColor: '#4965E0',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: Platform.OS == "android" ? 50 : 30
            }}>
              <Image source={plus} style={{
                width: 22,
                height: 22,
                tintColor: 'white',
              }}></Image>
            </View>
          </TouchableOpacity>
        )
      }}></Tab.Screen>

      <Tab.Screen name={"Notifications"} component={""} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome5
              name="bell"
              size={20}
              color={focused ? '#4965E0' : 'gray'}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 3,
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>

      <Tab.Screen name={"Settings"} component={""} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{
            // centring Tab Button...
            position: 'absolute',
            top: 15
          }}>
            <FontAwesome5
              name="user-alt"
              size={20}
              color={focused ? '#4965E0' : 'gray'}
            ></FontAwesome5>
          </View>
        )
      }} listeners={({ navigation, route }) => ({
        // Onpress Update....
        tabPress: e => {
          Animated.spring(tabOffsetValue, {
            toValue: getWidth() * 4,
            useNativeDriver: true
          }).start();
        }
      })}></Tab.Screen>

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