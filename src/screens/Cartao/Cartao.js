import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../Carrinho/CartContext';

const CartaoScreen = () => {
  const { cartItems } = useCart();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleConfirmPayment = () => {
    setIsModalVisible(true);
  };

  const handleContinue = () => {
    setIsModalVisible(false);
    navigation.navigate('Confirmado');
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = 5.00; // Valor fixo da entrega
    const total = subtotal + delivery;
    return { subtotal, delivery, total };
  };

  const { subtotal, delivery, total } = calculateTotal();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Informações do Cartão</Text>
      </View>
      <TextInput style={styles.input} placeholder="Número do Cartão" placeholderTextColor="#000" />
      <TextInput style={styles.input} placeholder="Nome do Titular" placeholderTextColor="#000" />
      <View style={styles.row}>
        <TextInput style={[styles.input, { flex: 1 }]} placeholder="Data de Validade" placeholderTextColor="#000" />
        <TextInput style={[styles.input, { flex: 1, marginLeft: 8 }]} placeholder="CVC" placeholderTextColor="#000" />
      </View>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Valor: R${subtotal.toFixed(2)}</Text>
        <Text style={styles.summaryText}>Entrega: R${delivery.toFixed(2)}</Text>
        <Text style={styles.totalText}>Total: R${total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
        <Text style={styles.confirmButtonText}>Confirmar Pagamento</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('./icons8-approval-60.png')} style={styles.checkmarkImage} />
            <Text style={styles.modalTitle}>CONFIRMADO</Text>
            <Text style={styles.modalSubtitle}>Seu pagamento foi realizado com sucesso!</Text>
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
              <Text style={styles.continueButtonText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fd511a',
  },
  headerContainer: {
    width: '100%',
    height: 68,
    backgroundColor: '#fd511a',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
  },
  summary: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  summaryText: {
    fontSize: 18,
    color: '#000',
  },
  totalText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 8,
  },
  confirmButton: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  confirmButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  checkmarkImage: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CartaoScreen;