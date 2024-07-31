import { Opportunity } from "../opportunity/Opportunity";
import { Product } from "../product/Product";

export type Proposal = {
  createdAt: Date;
  customer: string | null;
  customerUser: string | null;
  id: string;
  opportunity?: Opportunity | null;
  product?: Product | null;
  proposalContent: string | null;
  status?: "Option1" | null;
  supplier: string | null;
  supplierUser: string | null;
  updatedAt: Date;
};
