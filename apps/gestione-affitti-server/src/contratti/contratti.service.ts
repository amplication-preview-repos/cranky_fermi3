import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContrattiServiceBase } from "./base/contratti.service.base";

@Injectable()
export class ContrattiService extends ContrattiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
