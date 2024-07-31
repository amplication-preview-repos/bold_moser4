import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  serviceDescription?: string | null;
  tags?: Array<"Option1">;
  typeField?: "Option1" | null;
  username: string;
  willingToPay?: number | null;
};
