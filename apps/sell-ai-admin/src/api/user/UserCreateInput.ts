import { InputJsonValue } from "../../types";
import { SubscriptionWhereUniqueInput } from "../subscription/SubscriptionWhereUniqueInput";

export type UserCreateInput = {
  customerFeedback?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  serviceDescription?: string | null;
  subscription?: SubscriptionWhereUniqueInput | null;
  supplierFeedback?: string | null;
  tags?: Array<"Option1">;
  typeField?: "Option1" | null;
  username: string;
  willingToPay?: number | null;
};
