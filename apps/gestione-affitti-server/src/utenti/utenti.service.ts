import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UtentiServiceBase } from "./base/utenti.service.base";

@Injectable()
export class UtentiService extends UtentiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
