// ERCScreen.js
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const MaticScreen = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ERC Coins</Text>
        <Button title="TRX" onPress={() => navigation.navigate('TRX')} />
      </View>
    </NavigationContainer>
  );
};
export default MaticScreen;

