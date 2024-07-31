import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MatchList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Matches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer" source="customer" />
        <TextField label="customerUser" source="customerUser" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="supplier" source="supplier" />
        <TextField label="supplierUser" source="supplierUser" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
