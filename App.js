import React from 'react';

import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
export default function App() {
  return (
    <AppContainer/>
  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  HomeScreen: {screen: HomeScreen},
})

const AppContainer =  createAppContainer(switchNavigator);
