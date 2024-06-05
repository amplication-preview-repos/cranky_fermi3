import { UtentiWhereInput } from "./UtentiWhereInput";
import { UtentiOrderByInput } from "./UtentiOrderByInput";

export type UtentiFindManyArgs = {
  where?: UtentiWhereInput;
  orderBy?: Array<UtentiOrderByInput>;
  skip?: number;
  take?: number;
};
