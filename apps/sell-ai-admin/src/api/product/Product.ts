import { Category } from "../category/Category";
import { Proposal } from "../proposal/Proposal";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  proposals?: Array<Proposal>;
  supplier: string | null;
  updatedAt: Date;
};
