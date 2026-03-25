import { Item } from '../models/Item';

export type RootStackParamList = {
  Lista: undefined;
  Adicionar: {
    listaAtual: Item[];
    onSave: (novoItem: Item) => void;
  };
};