import { ProductCreateNestedManyWithoutCategoriesInput } from "./ProductCreateNestedManyWithoutCategoriesInput";
import { SubCategoryCreateNestedManyWithoutCategoriesInput } from "./SubCategoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  name?: string | null;
  products?: ProductCreateNestedManyWithoutCategoriesInput;
  subCategories?: SubCategoryCreateNestedManyWithoutCategoriesInput;
};
