export type PagamentiCreateInput = {
  aggiungiEntrata?: number | null;
  aggiungiSpesa?: number | null;
  avere?: number | null;
  dare?: number | null;
  nonPagati?: boolean | null;
  pagati?: boolean | null;
  riepilogo?: string | null;
  rimanenza?: number | null;
  storicoPagamenti?: string | null;
};
