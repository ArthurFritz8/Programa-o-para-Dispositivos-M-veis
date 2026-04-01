import { useState } from 'react';
import { Alert } from 'react-native';
import { Item } from '../models/Item';

export function useListaItensViewModel() {
  const [itens, setItens] = useState<Item[]>([]);

  const adicionarItemPronto = (novoItem: Item) => {
    setItens((listaAntiga) => [...listaAntiga, novoItem]);
  };

  const removerItem = (idParaRemover: string) => {
    Alert.alert(
      "Excluir Item",
      "Tem certeza que deseja excluir este item?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            const novaLista = itens.filter((item) => item.id !== idParaRemover);
            setItens(novaLista);
          }
        }
      ]
    );
  };

  return { itens, adicionarItemPronto, removerItem };
}