export interface Recipe {
  id: number;
  nome: string;
  ingredienti: string[] | string;
  tempoPreparazione: number;
  difficolta: string;
  immagine: string;
  descrizione: string;
  preparazione: string;
}
