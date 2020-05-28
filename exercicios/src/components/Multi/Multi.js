import React from 'react';
import { Text } from 'react-native';

import DefaultStyles from '../../styles/default';

export const Inverse = props => {
  const inv = props.texto
    .split('')
    .reverse()
    .join('');
  return <Text style={DefaultStyles.ex}>{inv}</Text>;
};

export const MegaSena = props => {
  const [min, max] = [1, 60];
  const numeros = Array(props.numeros || 6).fill(0);

  numeros.forEach((v, i) => {
    const gerarNumerosAleatorios = () => {
      let novo = Math.floor(Math.random() * (max - min + 1)) + min;
      if (numeros.includes(novo)) {
        gerarNumerosAleatorios();
      } else {
        numeros[i] = novo;
        return;
      }
    };
    gerarNumerosAleatorios();
  });

  numeros.sort((a, b) => a - b);
  return <Text style={DefaultStyles.ex}>{numeros.join(', ')}</Text>;
};
