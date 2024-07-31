import { ProposalCreateNestedManyWithoutOpportunitiesInput } from "./ProposalCreateNestedManyWithoutOpportunitiesInput";

export type OpportunityCreateInput = {
  proposals?: ProposalCreateNestedManyWithoutOpportunitiesInput;
};
