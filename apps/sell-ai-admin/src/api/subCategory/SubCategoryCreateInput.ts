import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type SubCategoryCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  name?: string | null;
};
