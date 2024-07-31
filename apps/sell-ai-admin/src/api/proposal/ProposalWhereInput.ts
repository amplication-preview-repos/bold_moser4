import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ProposalWhereInput = {
  customer?: StringNullableFilter;
  customerUser?: StringNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  status?: "Option1";
  supplier?: StringNullableFilter;
  supplierUser?: StringNullableFilter;
};
