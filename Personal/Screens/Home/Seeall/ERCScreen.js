// FavoritesScreen.js
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const ERCScreen = () => {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Favorite Coins</Text>
      </View>
    </NavigationContainer>
  );
};
export default ERCScreen;
