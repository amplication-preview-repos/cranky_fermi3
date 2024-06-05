import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContrattiModuleBase } from "./base/contratti.module.base";
import { ContrattiService } from "./contratti.service";
import { ContrattiController } from "./contratti.controller";
import { ContrattiResolver } from "./contratti.resolver";

@Module({
  imports: [ContrattiModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContrattiController],
  providers: [ContrattiService, ContrattiResolver],
  exports: [ContrattiService],
})
export class ContrattiModule {}
