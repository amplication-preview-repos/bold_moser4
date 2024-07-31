import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommunicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="matchedCustomer" source="matchedCustomer" />
        <DateTimeInput label="scheduleCall" source="scheduleCall" />
      </SimpleForm>
    </Create>
  );
};
