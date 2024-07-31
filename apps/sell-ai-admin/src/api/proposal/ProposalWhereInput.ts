import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OpportunityWhereUniqueInput } from "../opportunity/OpportunityWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProposalWhereInput = {
  customer?: StringNullableFilter;
  customerUser?: StringNullableFilter;
  id?: StringFilter;
  opportunity?: OpportunityWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  proposalContent?: StringNullableFilter;
  status?: "Option1";
  supplier?: StringNullableFilter;
  supplierUser?: StringNullableFilter;
};
