import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import Signup from "./Singup";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const HomeStack = createStackNavigator();


const SigninScreen = ({ navigation }) =>{
    return(
        <View style={styles.container}>
      <View style={styles.container2}>
      <Image source={require('./Images/symbole-fleche-gauche-violet.png')} style={{width:35,height:35,marginRight:10,}}></Image>
        <Text style={{fontSize:25,fontWeight:'bold',Color:'#9400d3',}}>Sign In</Text>
      </View>
      <View style={styles.boxcontainer}>
        <Text style={{alignSelf:'flex-start',top:'15%',position:'absolute'}}>Sign in to your account</Text>
      <Text style={{textAlign:'left',fontSize:20,alignSelf:'flex-start',marginBottom:10,}}>Email</Text>
      <TextInput placeholder="demo@myaltpay.com" style={styles.Textinput1}></TextInput>
      <Text style={{textAlign:'left',fontSize:20,alignSelf:'flex-start',marginBottom:10,}}>Password</Text>
      <TextInput placeholder="********" style={styles.Textinput1}></TextInput>
      <View style={styles.box}>
        <Text style={{color:'white',fontSize:20,}}>Sign In</Text>
      </View>
      <Text style={{fontSize:15,marginBottom:30,}}>Forget Password?</Text>
      <Text style={{fontSize:15,marginBottom:10,}}>Don't have an account?<TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}><Text style={{color:'blue'}}>create now</Text></TouchableOpacity></Text>
      <Text style={{fontSize:15,marginBottom:10,}}>or</Text>
      <View style={styles.Line}></View>
      <View style={styles.Imagecontainer}>
      <Image source={require('./Images/1104243.png')} style={{width:50,height:50}} ></Image>
      <Image source={require('./Images/1515764.png')} style={{width:50,height:50}} ></Image>
      <Image source={require('./Images/1690643640twitter-x-icon-png.webp')} style={{width:50,height:50}} ></Image>
      </View>
    </View>
    </View>
    )
};
const Signin = () => {
  return (
   
    <HomeStack.Navigator initialRouteName="Signin" >
      
        <HomeStack.Screen name="SigninScreen" component={SigninScreen}  options={{ headerShown: false }} />
        <HomeStack.Screen name="SignupScreen" component={Signup} options={{ headerShown: false }} />
      
    </HomeStack.Navigator>
    
  );
};
const styles = StyleSheet.create({
    slideContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slideText: {
      textAlign: 'center',
    },
    slideDescription: {
      textAlign: 'center',
    },
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    Textinput1:{
      backgroundColor:'#d3d3d3',
      width:'100%',
      height:'6%',
      borderRadius:5,
      marginBottom:20,
    },
    boxcontainer:{
      flex:1,
      width:'80%',
      height:'60%',
      justifyContent:'center',
      alignItems:'center',
    },
    box:{
      width:'100%',
      height:'6%',
      backgroundColor:'#8a2be2',
      borderRadius:5,
      marginBottom:10,
      justifyContent:'center',
      alignItems:'center',
    },
    Line:{
      width:'100%',
      height:'0.5%',
      backgroundColor:'grey',
      marginBottom:5,
    },
    Imagecontainer: {
      width:'100%',
      height:'10%',
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
    },
    iconImage: {
      flex:1,
    },
    container2:{
      flexDirection:'row',
      width:'80%',
      height:'5%',
      top:'5%',
      position:'absolute',
    }
  });
export default Signin;