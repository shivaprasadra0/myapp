import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Wallet = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./bg.png')} style={styles.Image}>
        <Text>Total Balance</Text>
      </ImageBackground>
      <View style={styles.whitebackground}>
        <View style={styles.boxcontainer}>
          <View style={styles.box11}></View><View style={styles.box}>
          <View style={styles.circle}></View>
          <Text style={styles.text11}>Send</Text>
        </View>
        <View style={styles.gap}></View>
        <View style={[styles.box, styles.box2]}>
        <View style={[styles.circle,styles.circle2]}></View>
        <Text style={styles.text11}>Receive</Text></View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    width: '100%',
    height: '100%',
    alignItems:'center',
    position: 'absolute',
  },
  whitebackground: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '70%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxcontainer:{
    flex:1,
    flexDirection:'row',
    width:"90%",
    height:"95%",
    alignItems: 'flex-end',
  },
  box:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    width:"45%",
    height:"10%",
    bottom:1,
    backgroundColor:'#3cb371',
    position:'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:5,
  },
  box2:{
    backgroundColor:'#6a5acd',
  },
  text11:{
    color:'white',
    marginLeft:"2%",
  },
  circle: {
    width: 40, 
    height: 40,
    borderRadius: 20, 
    backgroundColor: '#2e8b57',
   
  },
  box11:{
    width:'100%',
    height:'15%',
    top:'50%',
    backgroundColor:'grey',
    position:'absolute',
  },
  gap:{
    width:'10%',
  },
  circle2:{
    backgroundColor:'#663399',
  }
});
export default Wallet;