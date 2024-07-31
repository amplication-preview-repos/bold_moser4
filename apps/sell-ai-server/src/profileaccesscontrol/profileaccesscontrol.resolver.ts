import * as graphql from "@nestjs/graphql";
import { ProfileAccessControlService } from "./profileaccesscontrol.service";

export class ProfileAccessControlResolver {
  constructor(protected readonly service: ProfileAccessControlService) {}
}
