import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PaymentMethodsScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const navigation = useNavigation();

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleConfirmPayment = () => {
    if (selectedPaymentMethod === 'Cartão de Crédito') {
      navigation.navigate('Cartao');
    } else {
    if (selectedPaymentMethod === 'Pix') {
      navigation.navigate('Pix');
    }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#fff"/>
      </TouchableOpacity>
      <Text style={styles.title}>Pagamentos</Text>
      <Text style={styles.subtitle}>Métodos de Pagamento:</Text>

      <TouchableOpacity
  onPress={() => handlePaymentMethodSelect('Cartão de Crédito')}
  style={[
    styles.paymentMethod,
    {
      backgroundColor: selectedPaymentMethod === 'Cartão de Crédito' ? '#ddd' : '#fff',
      borderColor: selectedPaymentMethod === 'Cartão de Crédito' ? '#fd511a' : '#ccc',
    },
  ]}
>
  <View style={styles.paymentMethodContent}>
    <Image
      source={require('./cartao.png')}
      style={styles.paymentMethodImage}
    />
    <Text style={styles.paymentMethodText}>Cartão de Crédito/Débito</Text>
  </View>
</TouchableOpacity>

<TouchableOpacity
        onPress={() => handlePaymentMethodSelect('Pix')}
        style={[
          styles.paymentMethod,
          {
            backgroundColor: selectedPaymentMethod === 'Pix' ? '#ddd' : '#fff',
            borderColor: selectedPaymentMethod === 'Pix' ? '#fd511a' : '#ccc',
          },
        ]}
>
  <View style={styles.paymentMethodContent}>
    <Image
      source={require('./pix.png')}
      style={styles.paymentMethodImage}
    />
    <Text style={styles.paymentMethodText}>Pix</Text>
  </View>
</TouchableOpacity>
  <TouchableOpacity
        onPress={handleConfirmPayment}
        style={styles.confirmButton}
      >
        <Text style={styles.confirmButtonText}>Confirmar Pedido</Text>
      </TouchableOpacity>
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fd511a',
    width: '100%',
    height: 100,
  },
  voltar: {
    width: 25,
    height: 25,
    marginTop: 30,
    marginRight: 0,
    
  },
  title: {
    color: '#fff',
    marginLeft: 27,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -29,
    marginBottom: 30,

  },
  subtitle: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 8,
    marginTop: '120',
  },
  paymentMethodContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethodImage: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  paymentMethod: {
    padding: 16,
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentMethodText: {
    fontSize: 16,
    color: '#444',
  },
  confirmButton: {
    backgroundColor: '#fd511a',
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 420,
  },
  confirmButtonText: {
    position: 'absolute',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    
  },
});

export default PaymentMethodsScreen;