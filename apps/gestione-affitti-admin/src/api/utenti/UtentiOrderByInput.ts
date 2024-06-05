import { SortOrder } from "../../util/SortOrder";

export type UtentiOrderByInput = {
  codiceFiscale?: SortOrder;
  cognome?: SortOrder;
  createdAt?: SortOrder;
  dataNascita?: SortOrder;
  documenti?: SortOrder;
  documentoIdentit?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  luogoNascita?: SortOrder;
  nome?: SortOrder;
  note?: SortOrder;
  telefono?: SortOrder;
  updatedAt?: SortOrder;
};
