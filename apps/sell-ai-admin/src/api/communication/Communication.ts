export type Communication = {
  createdAt: Date;
  id: string;
  matchedCustomer: string | null;
  scheduleCall: Date | null;
  updatedAt: Date;
};
