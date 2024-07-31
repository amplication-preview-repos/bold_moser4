import { Communication as TCommunication } from "../api/communication/Communication";

export const COMMUNICATION_TITLE_FIELD = "matchedCustomer";

export const CommunicationTitle = (record: TCommunication): string => {
  return record.matchedCustomer?.toString() || String(record.id);
};
