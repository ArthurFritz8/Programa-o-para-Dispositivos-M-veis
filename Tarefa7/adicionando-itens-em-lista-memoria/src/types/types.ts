import { Item } from '../models/Item';


export type RootTabParams = {
  Lista: undefined;
  Adicionar: {
    listaAtual: Item[];
    onSave: (novoItem: Item) => void;
  };
  Sobre: undefined;
};