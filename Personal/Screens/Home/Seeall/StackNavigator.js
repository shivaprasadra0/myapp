import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ERCScreen from './ERCScreen';
import TRXScreen from './TRXScreen';
import USDTScreen from './USDTScreen';
import MaticScreen from './MaticScreen';
import { StyleSheet } from 'react-native';
const Tab = createMaterialTopTabNavigator();
const mytabs = () =>{
  return(
    <Tab.Navigator>
      initialRouteName="Seeall",
      <Tab.Screen name="All" component={AllScreen} options={{tabBarLabel:"All"}} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} options={{tabBarLabel:"Favorites"}} />
          <Tab.Screen name="ERC" component={ERCScreen} options={{tabBarLabel:"ERC"}} />
          <Tab.Screen name="TRX" component={TRXScreen}  options={{tabBarLabel:"TRX"}}/>
          <Tab.Screen name="USDT" component={USDTScreen} options={{tabBarLabel:"USDT"}} />
          <Tab.Screen name="Matic" component={MaticScreen} options={{tabBarLabel:"Matic"}} />
    </Tab.Navigator>
  )
}
const AllScreen =() =>{
  <View style={styles.container}>
      <ImageBackground source={require('./bg.png')} style={styles.Image}></ImageBackground>
      <View style={styles.whitebackground}></View>
      </View>

};
const FavoritesScreen =() =>{
  <View style={styles.container}>
      <ImageBackground source={require('./bg.png')} style={styles.Image}></ImageBackground>
      <View style={styles.whitebackground}></View>
      </View>

};
const StackNavigator = () => {
    return (
      <NavigationContainer>
        <mytabs />
      </NavigationContainer>
    );
};
export default StackNavigator;  
const styles=StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  whitebackground :{
    flex:1,
    backgroundColor: 'white',
    width: '100%',
    height:'65%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius:40,
    justifyContent:'center',
    alignItems:'center',
  },
})