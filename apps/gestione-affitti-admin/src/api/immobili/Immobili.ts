import { JsonValue } from "type-fest";

export type Immobili = {
  canone: number | null;
  cap: string | null;
  caparraIniziale: number | null;
  categoriaCatasto: string | null;
  citt: string | null;
  classe: string | null;
  contratto: JsonValue;
  createdAt: Date;
  descrizione: string | null;
  documenti: JsonValue;
  foglioCatastale: string | null;
  foto: JsonValue;
  id: string;
  imu: number | null;
  indirizzo: string | null;
  mq2: number | null;
  note: string | null;
  numero: string | null;
  numeroLocali: number | null;
  numeroLocaliAggiuntivi: number | null;
  paese: string | null;
  particella: string | null;
  partita: string | null;
  piani: number | null;
  regione: string | null;
  renditaCatastale: number | null;
  riferimentiCatastali: string | null;
  sezioneUrbana: string | null;
  spese: number | null;
  subalterno: string | null;
  tipoLocazione: string | null;
  tipologiaPropriet: string | null;
  updatedAt: Date;
  zonaCensuaria: string | null;
};
