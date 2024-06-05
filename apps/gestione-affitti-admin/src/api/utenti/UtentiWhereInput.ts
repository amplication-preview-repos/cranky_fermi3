import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type UtentiWhereInput = {
  codiceFiscale?: StringNullableFilter;
  cognome?: StringNullableFilter;
  dataNascita?: DateTimeNullableFilter;
  documenti?: JsonFilter;
  documentoIdentit?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  luogoNascita?: StringNullableFilter;
  nome?: StringNullableFilter;
  note?: StringNullableFilter;
  telefono?: StringNullableFilter;
};
