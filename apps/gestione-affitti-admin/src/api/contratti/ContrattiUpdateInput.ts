export type ContrattiUpdateInput = {
  affitto?: number | null;
  altreSpese?: string | null;
  condizioniSpecialiClausole?: string | null;
  dataPagamento?: Date | null;
  depositoCauzione?: number | null;
  durataContratto?: number | null;
  fineLocazione?: Date | null;
  identificativo?: string | null;
  inizioLocazione?: Date | null;
  inquilini?: string | null;
  noteVarie?: string | null;
  numeroRegistrazioneAgenziaEntrate?: string | null;
  pagamento?: string | null;
  propriet?: string | null;
  spese?: number | null;
  tipologia?: string | null;
};
