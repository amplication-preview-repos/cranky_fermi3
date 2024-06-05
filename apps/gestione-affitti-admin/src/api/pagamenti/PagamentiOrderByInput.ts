import { SortOrder } from "../../util/SortOrder";

export type PagamentiOrderByInput = {
  aggiungiEntrata?: SortOrder;
  aggiungiSpesa?: SortOrder;
  avere?: SortOrder;
  createdAt?: SortOrder;
  dare?: SortOrder;
  id?: SortOrder;
  nonPagati?: SortOrder;
  pagati?: SortOrder;
  riepilogo?: SortOrder;
  rimanenza?: SortOrder;
  storicoPagamenti?: SortOrder;
  updatedAt?: SortOrder;
};
