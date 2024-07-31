import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProposalCreateNestedManyWithoutProductsInput } from "./ProposalCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  proposals?: ProposalCreateNestedManyWithoutProductsInput;
  supplier?: string | null;
};
