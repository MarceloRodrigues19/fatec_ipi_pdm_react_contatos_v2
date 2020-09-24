import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Cores from '../constantes/cores';
import NovoContatoTela from '../telas/NovoContatoTela';
import ListaContatosTela from '../telas/ListaContatosTela';

const LugaresNavigator = createStackNavigator ({
    ListaContatos: ListaContatosTela,
    Agenda: NovoContatoTela
});

export default createAppContainer (LugaresNavigator);