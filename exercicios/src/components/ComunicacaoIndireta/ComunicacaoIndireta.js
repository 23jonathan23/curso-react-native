import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import DefaultStyles from '../../styles/default';

export const Entrada = props => (
  <View>
    <TextInput
      value={props.texto}
      style={DefaultStyles.input}
      onChangeText={props.chamarQuandoMudar}
    />
  </View>
);

export default props => {
  const [texto, setTexto] = useState('');

  const alterarTexto = v => {
    setTexto(v);
  };

  return (
    <View>
      <Text style={DefaultStyles.fonte40}>{texto}</Text>
      <Entrada texto={texto} chamarQuandoMudar={alterarTexto} />
    </View>
  );
};
