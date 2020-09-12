import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const ContatoInput = (props) => {
  const [name, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const captureNome = (nome) => {
    setNome(nome);
  }

  const captureTelefone = (telefone) => {
    setTelefone(telefone);
  }

  return (
    <View style={styles.inputArea}>
        <Text style={styles.title}>Dados a cadastrar</Text>

        <TextInput
          placeholder="Nome"
          style={styles.Input}
          onChangeText={captureNome}
          value={nome}
        />

        <TextInput
          placeholder="Telefone"
          style={styles.Input}
          onChangeText={captureTelefone}
          value={telefone}
        />

        <Button 
          style={styles.submitButton}
          title="Cadastrar"
          onPress={() => props.addContato(nome, telefone)}
        />
      </View>  
  );
}

const styles = StyleSheet.create({
  inputArea: {
    marginBottom: 20
  },
  title: {
    fontWeight: "bold",
    color: '#32264d',
    fontSize: 20,
    lineHeight: 30,
    paddingTop: 50
  },
  Input:{
    height: 54,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },
  submitButton: {
    backgroundColor: '#e3a052',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ContatoInput;