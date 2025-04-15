import { StyleSheet, View } from 'react-native';
import Tabela from './components/Tabela';
import { useState } from 'react';

export default function App() {
  const [itens, setItens] = useState([
    { id: "01", nome: "Fazer atividade de POO" },
    { id: "02", nome: "Fazer atividade de Banco de Dados" },
  ]);

  return (
    <View style={styles.container}>
      <Tabela itens={itens} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
