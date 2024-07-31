import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MatchWhereInput = {
  customer?: StringNullableFilter;
  customerUser?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  supplier?: StringNullableFilter;
  supplierUser?: StringNullableFilter;
};
