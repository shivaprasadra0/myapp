import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from './BottomNavigationBar';
const App1 = () => {
  return (
    <NavigationContainer independent={true}>
      <BottomNavigationBar />
    </NavigationContainer>
  );
};

export default App1;

