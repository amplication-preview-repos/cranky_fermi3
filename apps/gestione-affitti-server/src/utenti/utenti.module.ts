import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UtentiModuleBase } from "./base/utenti.module.base";
import { UtentiService } from "./utenti.service";
import { UtentiController } from "./utenti.controller";
import { UtentiResolver } from "./utenti.resolver";

@Module({
  imports: [UtentiModuleBase, forwardRef(() => AuthModule)],
  controllers: [UtentiController],
  providers: [UtentiService, UtentiResolver],
  exports: [UtentiService],
})
export class UtentiModule {}
