import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type UserWhereInput = {
  customerFeedback?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  serviceDescription?: StringNullableFilter;
  subscription?: SubscriptionWhereUniqueInput;
  supplierFeedback?: StringNullableFilter;
  typeField?: "Option1";
  username?: StringFilter;
  willingToPay?: IntNullableFilter;
};
