import { useState } from 'react';
import { Alert } from 'react-native';
import { validarEAdicionarItem } from '../services/ItemService';
import { Item } from '../models/Item';

export function useListaItensViewModel() {
  const [itens, setItens] = useState<Item[]>([]);
  const [textoInput, setTextoInput] = useState<string>('');

  const adicionarItem = () => {
    const resultado = validarEAdicionarItem(textoInput, itens);

    if (resultado.sucesso && resultado.item) {
      setItens([...itens, resultado.item]); 
      setTextoInput(''); 
    } else if (resultado.erro) {
      Alert.alert("Erro", resultado.erro);
    }
  };

  return {
    itens,
    textoInput,
    setTextoInput,
    adicionarItem
  };
}