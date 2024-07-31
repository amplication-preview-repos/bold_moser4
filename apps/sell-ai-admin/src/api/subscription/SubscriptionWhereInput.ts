import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
