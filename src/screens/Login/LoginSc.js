import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Produto');
  }

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./POLPAS_PURO_SABOR-removebg-preview.png')} // Coloque aqui o caminho para a imagem do logo
        style={styles.logo}
      />
      <Text style={styles.title}>Faça o seu Login!</Text>

      <Text style={styles.label}>Nome ou E-mail:</Text>
      <TextInput style={styles.input} placeholder="Ex: dgfilho@gmail.com" />

      <Text style={styles.label}>Senha:</Text>
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        
        <Text style={styles.orText}>OU</Text>
        
        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 0,
    marginTop: 110,
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    position: 'static',
    marginTop: -50,
  },
  label: {
    fontSize: 18,
    color: '#000',
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FF5722',
    borderRadius: 25,
    padding: 10,
    fontSize: 16,
    width: '90%',
    marginBottom: 20,
    width: 343,
    height: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#FF5722',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 152,
    height: 33,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#000',
    marginHorizontal: 5,
  },
});

export default LoginScreen;