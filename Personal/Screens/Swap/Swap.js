import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

const Swap = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./bg.png')} style={styles.Image}></ImageBackground>
      <View style={styles.whitebackground}>
        <View style={styles.box1}>
          <Text style={styles.Text1}>Buy MUSD</Text>
        </View>
        <View style={styles.buttonsContainer}>
        <Text>Balance: 11111</Text>
          <View style={styles.button}></View>
          <View style={styles.button}></View>
          <View style={styles.button}></View>
          <View style={styles.button}></View>
        </View>
        <View style={styles.box2}></View>
        <View style={styles.box3}>
          <Text>SWAP</Text>
        </View>
        <View style={styles.buttonsContainer1}>
          <Text>Fee:1111</Text>
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
    position: 'absolute',
  },
  whitebackground: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '85%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: '80%',
    height: '15%',
    backgroundColor: '#d3d3d3',
    top: '8%',
    borderRadius:5,
    position: 'absolute',
  },
  buttonsContainer: {
    flex:1,
    flexDirection: 'row', // Make the buttons side by side
    top: '25%',
    left:'10%',
    width:'80%',
    height:'5%',
    right:'10%',
    position: 'absolute',
  },
  button: {
    width: '10%', // Adjust the width to your preference
    height: '50%',
    left:'25%',
    borderRadius: 50,
    backgroundColor: '#d3d3d3',
    marginLeft:'1%',// Add margin for spacing between buttons
    position: 'relative', // Use 'relative' to allow margin to work properly
  },
  box2: {
    width: '80%',
    height: '15%',
    backgroundColor: '#d3d3d3',
    top: '50%',
    borderRadius:5,
    position: 'absolute',
  },
  box3: {
    width: '80%',
    height: '8%',
    backgroundColor: 'violet',
    top: '70%',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  buttonsContainer1: {
    flex:1,
    flexDirection: 'row', // Make the buttons side by side
    top: '80%',
    left:'10%',
    width:'80%',
    height:'5%',
    right:'10%',
    position: 'absolute',
  },
});

export default Swap;
