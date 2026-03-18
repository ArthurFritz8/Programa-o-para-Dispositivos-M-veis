export type Item = {
  id: string;
  nome: string;
  descricao: string;
};

export const criarItem = (id: string, nome: string, descricao: string): Item => {
  return {
    id: id,
    nome: nome,
    descricao: descricao
  };
};