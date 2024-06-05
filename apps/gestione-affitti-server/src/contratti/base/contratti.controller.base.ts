/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ContrattiService } from "../contratti.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ContrattiCreateInput } from "./ContrattiCreateInput";
import { Contratti } from "./Contratti";
import { ContrattiFindManyArgs } from "./ContrattiFindManyArgs";
import { ContrattiWhereUniqueInput } from "./ContrattiWhereUniqueInput";
import { ContrattiUpdateInput } from "./ContrattiUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContrattiControllerBase {
  constructor(
    protected readonly service: ContrattiService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contratti })
  @nestAccessControl.UseRoles({
    resource: "Contratti",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createContratti(
    @common.Body() data: ContrattiCreateInput
  ): Promise<Contratti> {
    return await this.service.createContratti({
      data: data,
      select: {
        affitto: true,
        altreSpese: true,
        condizioniSpecialiClausole: true,
        createdAt: true,
        dataPagamento: true,
        depositoCauzione: true,
        durataContratto: true,
        fineLocazione: true,
        id: true,
        identificativo: true,
        inizioLocazione: true,
        inquilini: true,
        noteVarie: true,
        numeroRegistrazioneAgenziaEntrate: true,
        pagamento: true,
        propriet: true,
        spese: true,
        tipologia: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Contratti] })
  @ApiNestedQuery(ContrattiFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Contratti",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contrattis(@common.Req() request: Request): Promise<Contratti[]> {
    const args = plainToClass(ContrattiFindManyArgs, request.query);
    return this.service.contrattis({
      ...args,
      select: {
        affitto: true,
        altreSpese: true,
        condizioniSpecialiClausole: true,
        createdAt: true,
        dataPagamento: true,
        depositoCauzione: true,
        durataContratto: true,
        fineLocazione: true,
        id: true,
        identificativo: true,
        inizioLocazione: true,
        inquilini: true,
        noteVarie: true,
        numeroRegistrazioneAgenziaEntrate: true,
        pagamento: true,
        propriet: true,
        spese: true,
        tipologia: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Contratti })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contratti",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contratti(
    @common.Param() params: ContrattiWhereUniqueInput
  ): Promise<Contratti | null> {
    const result = await this.service.contratti({
      where: params,
      select: {
        affitto: true,
        altreSpese: true,
        condizioniSpecialiClausole: true,
        createdAt: true,
        dataPagamento: true,
        depositoCauzione: true,
        durataContratto: true,
        fineLocazione: true,
        id: true,
        identificativo: true,
        inizioLocazione: true,
        inquilini: true,
        noteVarie: true,
        numeroRegistrazioneAgenziaEntrate: true,
        pagamento: true,
        propriet: true,
        spese: true,
        tipologia: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Contratti })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contratti",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateContratti(
    @common.Param() params: ContrattiWhereUniqueInput,
    @common.Body() data: ContrattiUpdateInput
  ): Promise<Contratti | null> {
    try {
      return await this.service.updateContratti({
        where: params,
        data: data,
        select: {
          affitto: true,
          altreSpese: true,
          condizioniSpecialiClausole: true,
          createdAt: true,
          dataPagamento: true,
          depositoCauzione: true,
          durataContratto: true,
          fineLocazione: true,
          id: true,
          identificativo: true,
          inizioLocazione: true,
          inquilini: true,
          noteVarie: true,
          numeroRegistrazioneAgenziaEntrate: true,
          pagamento: true,
          propriet: true,
          spese: true,
          tipologia: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Contratti })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contratti",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteContratti(
    @common.Param() params: ContrattiWhereUniqueInput
  ): Promise<Contratti | null> {
    try {
      return await this.service.deleteContratti({
        where: params,
        select: {
          affitto: true,
          altreSpese: true,
          condizioniSpecialiClausole: true,
          createdAt: true,
          dataPagamento: true,
          depositoCauzione: true,
          durataContratto: true,
          fineLocazione: true,
          id: true,
          identificativo: true,
          inizioLocazione: true,
          inquilini: true,
          noteVarie: true,
          numeroRegistrazioneAgenziaEntrate: true,
          pagamento: true,
          propriet: true,
          spese: true,
          tipologia: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
