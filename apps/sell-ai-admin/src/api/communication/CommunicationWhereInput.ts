import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommunicationWhereInput = {
  id?: StringFilter;
  matchedCustomer?: StringNullableFilter;
  scheduleCall?: DateTimeNullableFilter;
};
