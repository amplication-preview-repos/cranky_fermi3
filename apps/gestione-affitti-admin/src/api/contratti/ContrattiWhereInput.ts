import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContrattiWhereInput = {
  affitto?: FloatNullableFilter;
  altreSpese?: StringNullableFilter;
  condizioniSpecialiClausole?: StringNullableFilter;
  dataPagamento?: DateTimeNullableFilter;
  depositoCauzione?: FloatNullableFilter;
  durataContratto?: IntNullableFilter;
  fineLocazione?: DateTimeNullableFilter;
  id?: StringFilter;
  identificativo?: StringNullableFilter;
  inizioLocazione?: DateTimeNullableFilter;
  inquilini?: StringNullableFilter;
  noteVarie?: StringNullableFilter;
  numeroRegistrazioneAgenziaEntrate?: StringNullableFilter;
  pagamento?: StringNullableFilter;
  propriet?: StringNullableFilter;
  spese?: FloatNullableFilter;
  tipologia?: StringNullableFilter;
};
