import { StyleSheet, View } from 'react-native';
import Tabela from './components/Tabela';
import { useState } from 'react';
import TrocaTheme from './components/TrocaTheme';
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [itens, setItens] = useState([
    { id: "01", nome: "Fazer atividade de POO", check: false, checkItem: checkItem },
    { id: "02", nome: "Fazer atividade de Banco de Dados", check: false, checkItem: checkItem },
  ]);

  function checkItem(id) {
    const index = itens.findIndex(item => item.id === id)
    var item = itens[index];

    item.check = !item.check;
    itens.splice(index, 1, item);
    console.log(itens);

    setItens(itens);
  }

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

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Tabela />
    </View>
  )
}

const styles = StyleSheet.cnreate({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
