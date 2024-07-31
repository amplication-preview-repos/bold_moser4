import { Product } from "../product/Product";
import { SubCategory } from "../subCategory/SubCategory";

export type Category = {
  createdAt: Date;
  id: string;
  name: string | null;
  products?: Array<Product>;
  subCategories?: Array<SubCategory>;
  updatedAt: Date;
};
