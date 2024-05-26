import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ConfirmadoScreen = () => {
  const navigation = useNavigation();

  const handleContinueShopping = () => {
    navigation.navigate('PagamentoScreen'); // Substitua por onde deseja navegar
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./icons8-handshake-80.png')} // Substitua pela URL da imagem de handshake
        style={styles.handshakeImage}
      />
      <Text style={styles.title}>Pedido Confirmado</Text>
      <Text style={styles.subtitle}>Obrigado pela compra</Text>
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('Produto')}>
        <Text style={styles.continueButtonText}>Continuar Comprando</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  handshakeImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 40,
  },
  continueButton: {
    backgroundColor: '#fd511a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  continueButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ConfirmadoScreen;
