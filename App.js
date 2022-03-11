import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from './screens/Home'
import Calculation1 from './screens/Calculation1'
import Calculation2 from './screens/Calculation2'
import Calculation3 from './screens/Calculation3'
import Calculation4 from './screens/Calculation4'
import Calculation5 from './screens/Calculation5'
import {View} from 'react-native' 
export default function App() {
  return (
    <View>
  <AppContainer/>
  </View>
  );
}
var AppNavigator = createSwitchNavigator({
  Home:Home,
 Calculation1:Calculation1,
 Calculation2:Calculation2,
 Calculation3:Calculation3,
 Calculation4:Calculation4,
 Calculation5:Calculation5
});

const AppContainer = createAppContainer(AppNavigator);