import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProposalCreateInput = {
  customer?: string | null;
  customerUser?: string | null;
  product?: ProductWhereUniqueInput | null;
  status?: "Option1" | null;
  supplier?: string | null;
  supplierUser?: string | null;
};
