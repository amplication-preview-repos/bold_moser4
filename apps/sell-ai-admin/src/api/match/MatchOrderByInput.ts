import { SortOrder } from "../../util/SortOrder";

export type MatchOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  customerUser?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  supplier?: SortOrder;
  supplierUser?: SortOrder;
  updatedAt?: SortOrder;
};
