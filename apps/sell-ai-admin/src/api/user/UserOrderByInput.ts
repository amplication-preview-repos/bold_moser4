import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  serviceDescription?: SortOrder;
  tags?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  willingToPay?: SortOrder;
};
