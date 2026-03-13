import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useListaItensViewModel } from '../viewmodels/useListaItensViewModel';
import { Item } from '../models/Item';

export default function ListaItensView() {
  const { itens, textoInput, setTextoInput, adicionarItem } = useListaItensViewModel();

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemLista}>
      <Text style={styles.textoItem}>{item.nome}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textoInput}
          onChangeText={(texto: string) => setTextoInput(texto)}
        />
        <Button title="Adicionar" onPress={adicionarItem} />
      </View>

      <FlatList
        data={itens}
        renderItem={renderItem}
        keyExtractor={(item: Item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 30 },
  inputContainer: { marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  itemLista: { padding: 15, backgroundColor: '#f9f9f9', borderBottomWidth: 1, borderColor: '#eee', marginBottom: 5, borderRadius: 5 },
  textoItem: { fontSize: 16, fontWeight: 'bold' }
});