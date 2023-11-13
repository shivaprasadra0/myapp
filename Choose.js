import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
const HomeStack = createStackNavigator();
import App1 from "./Personal/App1";
const MainScreen = ({ navigation }) =>{
    return(
        <View style={{flex:1,justifyContent: 'center',
        alignItems: 'center',}}>
            <View style={styles.container2}>
        <Image source={require('./Images/symbole-fleche-gauche-violet.png')} style={{width:35,height:35,marginRight:10,}}></Image>
        <Text style={{fontSize:25,fontWeight:'bold',Color:'#9400d3',}}>Profile</Text>
      </View>
      <View style={{flexDirection:'row'}}>
            <View style={styles.box}></View>
            <TouchableOpacity onPress={() => navigation.navigate('App1Screen')}>
            <View style={styles.box1}>
                <Text style={{fontSize:25,color:'white',alignSelf:'flex-start',fontWeight:'500'}}>Personal Accont</Text>
                <View style={{width:'40%',height:'1%',backgroundColor:'white',alignSelf:'flex-start'}}></View>
            </View>
            </TouchableOpacity>
            </View>
        </View>
    );
};
const Main = () => {
    return (
     
      <HomeStack.Navigator >
        
          <HomeStack.Screen name="MainScreen" component={MainScreen}  options={{ headerShown: false }} />
          <HomeStack.Screen name="App1Screen" component={App1} options={{ headerShown: false }} />
        
      </HomeStack.Navigator>
      
    );
  };
const styles=StyleSheet.create({
    box:{
        width:'35%',
        height:'100%',
        backgroundColor:'#00fa9a',
        borderRadius:8,
    },
    box1:{
        width:'35%',
        height:'35%',
        backgroundColor:'#8a2be2',
        borderRadius:8,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        paddingBottom:12,
        paddingLeft:12,
    },
    container2:{
        flexDirection:'row',
        width:'80%',
        height:'5%',
        justifyContent:'flex-start',
        paddingTop:24,
    },
});
export default Main;