import React, { useState } from  'react';

import {
    View,
    Text,
    StyleSheet, 
    Button,
    TextInput,
    ScrollView,
    FlatList
}
from 'react-native';

import cores from '../constantes/cores';

import ContatoItem from '../componentes/ContatoItem';
import ContatoInput from '../componentes/ContatoInput';

const NovoLugarTela = (props) => {

    const[contatos, setContatos] = useState ([]);
    const[contadorContatos, setContadorContatos] = useState(10);
  
    const adicionarContato = (contato, telefone) => {
      setContatos(contatos => {
          setContadorContatos(contadorContatos + 2);
          return [...contatos, {key: contadorContatos.toString(), nome: contato, telefone: telefone}]
      });
    }
  
    const removerContato = (keyASerRemovida) =>{
      setContatos(contatos => {
        return contatos.filter((contato) => {
           return contato.key !== keyASerRemovida
        })
      });
    }

    return (
        <View style={estilos.telaPrincipalView}>
        <ContatoInput onAdicionarContato={adicionarContato}/>
            <FlatList 
            data={contatos}
            renderItem={
                (contato) => (
                <ContatoItem
                    chave={contato.item.key} 
                    contato={contato.item.key + ' - ' + contato.item.nome + ' - ' + contato.item.telefone} 
                    onDelete={removerContato}
                />
                )
            }
            />      
        </View>
    );
};

const estilos = StyleSheet.create ({
    form: {
        margin: 30
    },
    titulo: {
        fontSize: 18,
        marginBottom: 16,
        textAlign: 'center'
    },
    textInput: {
        borderBottomColor: '#CCC',
        borderBottom: 2,
        marginBottom: 16,
        paddingVertical: 12
    }
});

export default NovoLugarTela;
