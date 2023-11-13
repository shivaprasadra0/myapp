import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { COLORS, SIZES } from './theme';
import Signin from "./Signin";
import { NavigationContainer } from '@react-navigation/native';

const slides = [
  {
    id: 1,
    title: 'Control Your money without an account',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Secure Payment',
    description: 'Description 2',
  },
  {
    id: 3,
    title: 'Pay Bills',
    description: 'Description 3',
  }
];


const App = ( ) => {
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label) => (
    <View style={{
      padding: 12
    }}>
      <Text style={{
        fontWeight: '600',
        fontSize: 16,
      }}>
        {label}
      </Text>
    </View>
  );

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={{
              flex: 1,
              alignItems: 'center',
              padding: 15,
              paddingTop: 600,
            }}>
              <Text style={{
                fontWeight: 'bold',
                color: COLORS.title,
                fontSize: SIZES.h1,
                textAlign:'center',
              }}>
                {item.title}
              </Text>
              <View style={{width:'40%',height:'10%',backgroundColor:'#7fffd4',alignItems:'center'}}></View>
              <Text style={{
                textAlign: 'center',
                paddingTop: 5,
                color: COLORS.title
              }}>
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: '#7fffd4',
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={()=>buttonLabel("Sign In")}
        onDone={()=>setShowHomePage(true)}
      />
    );
  }

  return (
    <NavigationContainer>
    <Signin />
    </NavigationContainer>
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
});
export default App;