import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImmobiliServiceBase } from "./base/immobili.service.base";

@Injectable()
export class ImmobiliService extends ImmobiliServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
