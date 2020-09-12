import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ContatoInput from './components/ContatoInput';
import ContatoItem from './components/ContatoItem';

export default function App() {

  
  const [contatos, setContatos] = useState([]);
  const [count, setCount] = useState(10);

  

  const addContato = (nome, telephone) => {
    let contato = { nome: nome, telephone: telephone };
    setContatos(contatos => {
      setCount(count + 2);
      return [ { key: count.toString(), value: contato },...contatos];
      
    });
  }

  const removeContatos = (keyToBeRemove) => {
    setContatos(contatos => {
      return contatos.filter((contato) => {
        return contato.key !== keyToBeRemove;
      });
    });
  }

  return (
    <View style={styles.container}>
      <ContatoInput
        addContato={addContato}
      />

      <FlatList
        data={contatos}
        renderItem={
          (contato) =>
          <ContatoItem
            key={contato.item.value.key}
            nome={contato.item.value.nome}
            telephone={contato.item.value.telephone}
            onDelete={removeContatos}
          />
        }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
    alignItems: 'center'
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
  },
  listArea: {
    marginTop: 20
  },
  itemList: {
    height: 64,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16
  },
  itemHeader: {
    fontWeight: "bold",
    color: '#32264d',
    fontSize: 20,
  },
  itemBody: {
    color: '#cdcdcd',
    fontSize: 16,
    marginTop: 5
  }
});
