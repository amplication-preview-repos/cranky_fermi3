import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PagamentiWhereInput = {
  aggiungiEntrata?: FloatNullableFilter;
  aggiungiSpesa?: FloatNullableFilter;
  avere?: FloatNullableFilter;
  dare?: FloatNullableFilter;
  id?: StringFilter;
  nonPagati?: BooleanNullableFilter;
  pagati?: BooleanNullableFilter;
  riepilogo?: StringNullableFilter;
  rimanenza?: FloatNullableFilter;
  storicoPagamenti?: StringNullableFilter;
};
