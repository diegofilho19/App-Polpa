import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const PixScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleConfirmPayment = () => {
    setIsModalVisible(true);
  };

  const handleContinue = () => {
    setIsModalVisible(false);
    navigation.navigate('Confirmado');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Informações do Pix</Text>
      </View>
      <Image
        source={require('./qrcode.png')} // Substitua pela URL da imagem do QR code
        style={styles.qrCodeImage}
      />
      <Text style={styles.pixKey}>Chave Pix: 81989395981</Text>
      <Text style={styles.totalValue}>Valor Total: R$30,00</Text>
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
    marginRight: 5,
    marginLeft: -19,
    marginTop: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  qrCodeImage: {
    coloR: '#fff',
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginVertical: 'auto',
  },
  pixKey: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold'
  },
  totalValue: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 32,
    fontWeight: 'bold',
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

export default PixScreen;
