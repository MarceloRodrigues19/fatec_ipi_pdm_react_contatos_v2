import React from  'react';

import {
    View,
    Text,
    StyleSheet
}
from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../componentes/BotaoCabecalho';
import { Platform } from 'react-native';

const ListaContatosTela = (props) => {
    return (
        <View>
            <Text>Agenda:</Text>
        </View>
    )
};

ListaContatosTela.navigationOptions = dadosNavegacao => {
    return {
        headerTitle: "Lista de Contatos",
        headerRight: () => {
            return (
                <HeaderButtons 
                    HeaderButtonComponent={BotaoCabecalho}>
                    <Item
                        title="Adicionar"
                        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                        onPress={() => {
                            dadosNavegacao.navigation.navigate ("Agenda");
                        }}
                    />
                </HeaderButtons>
            )
        }
    }
}

const estilos = StyleSheet.create ({

});

export default ListaContatosTela;
