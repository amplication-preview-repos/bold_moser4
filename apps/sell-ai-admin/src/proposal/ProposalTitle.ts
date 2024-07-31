import { Proposal as TProposal } from "../api/proposal/Proposal";

export const PROPOSAL_TITLE_FIELD = "customer";

export const ProposalTitle = (record: TProposal): string => {
  return record.customer?.toString() || String(record.id);
};
