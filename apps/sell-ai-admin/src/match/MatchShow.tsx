import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const MatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer" source="customer" />
        <TextField label="customerUser" source="customerUser" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <TextField label="supplier" source="supplier" />
        <TextField label="supplierUser" source="supplierUser" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
