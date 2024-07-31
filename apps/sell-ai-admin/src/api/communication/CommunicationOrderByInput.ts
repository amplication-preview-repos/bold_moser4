import { SortOrder } from "../../util/SortOrder";

export type CommunicationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  matchedCustomer?: SortOrder;
  scheduleCall?: SortOrder;
  updatedAt?: SortOrder;
};
