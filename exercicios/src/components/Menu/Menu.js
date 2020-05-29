import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simple from '../Simple/Simple';
import ParImpar from '../ParImpar/ParImpar';
import { Inverse, MegaSena } from '../Multi/Multi';
import Contador from '../Contador/Contador';
import Plataformas from '../Plataformas/Plataformas';
import ValidarProps from '../ValidarProps/ValidarProps';
import Evento from '../Evento/Evento';
import { Avo } from '../ComunicacaoDireta/ComunicacaoDireta';
import TextoSincronizado from '../ComunicacaoIndireta/ComunicacaoIndireta';
import ListaFlex from '../ListaAlunos/ListaAlunos';
import Flex from '../Flex/Flex';

const Drawer = createDrawerNavigator();

const MegaSenaScreen = ({ navigation }) => <MegaSena numeros={6} />;
const InverseScreen = ({ navigation }) => <Inverse texto="Jonathan Raphael" />;
const ParImparScreen = ({ navigation }) => <ParImpar numero={12} />;
const SimpleScreen = ({ navigation }) => <Simple texto="Simples!" />;
const ContadorScreen = ({ navigation }) => <Contador numeroInicial={40} />;
const ValidarPropsScreen = ({ navigation }) => (
  <ValidarProps label="Ano: " ano={2020} />
);
const ComunicacaoDiretaScreen = ({ navigation }) => (
  <Avo nome="João" sobrenome="Silva" />
);

export default props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MegaSena">
        <Drawer.Screen
          name="MegaSena"
          component={MegaSenaScreen}
          options={{ drawerLabel: 'Mega Sena' }}
        />
        <Drawer.Screen
          name="Inverse"
          component={InverseScreen}
          options={{ drawerLabel: 'Inverse' }}
        />
        <Drawer.Screen
          name="ParImpar"
          component={ParImparScreen}
          options={{ drawerLabel: 'ParImpar' }}
        />
        <Drawer.Screen
          name="Simple"
          component={SimpleScreen}
          options={{ drawerLabel: 'Simple' }}
        />
        <Drawer.Screen
          name="Contador"
          component={ContadorScreen}
          options={{ drawerLabel: 'Contador' }}
        />
        <Drawer.Screen
          name="Plataformas"
          component={Plataformas}
          options={{ drawerLabel: 'Plataformas' }}
        />
        <Drawer.Screen
          name="ValidarProps"
          component={ValidarPropsScreen}
          options={{ drawerLabel: 'ValidarProps' }}
        />
        <Drawer.Screen
          name="Evento"
          component={Evento}
          options={{ drawerLabel: 'Evento' }}
        />
        <Drawer.Screen
          name="ComunicacaoDireta"
          component={ComunicacaoDiretaScreen}
          options={{ drawerLabel: 'Comunicaçao Direta' }}
        />
        <Drawer.Screen
          name="ComunicacaoIndireta"
          component={TextoSincronizado}
          options={{ drawerLabel: 'Comunicaçao Indireta' }}
        />
        <Drawer.Screen
          name="ListaFlex"
          component={ListaFlex}
          options={{ drawerLabel: 'Lista Flex' }}
        />
        <Drawer.Screen
          name="Flex"
          component={Flex}
          options={{ drawerLabel: 'Flex' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
