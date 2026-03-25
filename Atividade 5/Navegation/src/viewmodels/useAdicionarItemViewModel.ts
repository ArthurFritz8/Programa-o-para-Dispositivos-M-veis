import { useState } from 'react';
import { Alert } from 'react-native';
import { validarEAdicionarItem } from '../services/ItemService';
import { Item } from '../models/Item';

export function useAdicionarItemViewModel(listaAtual: Item[], onSave: (item: Item) => void, goBack: () => void) {
  const [textoInput, setTextoInput] = useState<string>('');
  const [descricaoInput, setDescricaoInput] = useState<string>('');

  const salvar = () => {
    const resultado = validarEAdicionarItem(textoInput, descricaoInput, listaAtual);

    if (resultado.sucesso && resultado.item) {
      onSave(resultado.item);
      goBack();
    } else if (resultado.erro) {
      Alert.alert("Erro", resultado.erro);
    }
  };

  return { textoInput, setTextoInput, descricaoInput, setDescricaoInput, salvar };
}