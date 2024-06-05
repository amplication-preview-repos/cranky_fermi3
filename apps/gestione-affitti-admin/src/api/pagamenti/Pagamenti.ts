export type Pagamenti = {
  aggiungiEntrata: number | null;
  aggiungiSpesa: number | null;
  avere: number | null;
  createdAt: Date;
  dare: number | null;
  id: string;
  nonPagati: boolean | null;
  pagati: boolean | null;
  riepilogo: string | null;
  rimanenza: number | null;
  storicoPagamenti: string | null;
  updatedAt: Date;
};
