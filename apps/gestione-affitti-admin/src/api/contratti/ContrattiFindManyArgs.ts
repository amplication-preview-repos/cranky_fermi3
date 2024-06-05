import { ContrattiWhereInput } from "./ContrattiWhereInput";
import { ContrattiOrderByInput } from "./ContrattiOrderByInput";

export type ContrattiFindManyArgs = {
  where?: ContrattiWhereInput;
  orderBy?: Array<ContrattiOrderByInput>;
  skip?: number;
  take?: number;
};
