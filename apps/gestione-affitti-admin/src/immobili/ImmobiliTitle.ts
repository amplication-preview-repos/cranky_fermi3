import { Immobili as TImmobili } from "../api/immobili/Immobili";

export const IMMOBILI_TITLE_FIELD = "cap";

export const ImmobiliTitle = (record: TImmobili): string => {
  return record.cap?.toString() || String(record.id);
};
