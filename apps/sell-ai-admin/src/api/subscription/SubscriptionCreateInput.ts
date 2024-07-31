import { UserCreateNestedManyWithoutSubscriptionsInput } from "./UserCreateNestedManyWithoutSubscriptionsInput";

export type SubscriptionCreateInput = {
  users?: UserCreateNestedManyWithoutSubscriptionsInput;
};
