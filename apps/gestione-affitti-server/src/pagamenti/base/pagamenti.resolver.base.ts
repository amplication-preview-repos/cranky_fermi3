/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Pagamenti } from "./Pagamenti";
import { PagamentiCountArgs } from "./PagamentiCountArgs";
import { PagamentiFindManyArgs } from "./PagamentiFindManyArgs";
import { PagamentiFindUniqueArgs } from "./PagamentiFindUniqueArgs";
import { CreatePagamentiArgs } from "./CreatePagamentiArgs";
import { UpdatePagamentiArgs } from "./UpdatePagamentiArgs";
import { DeletePagamentiArgs } from "./DeletePagamentiArgs";
import { PagamentiService } from "../pagamenti.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Pagamenti)
export class PagamentiResolverBase {
  constructor(
    protected readonly service: PagamentiService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Pagamenti",
    action: "read",
    possession: "any",
  })
  async _pagamentisMeta(
    @graphql.Args() args: PagamentiCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Pagamenti])
  @nestAccessControl.UseRoles({
    resource: "Pagamenti",
    action: "read",
    possession: "any",
  })
  async pagamentis(
    @graphql.Args() args: PagamentiFindManyArgs
  ): Promise<Pagamenti[]> {
    return this.service.pagamentis(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Pagamenti, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Pagamenti",
    action: "read",
    possession: "own",
  })
  async pagamenti(
    @graphql.Args() args: PagamentiFindUniqueArgs
  ): Promise<Pagamenti | null> {
    const result = await this.service.pagamenti(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Pagamenti)
  @nestAccessControl.UseRoles({
    resource: "Pagamenti",
    action: "create",
    possession: "any",
  })
  async createPagamenti(
    @graphql.Args() args: CreatePagamentiArgs
  ): Promise<Pagamenti> {
    return await this.service.createPagamenti({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Pagamenti)
  @nestAccessControl.UseRoles({
    resource: "Pagamenti",
    action: "update",
    possession: "any",
  })
  async updatePagamenti(
    @graphql.Args() args: UpdatePagamentiArgs
  ): Promise<Pagamenti | null> {
    try {
      return await this.service.updatePagamenti({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Pagamenti)
  @nestAccessControl.UseRoles({
    resource: "Pagamenti",
    action: "delete",
    possession: "any",
  })
  async deletePagamenti(
    @graphql.Args() args: DeletePagamentiArgs
  ): Promise<Pagamenti | null> {
    try {
      return await this.service.deletePagamenti(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
