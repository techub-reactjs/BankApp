

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { Text } from 'react-native';
// import AuthNavigator from './src/navigation/AuthNavigator';
import DrawNavigation from './src/navigation/DrawerNavigation';

function App(){
  return (
    <NavigationContainer>
      {/* <AuthNavigator/> */}
      <DrawNavigation/>
    </NavigationContainer>
  );
}

export default App;
