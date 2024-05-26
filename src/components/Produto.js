import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useCart } from '../screens/Carrinho/CartContext';

const products = [
  { id: '1', name: 'Polpa de Acerola', price: 7.00, stock: 10, image: require('../assets/acerola.png') },
  { id: '2', name: 'Polpa de Maracujá', price: 7.00, stock: 10, image: require('../assets/maracuja.png') },
  { id: '3', name: 'Polpa de Cajá', price: 7.00, stock: 10, image: require('../assets/caja.jpg') },
  { id: '4', name: 'Polpa de Goiaba', price: 7.00, stock: 10, image: require('../assets/goiaba-vermelha.jpg') },
  { id: '5', name: 'Polpa de Graviola', price: 7.00, stock: 10, image: require('../assets/Graviola.png') },
];

const ProdutoScreen = ({ navigation }) => {
  const { addToCart } = useCart();
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput style={styles.searchBar} placeholder="Buscar Polpas" />
      </View>
      <Text style={styles.header}>Polpas Disponíveis:</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>R${item.price.toFixed(2)}</Text>
              <Text style={styles.productStock}>Estoque: {item.stock}</Text>
            </View>
            <TouchableOpacity onPress={() => handleAddToCart(item)}>
              <Icon name="cart-outline" size={24} color="#fd511a" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Produto')}>
          <Icon name="home-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Editar')}>
          <Icon name="settings-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Icon name="checkmark-circle-outline" size={80} color="green" />
            <Text style={styles.modalText}>Produto adicionado ao carrinho!</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#fd511a',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: '90%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fd511a',
    marginHorizontal: 16,
    marginTop: 10,
  },
  productContainer: {
    flexDirection: 'row',
    padding: 16,
    margin: 8,
    borderColor: '#eee',
    borderWidth: 1,
    borderColor: '#fd511a',
    borderRadius: 8,
  },
  productImage: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
  },
  productStock: {
    fontSize: 12,
    color: '#999',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fd511a',
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
    borderRadius: 8,
    alignItems: 'center',
  },
  modalText: {
    marginTop: 16,
    fontSize: 16,
    color: '#444',
  },
});

export default ProdutoScreen;
