import { Utenti as TUtenti } from "../api/utenti/Utenti";

export const UTENTI_TITLE_FIELD = "codiceFiscale";

export const UtentiTitle = (record: TUtenti): string => {
  return record.codiceFiscale?.toString() || String(record.id);
};
