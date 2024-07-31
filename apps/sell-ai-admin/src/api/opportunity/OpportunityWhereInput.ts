import { StringFilter } from "../../util/StringFilter";
import { ProposalListRelationFilter } from "../proposal/ProposalListRelationFilter";

export type OpportunityWhereInput = {
  id?: StringFilter;
  proposals?: ProposalListRelationFilter;
};
