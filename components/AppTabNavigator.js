import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {HomeScreen} from '../screens/HomeScreen'


export const AppTabNavigator = createBottomTabNavigator({
  Help: {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/help.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Share the Care",
    }
  },
  Ask: {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/handsUp.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Ask for care",
    }
  },
  profile: {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/profile.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Profile",
    }
  },
});
