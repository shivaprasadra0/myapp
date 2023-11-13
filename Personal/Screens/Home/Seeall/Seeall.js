import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const CommonTabStructure = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteBackground}>
        {children}
      </View>
    </View>
  );
};

const TabContent = ({ content }) => {
  return (
    <CommonTabStructure>
      <Text>{content}</Text>
    </CommonTabStructure>
  );
};

const BackgroundImage = () => {
  return (
    <ImageBackground source={require('./bg.png')} style={styles.image}>
      <Tab.Navigator style={styles.tabNavigator}>
        <Tab.Screen name="All" component={TabOne} />
        <Tab.Screen name="Favorites" component={TabTwo} />
        <Tab.Screen name="ERC" component={TabThree} />
        <Tab.Screen name="TRX" component={TabFour} />
        <Tab.Screen name="USDT" component={TabFive} />
        <Tab.Screen name="Matic" component={TabSix} />
      </Tab.Navigator>
    </ImageBackground>
  );
};

const TabOne = () => {
  return <TabContent content="Tab One Content" />;
};

const TabTwo = () => {
  return <TabContent content="Tab Two Content" />;
};

const TabThree = () => {
  return <TabContent content="Tab Three Content" />;
};

const TabFour = () => {
  return <TabContent content="Tab Four Content" />;
};

const TabFive = () => {
  return <TabContent content="Tab Five Content" />;
};

const TabSix = () => {
  return <TabContent content="Tab Six Content" />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '65%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabNavigator: {
    top: '35%',
  },
});

const SeeAll = () => {
  return (
    <View style={styles.container}>
      <BackgroundImage />
    </View>
  );
};

export default SeeAll;
