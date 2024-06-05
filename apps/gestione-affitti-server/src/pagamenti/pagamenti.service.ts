import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PagamentiServiceBase } from "./base/pagamenti.service.base";

@Injectable()
export class PagamentiService extends PagamentiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
