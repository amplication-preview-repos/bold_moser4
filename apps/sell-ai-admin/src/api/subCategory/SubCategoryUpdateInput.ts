import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type SubCategoryUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  name?: string | null;
};
