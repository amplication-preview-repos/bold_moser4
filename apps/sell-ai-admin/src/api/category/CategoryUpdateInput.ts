import { ProductUpdateManyWithoutCategoriesInput } from "./ProductUpdateManyWithoutCategoriesInput";
import { SubCategoryUpdateManyWithoutCategoriesInput } from "./SubCategoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  name?: string | null;
  products?: ProductUpdateManyWithoutCategoriesInput;
  subCategories?: SubCategoryUpdateManyWithoutCategoriesInput;
};
