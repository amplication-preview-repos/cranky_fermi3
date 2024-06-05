import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ImmobiliResolverBase } from "./base/immobili.resolver.base";
import { Immobili } from "./base/Immobili";
import { ImmobiliService } from "./immobili.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Immobili)
export class ImmobiliResolver extends ImmobiliResolverBase {
  constructor(
    protected readonly service: ImmobiliService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
