import { Match as TMatch } from "../api/match/Match";

export const MATCH_TITLE_FIELD = "customer";

export const MatchTitle = (record: TMatch): string => {
  return record.customer?.toString() || String(record.id);
};
