import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Task from "../components/Task";

export default function Tabela({ itens }) {
  return (
    <View>
      <FlatList
        data={itens}
        renderItem={Task}
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
