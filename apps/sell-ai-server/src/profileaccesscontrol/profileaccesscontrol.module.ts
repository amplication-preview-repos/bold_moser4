import { Module } from "@nestjs/common";
import { ProfileAccessControlService } from "./profileaccesscontrol.service";
import { ProfileAccessControlController } from "./profileaccesscontrol.controller";
import { ProfileAccessControlResolver } from "./profileaccesscontrol.resolver";

@Module({
  controllers: [ProfileAccessControlController],
  providers: [ProfileAccessControlService, ProfileAccessControlResolver],
  exports: [ProfileAccessControlService],
})
export class ProfileAccessControlModule {}
