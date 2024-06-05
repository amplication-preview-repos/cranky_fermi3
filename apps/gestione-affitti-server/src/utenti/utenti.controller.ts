import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UtentiService } from "./utenti.service";
import { UtentiControllerBase } from "./base/utenti.controller.base";

@swagger.ApiTags("utentis")
@common.Controller("utentis")
export class UtentiController extends UtentiControllerBase {
  constructor(
    protected readonly service: UtentiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
