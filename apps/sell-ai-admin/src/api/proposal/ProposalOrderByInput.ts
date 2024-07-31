import { SortOrder } from "../../util/SortOrder";

export type ProposalOrderByInput = {
  createdAt?: SortOrder;
  customer?: SortOrder;
  customerUser?: SortOrder;
  id?: SortOrder;
  opportunityId?: SortOrder;
  productId?: SortOrder;
  proposalContent?: SortOrder;
  status?: SortOrder;
  supplier?: SortOrder;
  supplierUser?: SortOrder;
  updatedAt?: SortOrder;
};
