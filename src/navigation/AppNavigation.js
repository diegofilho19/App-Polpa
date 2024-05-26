import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProdutoScreen from '../components/Produto';
import CarrinhoScreen from '../screens/Carrinho/CartScreen';
import PaymentMethodsScreen from '../screens/Pagamento/PagamentoScreen';
import CartaoScreen from '../screens/Cartao/Cartao';
import PixScreen from '../screens/Pix/pix';
import ConfirmadoScreen from '../screens/Confirmar/Confirmado';
import { CartProvider } from '../screens/Carrinho/CartContext';
import EditarPerfil from '../screens/EditarPerfil/editar';
import LoginScreen from '../screens/Login/LoginSc';
import CadScreen from '../screens/Cadastro/CadScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> 
          <Stack.Screen name="Cadastro" component={CadScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Produto" component={ProdutoScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cart" component={CarrinhoScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Editar" component={EditarPerfil} options={{headerShown: false}} />
          <Stack.Screen name="Pagamento" component={PaymentMethodsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cartao" component={CartaoScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Pix" component={PixScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Confirmado" component={ConfirmadoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default AppNavigator;
