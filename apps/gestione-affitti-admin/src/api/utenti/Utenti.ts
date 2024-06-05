import { JsonValue } from "type-fest";

export type Utenti = {
  codiceFiscale: string | null;
  cognome: string | null;
  createdAt: Date;
  dataNascita: Date | null;
  documenti: JsonValue;
  documentoIdentit: string | null;
  email: string | null;
  id: string;
  luogoNascita: string | null;
  nome: string | null;
  note: string | null;
  telefono: string | null;
  updatedAt: Date;
};
