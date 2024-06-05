import { SortOrder } from "../../util/SortOrder";

export type ContrattiOrderByInput = {
  affitto?: SortOrder;
  altreSpese?: SortOrder;
  condizioniSpecialiClausole?: SortOrder;
  createdAt?: SortOrder;
  dataPagamento?: SortOrder;
  depositoCauzione?: SortOrder;
  durataContratto?: SortOrder;
  fineLocazione?: SortOrder;
  id?: SortOrder;
  identificativo?: SortOrder;
  inizioLocazione?: SortOrder;
  inquilini?: SortOrder;
  noteVarie?: SortOrder;
  numeroRegistrazioneAgenziaEntrate?: SortOrder;
  pagamento?: SortOrder;
  propriet?: SortOrder;
  spese?: SortOrder;
  tipologia?: SortOrder;
  updatedAt?: SortOrder;
};
