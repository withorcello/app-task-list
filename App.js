import { StyleSheet, TextInput, View } from 'react-native';
import Tabela from './components/Tabela';
import { useState } from 'react';
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AppContent>
      </AppContent>
    </ThemeProvider>
  );
}

const AppContent = () => {
  const React = require("react");
  const { colors } = React.useContext(require("./context/ThemeContext").ThemeContext)

  const [newItem, setNewItem] = useState('');
  const [itens, setItens] = useState([]);

  function checkItem(id) {
    const novosItens = itens.map(item => {
      if (item.id === id) item.check = !item.check;
      return item;
    });

    setItens(novosItens);
  }

  function addNewItem() {
    itens.push({
      id: itens.length + 1,
      nome: newItem,
      check: false,
      checkItem
    });

    setNewItem('');
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={setNewItem}
          placeholder="Digite o titulo da nova tarefa"
          onSubmitEditing={addNewItem}
        />
        <Tabela itens={itens} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: 500,
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 5
  },
  input: {
    width: '100%',
    height: 34,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'white'
  },
});
