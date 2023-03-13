import { View, Image , StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from '../../assests/Images/Logo-white.png'
// import car from '../../assests/Images/car.png'
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Dashboard')
    }, 5000);
  },[])
  
 
  return (
    <SafeAreaView style={{backgroundColor:'white', flex: 1}}>
      <View style={styles.logo}>
        <Image source={logo}  resizeMode={'cover'} />
      </View>
      {/* <View style={styles.bottomView}>
        <Image source={car} resizeMode={'contain'} />
      </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  logo : {
    flex: 1,
    justifyContent:'center',
    top:30,
    alignItems:'center',
    backgroundColor:'#4965E0'
  },
  bottomView:{
    
    justifyContent:'center',
    alignItems:'center'
  }
 
});

export default Splash