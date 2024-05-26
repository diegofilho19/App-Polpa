// CartScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useCart } from './CartContext'; 

const CartScreen = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); 
  const navigation = useNavigation();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = 5;
    setTotal(subtotal + delivery);
  };

  const incrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const decrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  const handleCheckout = () => {
    navigation.navigate('PaymentMethod');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho:</Text>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('Produto')}>
        <Icon name="arrow-back" size={22} color="#fd511a"/>
        </TouchableOpacity>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.productPrice}>R${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Icon name="trash-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Subtotal: R${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</Text>
        <Text style={styles.totalText}>Entrega: R$5.00</Text>
        <Text style={styles.totalText}>Total: R${total.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('Pagamento')}>
        <Text style={styles.checkoutButtonText}>Formas de Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  voltar: {
    position: 'static',
    marginTop: -35,
    marginBottom: 12
    
  },
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fd511a',
    marginBottom: 10,
    marginLeft: 25,
    marginTop: 35,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#fd511a',
    position: 'static',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  quantityButton: {
    fontSize: 20,
    width: 30,
    height: 30,
    textAlign: 'center',
    lineHeight: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fd511a',
    color: '#fd511a',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  productPrice: {
    fontSize: 16,
    color: '#555',
  },
  totalContainer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 16,
    marginVertical: 2,
  },
  checkoutButton: {
    backgroundColor: '#fd511a',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CartScreen;
