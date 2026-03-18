import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList } from 'react-native';
import { useListaItensViewModel } from '../viewmodels/useListaItensViewModel';
import { Item } from '../models/Item';
import { styles } from '../styles/estilosGlobais';

export default function ListaItensView() {
  const { 
    itens, 
    textoInput, 
    setTextoInput, 
    descricaoInput, 
    setDescricaoInput, 
    adicionarItem, 
    removerItem 
  } = useListaItensViewModel();

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemLista}>
      <View style={styles.infoContainer}>
        <Text style={styles.textoItem}>{item.nome}</Text>
        {item.descricao ? <Text style={styles.textoDescricao}>{item.descricao}</Text> : null}
      </View>
      <Button 
        title="X" 
        color="#ff4444" 
        onPress={() => removerItem(item.id)} 
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={textoInput}
          onChangeText={setTextoInput}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricaoInput}
          onChangeText={setDescricaoInput}
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