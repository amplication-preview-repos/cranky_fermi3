import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ImmobiliService } from "./immobili.service";
import { ImmobiliControllerBase } from "./base/immobili.controller.base";

@swagger.ApiTags("immobilis")
@common.Controller("immobilis")
export class ImmobiliController extends ImmobiliControllerBase {
  constructor(
    protected readonly service: ImmobiliService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
