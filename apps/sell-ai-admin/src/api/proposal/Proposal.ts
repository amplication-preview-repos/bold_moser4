import { Product } from "../product/Product";

export type Proposal = {
  createdAt: Date;
  customer: string | null;
  customerUser: string | null;
  id: string;
  product?: Product | null;
  status?: "Option1" | null;
  supplier: string | null;
  supplierUser: string | null;
  updatedAt: Date;
};
