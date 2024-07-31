import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tags?: Array<"Option1">;
  typeField?: "Option1" | null;
  updatedAt: Date;
  username: string;
};
