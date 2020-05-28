import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import DefaultStyles from '../../styles/default';

export default props => {
  const [texto, setTexto] = useState('');

  const alterarTexto = texto => {
    setTexto(texto);
  };

  return (
    <View>
      <Text style={DefaultStyles.fonte40}>{texto}</Text>
      <TextInput
        style={DefaultStyles.input}
        value={texto}
        onChangeText={alterarTexto}
      />
    </View>
  );
};
