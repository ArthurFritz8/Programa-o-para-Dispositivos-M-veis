import { Item, criarItem } from '../models/Item';

export const validarEAdicionarItem = (nomeDigitado: string, descricaoDigitada: string, listaAtual: Item[]) => {
  if (nomeDigitado.length <= 2) {
    return { sucesso: false, erro: "O nome deve ter mais de 2 caracteres." };
  }

  const nomeJaExiste = listaAtual.some((item) => item.nome === nomeDigitado);
  
  if (nomeJaExiste) {
    return { sucesso: false, erro: "Já existe um item com esse nome na lista." };
  }

  const novoId = Date.now().toString(); 
  const novoItem = criarItem(novoId, nomeDigitado, descricaoDigitada);

  return { sucesso: true, item: novoItem };
};