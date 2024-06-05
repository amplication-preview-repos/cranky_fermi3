import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PagamentiService } from "./pagamenti.service";
import { PagamentiControllerBase } from "./base/pagamenti.controller.base";

@swagger.ApiTags("pagamentis")
@common.Controller("pagamentis")
export class PagamentiController extends PagamentiControllerBase {
  constructor(
    protected readonly service: PagamentiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
