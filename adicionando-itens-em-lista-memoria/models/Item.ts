export type Item = {
  id: string;
  nome: string;
};

export const criarItem = (id: string, nome: string): Item => {
  return {
    id: id,
    nome: nome
  };
};