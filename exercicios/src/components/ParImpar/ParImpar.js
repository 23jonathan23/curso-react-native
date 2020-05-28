import React from 'react';
import { View, Text } from 'react-native';

import DefaultStyles from '../../styles/default';

const parOrImpar = num => {
  const v = num % 2 === 0 ? 'Par' : 'Impar';
  return <Text style={DefaultStyles.ex}>{v}</Text>;
};

export default props => {
  return <View>{parOrImpar(props.numero)}</View>;
};
