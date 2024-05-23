import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PaymentScreen from './src/screens/Pagamento/PagamentoScreen.js';
import ConfirmedScreen from './src/screens/Cartao/Cartao.js';
import PixScreen from './src/screens/Pix/pix.js';
import ConfirmadoScreen from './src/screens/Confirmar/Confirmado.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Payment">
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmed"
          component={ConfirmedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pix"
          component={PixScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmado"
          component={ConfirmadoScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
