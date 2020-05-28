import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';

import Simples from './components/Simple/Simple';
import ParImpar from './components/ParImpar/ParImpar';
import { Inverse, MegaSena } from './components/Multi/Multi';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto="Simples!" />
        <ParImpar numero={11} />
        <Inverse texto="Jonathan Raphael" />
        <MegaSena numeros={6} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
