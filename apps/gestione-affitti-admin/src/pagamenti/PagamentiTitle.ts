import { Pagamenti as TPagamenti } from "../api/pagamenti/Pagamenti";

export const PAGAMENTI_TITLE_FIELD = "id";

export const PagamentiTitle = (record: TPagamenti): string => {
  return record.id?.toString() || String(record.id);
};
