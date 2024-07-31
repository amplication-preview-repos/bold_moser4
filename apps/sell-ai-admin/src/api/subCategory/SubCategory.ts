import { Category } from "../category/Category";

export type SubCategory = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
