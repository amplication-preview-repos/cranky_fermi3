import { ImmobiliWhereInput } from "./ImmobiliWhereInput";
import { ImmobiliOrderByInput } from "./ImmobiliOrderByInput";

export type ImmobiliFindManyArgs = {
  where?: ImmobiliWhereInput;
  orderBy?: Array<ImmobiliOrderByInput>;
  skip?: number;
  take?: number;
};
