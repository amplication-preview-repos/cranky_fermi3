import { Contratti as TContratti } from "../api/contratti/Contratti";

export const CONTRATTI_TITLE_FIELD = "altreSpese";

export const ContrattiTitle = (record: TContratti): string => {
  return record.altreSpese?.toString() || String(record.id);
};
