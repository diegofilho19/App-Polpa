import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EditarScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>
        <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} placeholder="Nome" />

      <Text style={styles.label}>Número:</Text>
      <TextInput style={styles.input} placeholder="Número" keyboardType="phone-pad" />

      <Text style={styles.label}>E-mail:</Text>
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5722',
    padding: 20,
  },

  voltar: {
    position: 'absolute',
    marginTop: 55,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    marginTop: 30,
    marginLeft: 15,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 280,
    position: 'static',
  },
  buttonText: {
    fontSize: 18,
    color: '#FF5722',
    fontWeight: 'bold',
  },
});

export default EditarScreen;