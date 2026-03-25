import React from 'react';
import { SafeAreaView, View, Text, Button, FlatList } from 'react-native';
import { useListaItensViewModel } from '../viewmodels/useListaItensViewModel';
import { Item } from '../models/Item';
import { styles } from '../styles/estilosGlobais';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Lista'>;

export default function ListaView({ navigation }: { navigation: NavigationProp }) {
  const { itens, adicionarItemPronto, removerItem } = useListaItensViewModel();

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemLista}>
      <View style={styles.infoContainer}>
        <Text style={styles.textoItem}>{item.nome}</Text>
        {item.descricao ? <Text style={styles.textoDescricao}>{item.descricao}</Text> : null}
      </View>
      <Button title="X" color="#ff4444" onPress={() => removerItem(item.id)} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Button 
          title="Adicionar Novo Item" 
          onPress={() => navigation.navigate('Adicionar', { 
            listaAtual: itens, 
            onSave: adicionarItemPronto 
          })} 
        />
      </View>

      <FlatList
        data={itens}
        renderItem={renderItem}
        keyExtractor={(item: Item) => item.id}
      />
    </SafeAreaView>
  );
}