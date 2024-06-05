import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ImmobiliModuleBase } from "./base/immobili.module.base";
import { ImmobiliService } from "./immobili.service";
import { ImmobiliController } from "./immobili.controller";
import { ImmobiliResolver } from "./immobili.resolver";

@Module({
  imports: [ImmobiliModuleBase, forwardRef(() => AuthModule)],
  controllers: [ImmobiliController],
  providers: [ImmobiliService, ImmobiliResolver],
  exports: [ImmobiliService],
})
export class ImmobiliModule {}
