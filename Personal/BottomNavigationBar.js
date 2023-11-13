import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home/Home';
import Swap from './Screens/Swap/Swap';
import Wallet from './Screens/Wallet/Wallet';
import Profile from './Screens/Profile/Profile';
const Tab = createBottomTabNavigator();

const BottomNavigationBar = () => {
  return (    
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Swap" component={Swap} options={{ headerShown: false }} />
      <Tab.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
export default BottomNavigationBar;