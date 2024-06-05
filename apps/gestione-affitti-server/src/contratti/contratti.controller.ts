import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContrattiService } from "./contratti.service";
import { ContrattiControllerBase } from "./base/contratti.controller.base";

@swagger.ApiTags("contrattis")
@common.Controller("contrattis")
export class ContrattiController extends ContrattiControllerBase {
  constructor(
    protected readonly service: ContrattiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
