import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default props => {
  const [numeroContador, setNumeroContador] = useState(props.numeroInicial);

  const maisUm = () => {
    setNumeroContador(numeroContador + 1);
  };

  const limpar = () => {
    setNumeroContador(props.numeroInicial);
  };

  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>
        {numeroContador}
      </Text>
      <TouchableHighlight onPress={maisUm} onLongPress={limpar}>
        <Text>Incrementar/Zerar</Text>
      </TouchableHighlight>
    </View>
  );
};
