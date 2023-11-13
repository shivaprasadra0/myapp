import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

const ScrollBoxList = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((boxNumber) => (
        <View key={boxNumber} style={styles.box1} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  box1:{
    flex:1,
    width:'80%',
    height:'20%',
    backgroundColor:'grey',
    position:'absolute',
    right:'10%',
    left:'10%',
    top:'20%',
  },
});

export default ScrollBoxList;
