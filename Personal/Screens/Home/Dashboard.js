import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { BarChart } from 'react-native-chart-kit';


const Dashboard = () => {
  const [data, setData] = React.useState([
    { x: 'BTC', y: 61704.49 },
    { x: 'ETH', y: 4304.47 },
    { x: 'USDT', y: 1.06 },
    { x: 'BUSD', y: 585.24 },
    { x: 'DOGE', y: 0.35 },
  ]);

  const renderExchangeRates = () => {
    if (!data || !data.color) {
        return null;
      }
    return data.map((item, index) => (
      <Card key={index}>
        
        <Text>
          {item.x}/{item.y}
        </Text>
        <BarChart    
          height={100}
          data={[{ x: item.x, y: item.y, color: data.color }]}
        />
      </Card>
    ));
  };

  return (
    <View>
      <Text>Hi User, Welcome Back!</Text>
      <Text>Total Balance: 458961.00 $ 2.00 BTC</Text>
      <Text>MUSD Balance: 458961.00 $ 2.00 BTC</Text>
      <Text>Exchange Rates</Text>
      {renderExchangeRates()}
    </View>
  );
};

export default Dashboard;
