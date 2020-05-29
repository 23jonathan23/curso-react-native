import React from 'react';
import { View, FlatList, Text } from 'react-native';

const alunos = [
  { id: 1, nome: 'Joao', nota: 8 },
  { id: 2, nome: 'Maria', nota: 7.9 },
  { id: 3, nome: 'Carlos', nota: 9 },
  { id: 4, nome: 'Joao', nota: 7.9 },
  { id: 5, nome: 'Joao', nota: 7.9 },
  { id: 6, nome: 'Joao', nota: 7.9 },
  { id: 7, nome: 'Joao', nota: 7.9 },
  { id: 8, nome: 'Joao', nota: 7.9 },
  { id: 9, nome: 'Joao', nota: 7.9 },
  { id: 10, nome: 'Joao', nota: 7.9 },
  { id: 11, nome: 'Joao', nota: 7.9 },
  { id: 12, nome: 'Joao', nota: 7.9 },
  { id: 13, nome: 'Joao', nota: 7.9 },
  { id: 14, nome: 'Joao', nota: 7.9 },
  { id: 15, nome: 'Joao', nota: 7.9 },
  { id: 16, nome: 'Joao', nota: 7.9 },
  { id: 17, nome: 'Joao', nota: 7.9 },
  { id: 18, nome: 'Joao', nota: 7.9 },
  { id: 19, nome: 'Joao', nota: 7.9 },
];

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#DDD',
  borderWidth: 0.5,
  borderColor: '#222',

  //Flex
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const Aluno = props => (
  <View style={itemEstilo}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
  </View>
);

export default props => {
  const renderItem = ({ item }) => <Aluno {...item} />;

  return (
    <FlatList
      data={alunos}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
