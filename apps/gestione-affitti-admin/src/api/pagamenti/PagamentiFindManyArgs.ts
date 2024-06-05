import { PagamentiWhereInput } from "./PagamentiWhereInput";
import { PagamentiOrderByInput } from "./PagamentiOrderByInput";

export type PagamentiFindManyArgs = {
  where?: PagamentiWhereInput;
  orderBy?: Array<PagamentiOrderByInput>;
  skip?: number;
  take?: number;
};
