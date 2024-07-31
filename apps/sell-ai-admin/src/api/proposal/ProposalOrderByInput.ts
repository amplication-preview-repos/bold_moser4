import { SortOrder } from "../../util/SortOrder";

export type ProposalOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  customerUser?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  status?: SortOrder;
  supplier?: SortOrder;
  supplierUser?: SortOrder;
  updatedAt?: SortOrder;
};
