import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tags?: Array<"Option1">;
  typeField?: "Option1" | null;
  username?: string;
};
