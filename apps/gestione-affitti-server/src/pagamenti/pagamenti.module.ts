import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PagamentiModuleBase } from "./base/pagamenti.module.base";
import { PagamentiService } from "./pagamenti.service";
import { PagamentiController } from "./pagamenti.controller";
import { PagamentiResolver } from "./pagamenti.resolver";

@Module({
  imports: [PagamentiModuleBase, forwardRef(() => AuthModule)],
  controllers: [PagamentiController],
  providers: [PagamentiService, PagamentiResolver],
  exports: [PagamentiService],
})
export class PagamentiModule {}
