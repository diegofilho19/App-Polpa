import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const CadScreen = () => {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    email: '',
    senha: '',
    enderecoNome: '',
    rua: '',
    numeroCasa: '',
    cidade: '',
    cep: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleSalvar = () => {
    // Aqui você pode adicionar a lógica para salvar os dados
    console.log(form);
    // Após salvar, navegue para a tela de login
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cadastro</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={form.nome}
          onChangeText={(text) => handleChange('nome', text)}
        />
        <Text style={styles.label}>Número (Tel):</Text>
        <TextInput
          style={styles.input}
          value={form.telefone}
          onChangeText={(text) => handleChange('telefone', text)}
        />
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          value={form.email}
          onChangeText={(text) => handleChange('email', text)}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          value={form.senha}
          secureTextEntry
          onChangeText={(text) => handleChange('senha', text)}
        />
        <Text style={styles.label}>Endereço:</Text>
        <TextInput
          style={styles.input}
          value={form.enderecoNome}
          onChangeText={(text) => handleChange('enderecoNome', text)}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          value={form.rua}
          onChangeText={(text) => handleChange('rua', text)}
          placeholder="Rua"
        />
        <TextInput
          style={styles.input}
          value={form.numeroCasa}
          onChangeText={(text) => handleChange('numeroCasa', text)}
          placeholder="Num. Casa"
        />
        <TextInput
          style={styles.input}
          value={form.cidade}
          onChangeText={(text) => handleChange('cidade', text)}
          placeholder="Cidade"
        />
        <TextInput
          style={styles.input}
          value={form.cep}
          onChangeText={(text) => handleChange('cep', text)}
          placeholder="CEP"
        />
        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fd511a',
    justifyContent: 'center',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  backButton: {
    marginRight: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    marginBottom: 4,
    fontWeight: 'bold',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CadScreen;
