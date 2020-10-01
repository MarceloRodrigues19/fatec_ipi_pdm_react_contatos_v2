import React from  'react';

import {
    View,
    Text,
    StyleSheet
}
from 'react-native';

const DetalhesContatoTela = (props) => {
    return (
        <View>
            <Text>DetalhesContatoTela</Text>
        </View>
    )
};

DetalhesDoContatoTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam ('tituloContato')
    }
}

const estilos = StyleSheet.create ({

});

export default DetalhesDoContatoTela;