import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProfileAccessControlService } from "./profileaccesscontrol.service";

@swagger.ApiTags("profileAccessControls")
@common.Controller("profileAccessControls")
export class ProfileAccessControlController {
  constructor(protected readonly service: ProfileAccessControlService) {}
}
