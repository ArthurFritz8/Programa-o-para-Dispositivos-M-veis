import React from 'react';
import { SafeAreaView, View, TextInput, Button } from 'react-native';
import { useAdicionarItemViewModel } from '../viewmodels/useAdicionarItemViewModel';
import { styles } from '../styles/estilosGlobais';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type AdicionarScreenRouteProp = RouteProp<RootStackParamList, 'Adicionar'>;
type AdicionarScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Adicionar'>;

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