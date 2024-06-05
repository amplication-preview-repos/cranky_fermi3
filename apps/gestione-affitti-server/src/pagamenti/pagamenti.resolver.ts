import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PagamentiResolverBase } from "./base/pagamenti.resolver.base";
import { Pagamenti } from "./base/Pagamenti";
import { PagamentiService } from "./pagamenti.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Pagamenti)
export class PagamentiResolver extends PagamentiResolverBase {
  constructor(
    protected readonly service: PagamentiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
