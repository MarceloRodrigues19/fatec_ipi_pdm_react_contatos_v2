import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Cores from '../constantes/cores';
import DetalhesContatoTela from '../telas/DetalhesContatoTela';
import ListaContatosTela from '../telas/ListaContatosTela';
import NovoContatoTela from '../telas/NovoContatoTela';

const ContatosNavigator = createStackNavigator ({
    ListaDeContatos: ListaContatosTela,
    DetalhesDoContato: DetalhesContatoTela,
    NovoContato: NovoContatoTela
});

export default createAppContainer (ContatosNavigator);