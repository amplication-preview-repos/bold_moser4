import * as graphql from "@nestjs/graphql";
import { OpportunitiesService } from "./opportunities.service";

export class OpportunitiesResolver {
  constructor(protected readonly service: OpportunitiesService) {}
}
