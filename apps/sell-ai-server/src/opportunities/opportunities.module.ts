import { Module } from "@nestjs/common";
import { OpportunitiesService } from "./opportunities.service";
import { OpportunitiesController } from "./opportunities.controller";
import { OpportunitiesResolver } from "./opportunities.resolver";

@Module({
  controllers: [OpportunitiesController],
  providers: [OpportunitiesService, OpportunitiesResolver],
  exports: [OpportunitiesService],
})
export class OpportunitiesModule {}
