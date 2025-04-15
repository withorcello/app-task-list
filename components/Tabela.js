import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function Tabela({ itens }) {
  const linha = ({ item }) => (
    <View style={styles.row}>
      <Text>{item.id}</Text>
      <Text>{item.nome}</Text>
    </View>
  )

  return (
    <View>
      <View style={styles.header}>
        <Text>Id</Text>
        <Text>Nome</Text>
      </View>
      <FlatList
        data={itens}
        renderItem={linha}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    padding: 4,
    borderRadius: 3,
    backgroundColor: 'white',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    padding: 4,
    borderRadius: 3,
    backgroundColor: 'white',
  }
});
