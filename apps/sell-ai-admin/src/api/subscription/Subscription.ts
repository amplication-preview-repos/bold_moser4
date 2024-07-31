import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  users?: Array<User>;
};
