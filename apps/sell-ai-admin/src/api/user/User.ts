import { JsonValue } from "type-fest";
import { Subscription } from "../subscription/Subscription";

export type User = {
  createdAt: Date;
  customerFeedback: string | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  serviceDescription: string | null;
  subscription?: Subscription | null;
  supplierFeedback: string | null;
  tags?: Array<"Option1">;
  typeField?: "Option1" | null;
  updatedAt: Date;
  username: string;
  willingToPay: number | null;
};
