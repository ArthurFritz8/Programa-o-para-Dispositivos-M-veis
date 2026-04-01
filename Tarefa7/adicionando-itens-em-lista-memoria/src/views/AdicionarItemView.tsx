import React from 'react';
import { SafeAreaView, View, TextInput, Button } from 'react-native';
import { useAdicionarItemViewModel } from '../viewmodels/useAdicionarItemViewModel';
import { styles } from '../styles/estilosGlobais';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// 1. Mudamos a importação para o nome novo!


// 2. Atualizamos os tipos para usar a pilha do Catálogo
type AdicionarScreenRouteProp = RouteProp<CatalogoStackParams, 'Adicionar'>;
type AdicionarScreenNavigationProp = NativeStackNavigationProp<CatalogoStackParams, 'Adicionar'>;

type Props = {
  route: AdicionarScreenRouteProp;
  navigation: AdicionarScreenNavigationProp;
};

export default function AdicionarItemView({ route, navigation }: Props) {
  const { listaAtual, onSave } = route.params;

  const { 
    textoInput, setTextoInput, 
    descricaoInput, setDescricaoInput, 
    salvar 
  } = useAdicionarItemViewModel(listaAtual, onSave, () => navigation.goBack());

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
        <Button title="Salvar" onPress={salvar} />
      </View>
    </SafeAreaView>
  );
}