import { Proposal } from "../proposal/Proposal";

export type Opportunity = {
  createdAt: Date;
  id: string;
  proposals?: Array<Proposal>;
  updatedAt: Date;
};
