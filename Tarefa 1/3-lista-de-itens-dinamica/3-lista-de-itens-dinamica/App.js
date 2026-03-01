import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Button, 
  ScrollView, 
  Text, 
  StyleSheet, 
  SafeAreaView 
} from 'react-native';

export default function Exercice3() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  const adicionarItem = () => {
    if (texto.trim().length > 0) {
      setItens([...itens, texto]);
      setTexto('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite algo..."
          value={texto}
          onChangeText={setTexto}
        />
        <Button title="Adicionar" onPress={adicionarItem} />
      </View>

      <ScrollView style={styles.scroll}>
        {itens.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  scroll: {
    flex: 1,
  },
  item: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
  },
});