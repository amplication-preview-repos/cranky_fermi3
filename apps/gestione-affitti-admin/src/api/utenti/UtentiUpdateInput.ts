import { InputJsonValue } from "../../types";

export type UtentiUpdateInput = {
  codiceFiscale?: string | null;
  cognome?: string | null;
  dataNascita?: Date | null;
  documenti?: InputJsonValue;
  documentoIdentit?: string | null;
  email?: string | null;
  luogoNascita?: string | null;
  nome?: string | null;
  note?: string | null;
  telefono?: string | null;
};
