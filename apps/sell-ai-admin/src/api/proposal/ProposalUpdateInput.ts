import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProposalUpdateInput = {
  customer?: string | null;
  customerUser?: string | null;
  opportunity?: OpportunityWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  proposalContent?: string | null;
  status?: "Option1" | null;
  supplier?: string | null;
  supplierUser?: string | null;
};
