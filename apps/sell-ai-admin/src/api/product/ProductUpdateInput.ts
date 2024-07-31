import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProposalUpdateManyWithoutProductsInput } from "./ProposalUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  proposals?: ProposalUpdateManyWithoutProductsInput;
  supplier?: string | null;
};
