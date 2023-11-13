import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Seeall from './Seeall/Seeall';

const HomeStack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./bg.png')} style={styles.Image}>
        <Image source={require('./Icon ionic-ios-qr-scanner.svg')} style={{ width: '5%', height: '5%', right: '20%', position: 'absolute', top: '5%' }}></Image>
        <Image source={require('./Icon feather-bell.svg')} style={{ width: '1%', height: '1%', right: '5%', position: 'absolute', top: '5%' }}></Image>
        <View style={styles.container1}>
          <View style={styles.box2}></View>
          <View style={styles.box2}></View>
        </View>

        <View style={styles.whitebackground}>
          <Text style={styles.Design1}>Exchange Rate</Text>
          <View style={styles.container2}>
          <TouchableOpacity onPress={() => navigation.navigate('SeeAllScreen')}>
            <Text style={styles.Design2}>See All</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.box1}>
            <View style={styles.insideview}>
              <Text>Bitcoin</Text>
              <Text>BTC/MUSD</Text>
              <Text style={styles.insideview2}>$30,000</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen}  options={{ headerShown: false }} />
      <HomeStack.Screen name="SeeAllScreen" component={Seeall} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex:1,
    right:'5%',
    top:'10%',
    position:'absolute',
  },
  container1: {
    flex:1,
    flexDirection: 'row',
  },
  Image :{
    width:'100%',
    height:'100%',
    position:'absolute',
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
  Design1:{
    flex :1,
    fontSize:20,
    position: 'absolute',
    left: '5%',
    top:'8%',
  },
  Design2:{
    fontSize:10,
  },
  box1:{
    width:'90%',
    height:'15%',
    backgroundColor:'#d3d3d3',
    position:'absolute',

    top:'15%',
  },
  insideview:{
    justifyContent:'center',
    top:'30%',
    left:'20%',
  },
  insideview2:{
    justifyContent:'center',
    top:'30%',
    right:'30%',
    position:'absolute',
  },
  box2:{
    flex:1,
    width:'50%',
    height:'15%',
    backgroundColor:'#ba55d3',
    borderRadius: 20,
    left:'10%',  
    top:'15%',
    position:'absolute',
    margin:10,
  },
  boxContainer: {
    flexDirection: 'row',
    
  },
  box3:{
    flexDirection:'row',
  },
  scanner:{
    flex:1,
    position:'absolute',
    top:'20%',

  }
});

export default Home;
