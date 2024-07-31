import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CommunicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Communications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="matchedCustomer" source="matchedCustomer" />
        <TextField label="scheduleCall" source="scheduleCall" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
