import { useState } from 'react';
import { Alert } from 'react-native';
import { validarEAdicionarItem } from '../services/ItemService';
import { Item } from '../models/Item';

export function useListaItensViewModel() {
  const [itens, setItens] = useState<Item[]>([]);
  const [textoInput, setTextoInput] = useState<string>('');
  const [descricaoInput, setDescricaoInput] = useState<string>('');

  const adicionarItem = () => {
    const resultado = validarEAdicionarItem(textoInput, descricaoInput, itens);

    if (resultado.sucesso && resultado.item) {
      setItens([...itens, resultado.item]); 
      setTextoInput(''); 
      setDescricaoInput('');
    } else if (resultado.erro) {
      Alert.alert("Erro", resultado.erro);
    }
  };

  const removerItem = (idParaRemover: string) => {
    const novaLista = itens.filter((item) => item.id !== idParaRemover);
    setItens(novaLista);
  };

  return {
    itens,
    textoInput,
    setTextoInput,
    descricaoInput,
    setDescricaoInput,
    adicionarItem,
    removerItem
  };
}