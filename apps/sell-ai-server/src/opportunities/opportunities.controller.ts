import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OpportunitiesService } from "./opportunities.service";

@swagger.ApiTags("opportunities")
@common.Controller("opportunities")
export class OpportunitiesController {
  constructor(protected readonly service: OpportunitiesService) {}
}
